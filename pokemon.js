function hpcalc(mon){
	return Math.floor((mon.basehp+50)*mon.level/50+10);
}

function statcalc(mon, basestat){
	return Math.floor((basestat+50)*mon.level/50+5);
}

function critical(mon){
	if(Math.random() > mon.spd/512) return true; else return false;
}

function listpoke(){
	rlist = [];
	p1.inventory.forEach(function(item){
		if(item.itemtype == BALL){
			rlist.push(item.contains);
		}
	});
	return rlist;
}

function damage(move, mon1, mon2){
	if(move.type == mon1.type1 || move.type == mon1.type2) stab=1.5;
	else stab=1;
	effective = effec[move.type.id][mon2.type1.id]*
		effec[move.type.id][mon2.type2.id];
	if(critical(move, mon1)){
		crit = 2;
	} else crit = 1;
	rndfac = 0.85+.15*Math.random();
	mod = stab*effective*crit*rndfac;
	if(move.special)
		Math.floor(((2*mon1.level+10)/250*(mon1.spc/mon2.spc)*move.base+2)*mod);
	else 
		return Math.floor(((2*mon1.level+10)/250*(mon1.att/mon2.def)*move.base+2)*mod);
}

function wildmon(pos){
	poklev = randI(Math.floor(curroom.poklev*.7), curroom.poklev);
	poktype = justanyol(curroom.pokemon);
	encpok = newmon(poktype, poklev, pos);

	output("#bug0","A wild " + encpok.name + " appears!");
	output("#bug2", "Press the any key to continue");
	if(listpoke().length > 0) {
		monout = charout = listpoke()[0];
		output("#bug1", "Go, " + monout.name + "!");
	} else monout = p1;
	anykey = true;
	mode = BATTLEMODE;
	update();
	$("#grid").addClass("blinkonceforyes");
}

function fillstats(mon){
	mon.maxhp = hpcalc(mon); mon.curhp = mon.maxhp;
	mon.att = statcalc(mon, mon.baseatt);
	mon.def = statcalc(mon, mon.basedef);
	mon.spd = statcalc(mon, mon.basespd);
	mon.spc = statcalc(mon, mon.basespc);
	while(mon.moves.length < 4) mon.moves.push(NILMOVE);
}

function newmon(type, level, position){
	newpoke = {
		type: type.type,
		type1 : type.type1, type2: type.type2, name: type.name, fn: type.fn, level: level, 
		basehp: type.basehp, baseatt: type.baseatt, basedef: type.basedef,
		basespc: type.basespc, basespd: type.basespd, pos: position, exp:0, moves: type.moves,
		xp: xpatlevel(level), evolve: type.evolve
	};
	fillstats(newpoke);
	return newpoke;
}

//returns the level of a pokemon with xp xp
function levelatxp(xp){
	return Math.floor(Math.sqrt(xp) / 5);
}

//reverse
function xpatlevel(level){
	return level*level*25;
}

function xptogo(mon){
	return xpatlevel(mon.level+1)-mon.xp;
}
//returns the amount of xp a mon will give 
function xpgiven(mon){
	return mon.level * 50;
}

//mon1 is current mon, mon2 is defeated
//return 1 if level up, 2 if evolve, 0 otherwise 
function xpup(mon1, mon2){
	mon1.xp += xpgiven(mon2);
	if(levelatxp(mon1.xp) > mon1.level){
		mon1.level = levelatxp(mon1.xp);
		if(mon1.evolve != undefined && mon1.evolve.at <= mon1.level){
			evolved = newmon(mon1.evolve.to, mon1.level, mon1.pos);
			evolved.xp = mon1.xp;
			evolved.ballref = mon1.ballref;
			mon1.ballref.contains = evolved; //bleh, I want pointers
			return 2;
		}
		fillstats(mon1);
		return 1;
	} else return 0;
}

//what happens when a wild pokemon dies
//will adjust to suit trainer battles
//maybe better in fighting.js
//mon1 is winner
//can maybe adjust to suit your pokemon death
function pokedeath(mon1, mon2) {
	output("#bug1", mon1.name + " kills the " + mon2.name + "!");
	output("#bug3", "");
	result = xpup(mon1, mon2);
	output("#bug2", mon1.name + " gains " + xpgiven(mon2) + "xp!");
	pokename = mon1.name;
	if(result == 1){
		output("#bug2", " Level up!", 1);
	} else if(result == 2){
		output("#bug2", " Level up! What's this? " + pokename + " evolved into "
				+ mon1.ballref.contains.name, 1);
		charout = mon1.ballref.contains;
	}
	newitem = makeitem(CORPSE, curroom, mon2.pos);
	newitem.name = mon2.name + " corpse";
	backtowalk();
}
