Pokemon = function(name, filename, entry, basehp, baseatt, 
		basedef, basespc, basespd, weight, type1, type2, moves, learn, learnlvl, evolve){
	this.name = name;
	this.fn = filename;
	this.entry = entry;
	this.basehp = basehp; this.baseatt = baseatt; 
	this.basespc = basespc; this.basedef = basedef; 
	this.basespd = basespd; this.weight = weight;
	this.type1 = type1; this.type2 = type2; 
	this.moves = moves;
	this.evolve = evolve;
	if(evolve == undefined) this.evolve = {at:1000000};
	this.type = POKEMON;
	this.statuses = new Array(STATUSNAMES.length);
	this.statuses.forEach(function(element){ element = false; });
	this.toString = function(){ return this.name; }
	this.copy = function(position, level){
		newpoke = new Pokemon(this.name, IMGDIR + this.fn, this.entry, this.basehp,
				this.basespc, this.baseatt, this.basedef, this.basespd, this.weight, 
				this.type1, this.type2, this.moves, this.evolve);
		newpoke.id = this.id;
		newpoke.pos = position;
		newpoke.level = level;
		newpoke.fillstats();
		newpoke.xp = xpatlevel(level);
		return newpoke;
	}
	this.checkifseen = function(ownedaswell){
		if(!seen[this.id]){
			seen[this.id] = true;
			seentotal++;
		} 
		if(!owned[this.id] && ownedaswell){
			owned[this.id] = true;
			ownedtotal++;
		}
	}

	this.become = function(statuseffect){
		if(!this.statuses[statuseffect]) {
			this.statuses[statuseffect] = true;
			return true;
		}
		return false;
	}

	this.howareyou = function(){
		count = 0; string = "";
		for(i = 0; i < this.statuses.length; i++){
			if(this.statuses[i]) {
				if(count > 0) string += ", "
					string += STATUSNAMES[i];
				count++;
			}
		}
		return string;
	}

	this.regen = function(){
		if(this.statuses[POISONED] && this.statuses[BURNED]){
			this.curhp -= 2;
		} else if(this.statuses[POISONED] || this.statuses[BURNED]){
			this.curhp--;
		} else if(this.curhp < this.maxhp){
			this.curhp++;
		}
	}

	this.endoffight = function(){
		this.fillstats(true);
		this.statuses[ASLEEP] = false;
		this.statuses[CONFUSED] = false;
		this.statuses[FROZEN] = false;
	}

	this.hpcalc = function(){
		return Math.floor((this.basehp + 50) * this.level / 50 + 10);
	}

	this.statcalc = function(basestat){
		return Math.floor(basestat * this.level / 50 + 5);
	}

	this.changestat = function(statnum, amount){
		if(statnum == ATTACKSTAT){
			if(this.att + amount > this.statcalc(this.baseatt) / 2 &&
					this.att + amount < this.statcalc(this.baseatt) * 2) 
				this.att += amount; else return false;
		} else if(statnum == DEFENCESTAT){
			if(this.def + amount > this.statcalc(this.basedef) / 2 &&
					this.def + amount < this.statcalc(this.basedef) * 2) 
				this.def += amount; else return false;
		} else if(statnum == SPECIALSTAT){
			if(this.spc + amount > this.statcalc(this.basespc) / 2 &&
					this.spc + amount < this.statcalc(this.basespc) * 2) 
				this.spc += amount; else return false;
		} else if(statnum == SPEEDSTAT){
			if(this.spd + amount > this.statcalc(this.basespd) / 2 &&
					this.spd + amount < this.statcalc(this.basespd) * 2) 
				this.spd += amount; else return false;
		}
		return true;
	}

	//returns true if the attack goes through 
	//UNTESTED, CBF
	this.checkstatus = function(){
		result = true;
		attackanyway = false;
		if(this.statuses[POISONED]){
			output("#bug0", this + " is poisoned, it loses 1 HP.<br> ", 1);
			this.curhp--;
		} 
		if(this.statuses[BURNED]){
			output("#bug0", this + " is burned, it loses 1 HP.<br> ", 1);
			this.curhp--;
		}
		if(this.statuses[ASLEEP]){
			if(randI(1,2) == 1) {
				output("#bug0",  this + " wakes up!<br>", 1);
				this.statuses[ASLEEP] = false;
			} else {
				output("#bug0", this + " is sleeping.<br>", 1);
				result = false;
			}
		}
		if(this.statuses[CONFUSED] && result){
			if(randI(1,2) == 1) {
				attackanyway = true;
				this.statuses[CONFUSED] = false;
				output("#bug0", this + " is confused no more!<br>", 1);
			} else {
				output("#bug0", this + " is confused, it hurts itself in confusion.<br>", 1);
				this.curhp--;
				result = false;
			}
		}
		if(this.statuses[FROZEN] && result){
			if(randI(1,2) == 1) {
				output("#bug0", this + " is frozen, ", 1);
				attackanyway = true;
			} else {
				output("#bug0", this + " is frozen, it cannot attack.<br>", 1);
				result = false;
			}
		}
		if(this.statuses[PARALYZED] && result){
			output("#bug0", this + " is paralyzed, ", 1);
			if(randI(1,2) == 1) {
				attackanyway = true;
			} else {
				output("#bug0", this + "is paralyzed and cannot attack.<br>", 1);
				result = false;
			}
		}
		if(attackanyway) output("#bug0", "it attacks anyway!<br>");
		return result;
	}

	this.fillstats = function(curhp){
		this.maxhp = this.hpcalc(); 
		if(!curhp) this.curhp = this.maxhp; //not always wanted
		this.att = this.statcalc(this.baseatt);
		this.def = this.statcalc(this.basedef);
		this.spd = this.statcalc(this.basespd);
		this.spc = this.statcalc(this.basespc);
	}

	this.evolvecheck = function(){
		if(this.level >= this.evolve.at){
			npok = this.evolve.to;
			this.name = npok.name; this.basehp = npok.basehp; this.baseatt = npok.baseatt;
			this.basedef = npok.basedef; this.basespc = npok.basespc;
			this.basespd = npok.basespd; this.fn = npok.fn; this.entry = npok.entry;
			this.weight = npok.weight; this.type1 = npok.type1; this.type2 = type2; 
			if(npok.evolve == undefined) this.evolve = {at:1000000};
			else this.evolve = npok.evolve;
			this.id = npok.id; this.checkifseen(true); this.fillstats();
			return true;
		}
		return false;
	}

	this.givexp = function(xptogive){
		this.xp += xptogive;
		if(levelatxp(this.xp) > this.level){
			this.level = levelatxp(this.xp);
			oldhp = this.curhp;
			oldmax = this.maxhp;
			if(this.evolvecheck()) {
				this.curhp = oldhp + this.maxhp - oldmax;
				return 2;
			} else {
				this.fillstats();
				this.curhp = oldhp + this.maxhp - oldmax; 
				return 1;
			}
		} else return 0;
	}
}

function listpoke(){
	rlist = [];
	p1.inv.balls.forEach(function(item){
		rlist.push(item.contains);
	});
	return rlist;
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


function newmon(type, level, position){
	newpoke = type.copy(position, level);
	return newpoke;
}

//returns the level of a pokemon with xp xp
function levelatxp(xp){
	return Math.floor(Math.pow(xp + 1, .3333));
}

//reverse
function xpatlevel(level){
	return level*level*level;
}

function xptogo(mon){
	return xpatlevel(mon.level+1)-mon.xp;
}
//returns the amount of xp a mon will give 
function xpgiven(mon){
	return mon.level * 10;
}

//mon1 is current mon, mon2 is defeated
//return 1 if level up, 2 if evolve, 0 otherwise 
function givexp(){
	mon1.xp += xpgiven(mon2);
	if(levelatxp(mon1.xp) > mon1.level){
		mon1.level = levelatxp(mon1.xp);
		if(evolvecheck()) return 2;
		if(mon1.evolve != undefined && mon1.evolve.at <= mon1.level){
			evolved = newmon(mon1.evolve.to, mon1.level, mon1.pos);
			evolved.xp = mon1.xp;
			evolved.ballref = mon1.ballref;
			evolved.checkifseen(true);
			mon1.ballref.contains = evolved;
			return 2;
		}
		oldhp = mon1.curhp;
		oldmax = mon1.maxhp;
		mon1.fillstats();
		mon1.curhp = oldhp + mon1.maxhp - oldmax; 
		return 1;
	} else return 0;
}

function gainxp(result, oldname, newname, amount){
	output("#bug2", oldname + " gains " + amount + "xp!");
	if(result == 1){
		output("#bug2", " Level up!", 1);
	} else if(result == 2){
		output("#bug2", " Level up! What's this? " + pokename + " evolved into "
				+ mon1.ballref.contains.name, 1);
		charout = mon1.ballref.contains;
	}
}

//what happens when a pokemon dies
//mon1 is winner
//situation 1 -> enemy death
//0-> your battledeath
//2-> status death
function pokedeath(mon1, mon2, situation) {
	if(situation < 2) output("#bug1", mon1.name + " kills the " + mon2.name + "!"); 
	if(situation == 1){
		oldname = mon1.name;
		//result = xpup(mon1, mon2);
		//gainxp(result, oldname, mon1.name, xpgiven(mon2));
		mon1.givexp(xpgiven(mon2));
		cpos = mon2.pos;
	} else {
		for(i = p1.inv.balls.length - 1; i >= 0; i--){
			if(mon2.ballref == p1.inv.balls[i]) {
				p1.inv.balls.splice(i, 1);
			}
		}
		charout = p1;
		cpos = p1.pos;
	}
	newitem = CORPSE.copy(cpos, curroom);
	newitem.name = mon2.name + " corpse";
	output("#bug3", "");
}
