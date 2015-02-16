function fightingmessage(){
	if(monout == p1){
		output("#bug0", "You are battling a wild " + encpok.name+ "!");
	} else {
		output("#bug0", monout.name+ " is battling a wild " + encpok.name+ "!");
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
			backtonormal();
			update();
		}
	} else if(key == KEY.N) flee();
}

//could be tauter
function listattacks(){
	output("#bug0", "Which move to use?");
	output("#bug1", "(A) " + monout.moves[0].name);
	if(monout.moves.length > 1) output("#bug1", " (S) " + monout.moves[1].name, 1);
	if(monout.moves.length > 2) output("#bug2", "(D) " + monout.moves[2].name);
	if(monout.moves.length > 3) output("#bug2", " (F) " + monout.moves[3].name, 1);
	output("#bug3", "(ESC) Back");
}

function listitems(){
	listofitems = listusable();
	if(listofitems.length != 0){
		output("#bug0", "Which item to use?");
		output("#bug1", listonseverallines(listofitems));
		output("#bug3", "(ESC) Back");
	} else {
		backtonormal();
		output("#bug0", "You have no usable items"); 
	}
}

function switchpoke(){
	listofpoke = listpoke();
	if(listofpoke.length != 0){
		output("#bug0", "Which Pokemon to switch to?");
		output("#bug1", listonseverallines(listofpoke));
		output("#bug2", "(" + alphabet[listofpoke.length] + ") " + p1.name);
		output("#bug3", "(ESC) Back");
	} else {
		backtonormal();
		output("#bug0", "No Pokemon to switch to");
	}
}

function listusable(){
	rlist = [];
	p1.inventory.forEach(function(item){
		if(item.itemtype == USABLE){
			rlist.push(item);
		}
	});
	return rlist;
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
	if(key == KEY.ESCAPE) backtonormal();
	else if(itemused != NIL){
		p1.inventory.splice(itemused.index, 1);
		backtonormal();
		output("#bug0", "You use a " + itemused.item.name);
	}
}

function attackchoice(key){
	if(key == KEY.A){ attack(monout.moves[0]);}
	else if(key == KEY.S){ attack(monout.moves[1]);}
	else if(key == KEY.D){ attack(monout.moves[2]);}
	else if(key == KEY.F){ attack(monout.moves[3]);}
	else if(key == KEY.ESCAPE) backtonormal();
}

function menuchoice(key){
	if(key == KEY.A){ fightmenu = ATTACKMENU; listattacks();}
	else if(key == KEY.S){ fightmenu = SWITCHMENU; switchpoke(); }
	else if(key == KEY.F){ flee(); }
	else if(key == KEY.D){ fightmenu = ITEMMENU; listitems(); }
	else if(key == KEY.P){ output("#bug0", "Pokedex say: " + encpok.entry); }
	else fightingmessage();
}


function attack(moveused){
	encmov = justanyol(encpok.moves);
	dam1 = damage(moveused, monout, encpok);
	dam2 = damage(encmov, encpok, monout);
	if(monout.spd >= encpok.spd){
		encpok.curhp -= dam1;
		if(encpok.curhp <= 0){ 
			output("#bug0", monout.name + " used " + moveused.name + " for " + dam1 + " damage!");
			pokedeath(monout, encpok, 1);
			backtowalk();
		} else {
			monout.curhp -= dam2;
			update();
			if(monout.curhp <= 0){
				if(monout == p1) playerdeath();
				else {
					pokedeath(encpok, monout);
					output("#bug2", "Keep battling(Y/N)");
					fightmenu = KEEPHOLDINGON;
				}
			} else {
				backtonormal();
			}
			output("#bug0", monout.name + " used " + moveused.name + " for " + dam1 + " damage!");
			output("#bug0", "<br>Enemy " + encpok.name + " used " + encmov.name + " for " + dam2 + " damage!", 1);
		}
	} else {
		output("#bug0", "Enemy " + encpok.name + " used " + encmov.name + " for " + dam2 + " damage!");
		output("#bug0", "<br>" + monout.name + " used " + moveused.name + " for " + dam1 + " damage!", 1);
	}
}

function backtonormal(){
	fightingmessage();
	fightmenu = NORMALMENU;
}

function switchout(key){
	alphanum = key - KEY.A;
	pokelist = listpoke();
	if(alphanum >= 0 && alphanum < pokelist.length){
		monout = pokelist[alphanum];
		charout = monout;
		backtonormal();
		output("#bug0", "It's your turn, " + monout.name + "!");
	} else if(alphanum == pokelist.length){
		charout = p1;
		monout = p1;
		backtonormal();
	} else if(key == KEY.ESCAPE) backtonormal();
	update();
}

function flee(){
	bugspray();
	output("#bug0", "You cower from the " + encpok.name);
	backtowalk();
}

function backtowalk(){
	mode = WALKMODE;
	update();
	charout = p1;
}
