/* fighting.js
 *
 * Contains the code for combat
 */


//Gives the output during combat, 
function fightingmessage(topline){
	if(topline){
		if(monout == p1){
			output(0, "You are battling a wild " + encpok + "!");
		} else {
			output(0, monout + " is battling a wild " + encpok + "!");
		}
	}
	output(1, "(A) Attack (S) Switch");
	output(2, "(D) Catch (F) Flee");
	if(isininv(items["helixfossil"])){
		output(2, "<br>(X) Use Helix Fossil", true);
	}
	output(3, "HP: " + encpok.curhp + " / " + encpok.maxhp);
}

function fightinkeys(key){
	if(fightmenu == MENU_NORMAL){
		menuchoice(key);
	} else if (fightmenu == MENU_ATTACK){
		listattacks();
		attackchoice(key);
	} else if (fightmenu == MENU_ITEM){
		listitems();
		itemchoice(key);
	} else if(fightmenu == MENU_SWITCH){
		switchpoke();
		switchout(key);
	} else if(fightmenu == MENU_KEEPFIGHTING){
		holdon(key);
	}
}

function holdon(key){
	output(0, "Keep battling?(Y/N)");
	if(key == KEY.Y) {
		if(listpoke().length > 0){
			fightmenu = MENU_SWITCH; 
			curpage = 0;
			switchpoke();
		} else { 
			monout = p1;
			backtonormal(true);
			update();
		}
	} else if(key == KEY.N) { 
		clearoutputs(); 
		backtowalk();
	}
}

function listattacks(){
	output(0, "Which move to use?");
	output(1, "(A) " + moves[monout.moves[0]]);
	if(monout.moves.length > 1) output(1, " (S) " + moves[monout.moves[1]], 1);
	if(monout.moves.length > 2) output(2, "(D) " + moves[monout.moves[2]]);
	if(monout.moves.length > 3) output(2, " (F) " + moves[monout.moves[3]], 1);
	output(3, "(ESC) Back");
}

function switchpoke(){
	listofpoke = listoftype(ITEM_BALL);
	if(listofpoke.length != 0){
		output(0, "Which Pokemon to switch to?");
		listofpoke.push(p1);
		itemsonpage = pagebypage(listofpoke, curpage);
		output(3, "(ESC) Back");
	} else {
		backtonormal(false);
		output(0, "No Pokemon to switch to");
	}
}

function nthitemoftype(nth, type){
	count = 0;
	for(i = 0; i < p1.inventory.length; i++){
		if(p1.inventory[i].itemtype == type){
			if(count == nth) return {item: p1.inventory[i], index: i};
			count++;
		}
	};
	return NIL;
}

function itemchoice(key) {
	alphanum = key - KEY.A;
	itemused = nthitemoftype(alphanum, USABLE);
	if(key == KEY.ESCAPE) backtonormal(true);
	else if(itemused != NIL){
		p1.inventory.splice(itemused.index, 1);
		output(0, "You use a " + itemused.item);
		backtonormal(false);
	}
}

function attackchoice(key){
	if(key == KEY.A){ attack(monout.moves[0]);}
	else if(monout.moves.length > 1 && key == KEY.S){ attack(monout.moves[1]);}
	else if(monout.moves.length > 2 && key == KEY.D){ attack(monout.moves[2]);}
	else if(monout.moves.length > 3 && key == KEY.F){ attack(monout.moves[3]);}
	else if(key == KEY.ESCAPE) backtonormal(true);
}

function menuchoice(key){
	if(key == KEY.A){ 
		fightmenu = MENU_ATTACK; 
		listattacks();
	} else if(key == KEY.S){ 
		fightmenu = MENU_SWITCH; 
		curpage = 0; 
		switchpoke(); 
	} else if(key == KEY.F){ 
		flee(); 
	} else if(key == KEY.D){ 
		throwball(); 
	} //else if(key == KEY.D){ fightmenu = ITEMMENU; listitems(); }
	else{
		fightingmessage(true);
		if(key == KEY.P){ output(0, "Pokedex say: " + encpok.entry); }
		else if(key == KEY.X && isininv(items["helixfossil"])){
			output(0, "This isn't the time to use that!");
		} 
	}
}


function throwball(){
	balltouse = grabballs()[0];
	if(balltouse != null){
		purgeitemfromlist(p1.inv.usable, balltouse);
		if(Math.random() + 0.3 > encpok.curhp / encpok.maxhp){ //catch rate is more complicated
			balltouse.contains = encpok;
			if(!p1.owned[encpok.id]) p1.ownedtotal++;
			p1.owned[encpok.id] = true;
			encpok.ballref = balltouse;
			balltouse.itemtype = ITEM_BALL;
			output(0, "You catch the " + encpok + "!");
			p1.inv.balls.push(balltouse);
			backtowalk();
		} else {
			output(0, "You fail to catch the " + encpok + "!");
		}
	} else output(0, "You don't have enough Pokeballs");
}

//mon1 is to be checked, mon2 is the opponent, 
function checkforfaint(mon1, mon2, enemy){
	if(mon1.curhp <= 0){
		if(enemy){
			backtowalk();
			pokefaint(mon2, mon1, 1);
			charout = p1;
		} else{
			if(mon1 == p1) playerfaint();
			else {
				pokefaint(mon2, mon1, 0);
				output(2, "Keep battling(Y/N)");
				fightmenu = MENU_KEEPFIGHTING;
			}
		}
		return true;
	}
	return false;
}

//this seems like it could be split better
function attack(move, onlyenemy){
	var encmov = moves[randomelement(encpok.moves)];
	var moveused = moves[move];
	if(onlyenemy){
		encmov.use(encpok, monout, true);
		if(!checkforfaint(monout, encpok)) backtonormal();
	} else {
		output(0, "");
		if(monout.spd >= encpok.spd){
			moveused.use(monout, encpok, false);
			if(!checkforfaint(encpok, monout, true)){ 
				output(0, "<br>", 1);
				encmov.use(encpok, monout, true);
				if(!checkforfaint(monout, encpok, false)) backtonormal();
			}
		} else {
			encmov.use(encpok, monout, true);
			if(!checkforfaint(monout, encpok, false)){
				output(0, "<br>", 1);
				moveused.use(monout, encpok, false);
				if(!checkforfaint(encpok, monout, true)) backtonormal();
			}
		}
	}
	update(true);
}

function backtonormal(topline){
	fightingmessage(topline);
	fightmenu = MENU_NORMAL;
}

function switchout(key){
	var alphanum = key - KEY.A;
	var num = curpage * ITEMSPERPAGE + alphanum;
	var pokelist = listpoke();
	pokelist.push(p1);
	if(alphanum >= 0 && num < pokelist.length && alphanum < ITEMSPERPAGE){
		monout = pokelist[num];
		charout = monout;
		output(0, "It's your turn, " + monout + "!");
		backtonormal(false);
	} else if(num == pokelist.length && alphanum < ITEMSPERPAGE){
		charout = p1;
		monout = p1;
		backtonormal(true);
	} else if(key == KEY.LESSTHAN){ 
		if(curpage > 0) curpage--;
		switchpoke();
	} else if(key == KEY.GREATERTHAN){ 
		if((1 + curpage) * ITEMSPERPAGE < pokelist.length) curpage++;
		switchpoke();
	} else if(key == KEY.ESCAPE) backtonormal();
	update();
}

function flee(){
	if(randI(1, 3) < 3){
		clearoutputs();
		output(0, "You cower from the " + encpok);
		backtowalk();
	} else {
		output(0, "You fail to run!<br>");
		attack(null, true);
	}
}

function backtowalk(){
	listpoke().forEach(function(pokemon){
		pokemon.endoffight();
	});
	p1.endoffight();
	mode = MODE_WALK;
	p1.att += hungerstatus; p1.def += hungerstatus;
	p1.spd += hungerstatus; p1.spc += hungerstatus;
	update();
	charout = p1;
}
