function Move(name, type, cat, base, pp, acc, effect){
	this.toString = function(){
		return this.name;
	}
	this.name = name;
	this.type = type;
	this.base = base;
	this.maxpp = pp;
	this.acc = acc;
	this.effect = effect; //status effect

	this.damage = function(mon1, mon2){
		if(this.type == mon1.type1 || this.type == mon1.type2) stab = 1.5;
		else stab = 1;
		effective = EFFECTIVE[this.type][mon2.type1]*
			EFFECTIVE[this.type][mon2.type2];
		if(critical(mon1)){ crit = 2; } else crit = 1;
		rndfac = 0.85 + 0.15 * prandom();
		mod = stab * effective * crit * rndfac;
		if(this.type == FIRE || this.type == GRASS || this.type == DRAGON || this.type ==
				WATER || this.type == ELECTRIC || this.type == PSYCHIC || this.type == ICE)
			special = true; else special = false;
		if(special)
			return Math.floor(((2*mon1.level+10)/250*(mon1.spc/mon2.spc) * this.base+2)*mod);
		else 
			return Math.floor(((2*mon1.level+10)/250*(mon1.att/mon2.def) * this.base+2)*mod);
	}

	//mon1 uses this on mon2
	this.use = function(mon1, mon2, enemy){
		dam = 0; affected = false;
		if(enemy) output("#bug0", "Enemy ", 1);
		if(mon1.checkstatus()){
			if(this.base > 0){
				dam = this.damage(mon1, mon2);
				mon2.curhp -= dam;
			} 
			if(this.effect != NOEFFECT) {
				affected = this.useeffect(mon1, mon2);
			}
			output("#bug0", this.usemessage(mon1, mon2, dam, affected), 1);
		}
	}

	this.useeffect = function(mon1, mon2){
		if(this.effect < ATTACKDOWN){
			return mon1.changestat(this.effect, 1);
		} else if(this.effect < POISONS){
			return mon2.changestat(this.effect - ATTACKDOWN, -1);
		} else {
			if(this.base == 0 || randI(1, 5) == 1){
				return mon2.become(this.effect - POISONS);
			}
		}
		return false;
	}

	this.usemessage = function(mon1, mon2, dam, affected){
		string = "";
		if(dam != 0){ 
			string = mon1 + " used " + this + " for " + dam + " damage! ";
		} else string = mon1 + " used " + this + ". ";
		if(this.effect != NOEFFECT){
			if(this.effect < ATTACKDOWN){
				if(affected){
					string += "<br>" + mon1 + "'s "+ STATNAMES[this.effect] + " goes up!";
				} else {
					string += "<br>" + mon1 + "'s " + STATNAMES[this.effect] + " won't go any higher!";
				}
			} else if(this.effect < POISONS){
				if(affected){
					string += "<br>" + mon2 + "'s " + STATNAMES[this.effect - ATTACKDOWN] + " falls!";
				} else {
					string += "<br>" + mon2 + "'s " + STATNAMES[this.effect - ATTACKDOWN] 
						+ " won't go any lower!";
				}
			} else if(affected) {
				string += "<br>" + mon2 + " " + STATUSMESSAGES[this.effect - POISONS] + "!";
			}
		}
		return string;
	}
}

function critical(mon){
	if(prandom() > mon.spd/512) return true; else return false;
}
