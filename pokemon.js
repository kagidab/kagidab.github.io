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
	output("#bug1", "Press the any key to continue");
	anykey = true;
	mode = BATTLEMODE;
	drawmap();
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
		basespc: type.basespc, basespd: type.basespd, pos: position, exp:0, moves: type.moves
	};
	fillstats(newpoke);
	return newpoke;
}
