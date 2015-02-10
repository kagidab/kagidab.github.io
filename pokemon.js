function hpcalc(mon){
	return Math.floor((mon.basehp+50)*mon.lvl/50+10);
}

function hpcalc(mon, basestat){
	return Math.floor((mon.basestat+50)*mon.lvl/50+5);
}

function damage(move, mon1, mon2){
	if(move.type1 == mon1.type || move.type1 == mon1.type2) stab=1.5;
	else stab=1;
	effective = effec[move.type][mon2.type1*effec[move.type][mon2.type2];
	if(critical(move, mon1)){
		crit = 2;
	} else crit = 1;
	rndfac = 0.85+.15*Math.rand();
	mod = stab*effective*crit*rndfac;
	return Math.floor(((2*mon1.level+10)/250*(mon1.att/mon2.def)*move.base+2)*mod);
}
