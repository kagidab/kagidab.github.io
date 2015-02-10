function fightingmessage(){
	output("#bug0", "You are fighting a wild " + encpok.name+ "!");
	output("#bug1", "(A) Attack (S) Switch");
	output("#bug2", "(D) Items (F) Flee");
	output("#bug3", "HP: " + encpok.curhp + " / " + encpok.maxhp);
}

function demsbefightinkeys(key){
	fightingmessage();
	if(key == KEY.A){ attack();}
	else if(key == KEY.S){ switchout(); }
	else if(key == KEY.F){ flee(); }
	else if(key == KEY.D){ items(); }
	else if(key == KEY.P){ output("#bug0", "Pokedex say: " + encpok.entry); }
}

function attack(){
	dam = randI(1, p1.str);
	encpok.curhp -= dam;
	if(encpok.curhp <= 0){
		bugspray();
		output("#bug0", "You attack the " + encpok.name + " for " + dam + " damage!");
		output("#bug1", "The " + encpok.name + " dies");
		p1.exp++;
		newitem = makeitem(CORPSE, curroom, encpok.pos);
		newitem.name = encpok.name + " corpse";

		mode = WALKMODE;
		update(); //maybe make accessor thingies and link these
	} else {
		output("#bug0", "You attack the " + encpok.name + " for " + dam + " damage");
		output("#bug3", encpok.name +" HP: " + encpok.curhp + " / " + encpok.maxhp);
	}
}

function defend(){
	output("#bug0", "You defend");
}

function switchout(){

}

function flee(){
	bugspray();
	output("#bug0", "You cower from the " + encpok.name);
	mode = WALKMODE;
}

function wildmon(pos){
	poklev = randI(Math.floor(curroom.poklev*.7), curroom.poklev);
	poktype = justanyol(curroom.pokemon);
	encpok = newmon(poktype, poklev, pos);

	output("#bug0","A wild " + encpok.name + " appears!");
	output("#bug1", "Press the any key to continue");
	anykey = true;
	mode = BATTLEMODE;
	drawmap();
	$("#grid").addClass("blinkonceforyes");
}
