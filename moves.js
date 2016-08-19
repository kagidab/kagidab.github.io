function Move(name, type, cat, base, pp, acc, effect){

	this.name = name;
	this.type = type;
	this.base = base;
	this.maxpp = pp;
	this.acc = acc;
	this.effect = effect; //status effect

	// Roughly the Pokemon damage system
	this.damage = function(mon1, mon2){
		var stab = sametypebonus(move.type, mon1.type1, mon2.type2);
		var critmultiplier = criticalhit(mon1.spd);
		var effectiveness = EFFECTIVE[this.type][mon2.type1] * EFFECTIVE[this.type][mon2.type2];
		var randfactor = 0.85 + 0.15 * prandom();
		var special = isspecial(move.type);
		var mod = stab * effectiveness * critmultiplier * randfactor;

		if(special){
			return Math.floor(((2 * mon1.level + 10) / 250 * (mon1.spc / mon2.spc) * this.base + 2) * mod);
		} else {
			return Math.floor(((2 * mon1.level + 10) / 250 * (mon1.att / mon2.def) * this.base + 2) * mod);
		}
	}

	//mon1 uses this on mon2
	this.use = function(mon1, mon2, enemy){
		var dam = 0; 
		var affected = false;
		if(enemy) output(0, "Enemy ", 1);
		if(mon1.fightstatus()){
			if(this.base > 0){
				dam = this.damage(mon1, mon2);
				mon2.curhp -= dam;
			} 
			if(this.effect != EFFECT_NONE) {
				affected = this.useeffect(mon1, mon2);
			}
			output(0, this.usemessage(mon1, mon2, dam, affected), 1);
		}
	}

	this.useeffect = function(mon1, mon2){
		if(this.effect < EFFECT_ATTACKDOWN){
			return mon1.changestat(this.effect, 1);
		} else if(this.effect < EFFECT_POISONS){
			return mon2.changestat(this.effect - EFFECT_ATTACKDOWN, -1);
		} else {
			if(this.base == -1 || randI(1, 5) == 1){
				return mon2.become(this.effect - EFFECT_POISONS);
			}
		}
		return false;
	}

	this.usemessage = function(mon1, mon2, dam, affected){
		var string = "";
		if(dam != 0){ 
			string = mon1 + " used " + this + " for " + dam + " damage! ";
		} else string = mon1 + " used " + this + ". ";
		if(this.effect != EFFECT_NONE){
			if(this.effect < EFFECT_ATTACKDOWN){
				if(affected){
					string += "<br>" + mon1 + "'s "+ STATNAMES[this.effect] + " goes up!";
				} else {
					string += "<br>" + mon1 + "'s " + STATNAMES[this.effect] + " won't go any higher!";
				}
			} else if(this.effect < EFFECT_POISONS){
				if(affected){
					string += "<br>" + mon2 + "'s " + STATNAMES[this.effect - EFFECT_ATTACKDOWN] + " falls!";
				} else {
					string += "<br>" + mon2 + "'s " + STATNAMES[this.effect - EFFECT_ATTACKDOWN] 
						+ " won't go any lower!";
				}
			} else if(affected) {
				string += "<br>" + mon2 + " " + STATUSMESSAGES[this.effect - EFFECT_POISONS] + "!";
			}
		}
		return string;
	}

	this.toString = function(){
		return this.name;
	}

}

// Returns damage factor from critical hits
// In Gen 1, factor is 2, later 1.5
function criticalhit(speed){
	if(prandom() > speed / 512) {
		return 2; 
	} else {
		return 1;
	}
}

//Returns true if the type of a move is special
function isspecial(type){
	if(type == TYPE_FIRE || type == TYPE_GRASS || type == TYPE_DRAGON || type == TYPE_WATER 
			|| type == TYPE_ELECTRIC || type == TYPE_PSYCHIC || type == TYPE_ICE){
		return true;
	} else return false;
}

//Pokemon do more damage if they share a type with the move
function sametypebonus(movetype, montype1, montype2){
	if(movetype == montype1 || movetype == montype2) {
		return 1.5; 
	} else return 1;
}
