function fightingmessage(bug0toggle){
	if(bug0toggle){
		if(monout == p1){
			output("#bug0", "You are battling a wild " + encpok+ "!");
		} else {
			output("#bug0", monout + " is battling a wild " + encpok + "!");
		}
	}
	output("#bug1", "(A) Attack (S) Switch");
	output("#bug2", "(D) Items (F) Flee");
	output("#bug3", "HP: " + encpok.curhp + " / " + encpok.maxhp);
}

function demsbefightinkeys(key){
	if(fightmenu == NORMALMENU){
		menuchoice(key);
	} else if (fightmenu == ATTACKMENU){
		listattacks();
		attackchoice(key);
	} else if (fightmenu == ITEMMENU){
		listitems();
		itemchoice(key);
	} else if(fightmenu == SWITCHMENU){
		switchpoke();
		switchout(key);
	} else if(fightmenu == KEEPHOLDINGON){
		holdon(key);
	}
}

function holdon(key){
	output("#bug0", "Keep battling?(Y/N)");
	if(key == KEY.Y) {
		if(listpoke().length > 0){
			fightmenu = SWITCHMENU; 
			switchpoke();
		} else { 
			monout = p1;
			backtonormal(true);
			update();
		}
	} else if(key == KEY.N) flee();
}

function listattacks(){
	output("#bug0", "Which move to use?");
	output("#bug1", "(A) " + monout.moves[0]);
	if(monout.moves.length > 1) output("#bug1", " (S) " + monout.moves[1], 1);
	if(monout.moves.length > 2) output("#bug2", "(D) " + monout.moves[2]);
	if(monout.moves.length > 3) output("#bug2", " (F) " + monout.moves[3], 1);
	output("#bug3", "(ESC) Back");
}

function switchpoke(){
	listofpoke = listpoke();
	if(listofpoke.length != 0){
		output("#bug0", "Which Pokemon to switch to?");
		output("#bug1", listonseverallines(listofpoke));
		output("#bug2", "(" + alphabet[listofpoke.length] + ") " + p1);
		output("#bug3", "(ESC) Back");
	} else {
		backtonormal(false);
		output("#bug0", "No Pokemon to switch to");
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
		output("#bug0", "You use a " + itemused.item);
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
	if(key == KEY.A){ fightmenu = ATTACKMENU; listattacks();}
	else if(key == KEY.S){ fightmenu = SWITCHMENU; switchpoke(); }
	else if(key == KEY.F){ flee(); }
	else if(key == KEY.D){ fightmenu = ITEMMENU; listitems(); }
	else if(key == KEY.P){ output("#bug0", "Pokedex say: " + encpok.entry); }
	else fightingmessage(true);
}

//mon1 is to be checked, mon2 is the opponent, 
function checkfordeath(mon1, mon2, enemy){
	if(mon1.curhp <= 0){
		if(enemy){
			backtowalk();
			pokedeath(mon2, mon1, 1);
		} else{
			if(mon1 == p1) playerdeath();
			else {
				pokedeath(mon2, mon1, 0);
				output("#bug2", "Keep battling(Y/N)");
				fightmenu = KEEPHOLDINGON;
			}
		}
		return true;
	}
	return false;
}

//have only slightly tested with pokemon with > spd
function attack(moveused){
	encmov = justanyol(encpok.moves);
	output("#bug0", "");
	if(monout.spd >= encpok.spd){
		moveused.use(monout, encpok, false);
		if(!checkfordeath(encpok, monout, true)){ 
			output("#bug0", "<br>", 1);
			encmov.use(encpok, monout, true);
			if(!checkfordeath(monout, encpok, false)) backtonormal();
		}
	} else {
		encmov.use(encpok, monout, true);
		if(!checkfordeath(monout, encpok, false)){
			output("#bug0", "<br>", 1);
			moveused.use(monout, encpok, false);
			if(!checkfordeath(encpok, monout, true)) backtonormal();
		}
	}
	update(true);
}

function backtonormal(bug0toggle){
	fightingmessage(bug0toggle);
	fightmenu = NORMALMENU;
}

function switchout(key){
	alphanum = key - KEY.A;
	pokelist = listpoke();
	if(alphanum >= 0 && alphanum < pokelist.length){
		monout = pokelist[alphanum];
		charout = monout;
		output("#bug0", "It's your turn, " + monout + "!");
		backtonormal(false);
	} else if(alphanum == pokelist.length){
		charout = p1;
		monout = p1;
		backtonormal(true);
	} else if(key == KEY.ESCAPE) backtonormal();
	update();
}

function flee(){
	bugspray();
	output("#bug0", "You cower from the " + encpok);
	backtowalk();
}

function backtowalk(){
	listpoke().forEach(function(pokemon){
		pokemon.endoffight();
	});
	p1.endoffight();
	mode = WALKMODE;
	update();
	charout = p1;
}
