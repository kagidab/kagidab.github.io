Pokemon = function(name, filename, entry, basehp, baseatt, 
		basedef, basespc, basespd, weight, type1, type2, moves, learn, learnlvl, evolve){
	this.name = name;
	this.fn = filename;
	this.entry = entry;
	this.basehp = basehp; this.baseatt = baseatt; 
	this.basespc = basespc; this.basedef = basedef; 
	this.basespd = basespd; this.weight = weight;
	this.type1 = type1; this.type2 = type2; 
	this.learn = learn;
	this.learnlvl = learnlvl;
	this.evolve = evolve;
	if(evolve == undefined) this.evolve = {at:1000000};
	this.type = ELE_POKEMON;
	this.statuses = new Array(STATUSNAMES.length);
	this.statuses.forEach(function(element){ element = false; });
	this.toString = function(){ return this.name; }
	this.moves = moves;

	this.copy = function(position, level){
		newpoke = new Pokemon(this.name, IMGDIR + this.fn, this.entry, this.basehp,
				this.basespc, this.baseatt, this.basedef, this.basespd, this.weight, 
				this.type1, this.type2, this.moves, this.learn, this.learnlvl, this.evolve);
		newpoke.id = this.id;
		newpoke.pos = position;
		newpoke.level = level;
		newpoke.fillstats();
		newpoke.xp = xpatlevel(level);
		newpoke.learn = this.learn;
		newpoke.learnlvl = this.learnlvl;
		newpoke.evolve = this.evolve;
		return newpoke;
	}

	this.checkifseen = function(owned){
		if(!p1.seen[this.id]){
			p1.seen[this.id] = true;
			p1.seentotal++;
		} 
		if(!p1.owned[this.id] && owned){
			p1.owned[this.id] = true;
			p1.ownedtotal++;
		}
	}

	//apply status effect
	this.become = function(statuseffect){
		if(!this.statuses[statuseffect]) {
			this.statuses[statuseffect] = true;
			return true;
		}
		return false;
	}

	//check current status
	this.checkstatus = function(){
		var count = 0; 
		var string = "";
		for(var i = 0; i < this.statuses.length; i++){
			if(this.statuses[i]) {
				if(count > 0) string += ", "
					string += STATUSNAMES[i];
				count++;
			}
		}
		return string;
	}

	this.regen = function(){
		if(this.statuses[STATUS_POISONED] && this.statuses[STATUS_BURNED]){
			this.curhp -= 2;
		} else if(this.statuses[STATUS_POISONED] || this.statuses[STATUS_BURNED]){
			this.curhp--;
		} else if(this.curhp < this.maxhp){
			this.curhp++;
		}
	}

	this.endoffight = function(){
		this.fillstats(true);
		this.statuses[STATUS_ASLEEP] = false;
		this.statuses[STATUS_CONFUSED] = false;
		this.statuses[STATUS_FROZEN] = false;
	}

	this.hpcalc = function(){
		return Math.floor((this.basehp + 50) * this.level / 50 + 10);
	}

	this.statcalc = function(basestat){
		return Math.floor(basestat * this.level / 50 + 5);
	}

	this.changestat = function(stat, amount){
		if(stat == STAT_ATTACK){
			if(this.att + amount > this.statcalc(this.baseatt) / 2 &&
					this.att + amount < this.statcalc(this.baseatt) * 2) 
				this.att += amount; else return false;
		} else if(stat == STAT_DEFENCE){
			if(this.def + amount > this.statcalc(this.basedef) / 2 &&
					this.def + amount < this.statcalc(this.basedef) * 2) 
				this.def += amount; else return false;
		} else if(stat == STAT_SPECIAL){
			if(this.spc + amount > this.statcalc(this.basespc) / 2 &&
					this.spc + amount < this.statcalc(this.basespc) * 2) {
				this.spc += amount; 
			} else return false;
		} else if(stat == STAT_SPEED){
			if(this.spd + amount > this.statcalc(this.basespd) / 2 &&
					this.spd + amount < this.statcalc(this.basespd) * 2) {
				this.spd += amount; 
			} else return false;
		}
		return true;
	}

	//returns true if the attack goes through 
	//mostly UNTESTED
	//reduce complexity
	this.fightstatus = function(){
		var result = true;
		var attackanyway = false;
		if(this.statuses[STATUS_POISONED]){
			output(0, this + " is poisoned, it loses 1 HP.<br> ", true);
			this.curhp--;
		} 
		if(this.statuses[STATUS_BURNED]){
			output(0, this + " is burned, it loses 1 HP.<br> ", true);
			this.curhp--;
		}
		if(this.statuses[STATUS_ASLEEP]){
			if(randI(1, 2) == 1) {
				output(0,  this + " wakes up!<br>", true);
				this.statuses[STATUS_ASLEEP] = false;
			} else {
				output(0, this + " is sleeping.<br>", true);
				result = false;
			}
		}
		if(this.statuses[STATUS_CONFUSED] && result){
			if(randI(1, 3) == 1) {
				this.statuses[STATUS_CONFUSED] = false;
				output(0, this + " is confused no more!<br>", true);
			} else if(randI(1,2) == 1) {
				output(0, this + " is confused, ", true);
				attackanyway = true;
			} else {
				output(0, this + " is confused, it hurts itself in confusion.<br>", true);
				this.curhp--;
				result = false;
			}
		}
		if(this.statuses[STATUS_FROZEN] && result){
			if(randI(1, 2) == 1) {
				this.statuses[STATUS_FROZEN] = false;
				attackanyway = false;
				output(0, this + " is no longer frozen.<br>", true);
			} else{
				output(0, this + " is frozen, it cannot attack.<br>", true);
				result = false;
			}
		}
		if(this.statuses[STATUS_PARALYZED] && result){
			if(randI(1, 4) < 4) {
				output(0, this + " is paralyzed, ", true);
				attackanyway = true;
			} else {
				output(0, this + " is fully paralyzed!<br>", true);
				result = false;
				attackanyway = false;
			}
		}
		if(attackanyway && result) output(0, "it attacks anyway!<br>", true);
		return result;
	}

	// Recalculates stats
	// Argument chooses whether to go to full health or not
	this.fillstats = function(keepcurhp){
		this.maxhp = this.hpcalc(); 
		if(!keepcurhp) this.curhp = this.maxhp; //not always wanted
		this.att = this.statcalc(this.baseatt);
		this.def = this.statcalc(this.basedef);
		this.spd = this.statcalc(this.basespd);
		this.spc = this.statcalc(this.basespc);
	}

	this.evolvecheck = function(){
		return this.level >= this.evolve.at;
	}

	//doesn't limit moves currently... 
	this.trytolearn = function(move){
		output(0, "");
		for(var i = 0; i < this.moves.length; i++){
			if(this.moves[i] == move) return; //shouldn't, but probably will happen
		}
		if(this.moves.length < 4){ 
			this.moves.push(move);
		} else {
			var movetoforget = this.moves[randI(0, 3)];
			output(0, this + " forgot " + movetoforget + "... and ", true);
			this.moves.push(move);
		}
		output(0, this + " learned " + move + "!", true);
	}

	this.trylearnmoves = function(){
		for(var movenum = 0; movenum < this.learn.length; movenum++){
			if(this.learnlvl[movenum] == this.level){
				this.trytolearn(this.learn[movenum]);
			}
		}
	}

	this.givexp = function(xptogive){
		this.xp += xptogive;
		if(levelatxp(this.xp) > this.level){
			this.level = levelatxp(this.xp);
			oldhp = this.curhp;
			oldmax = this.maxhp;
			if(this.evolvecheck()) {
				evolve(this);
				return 2;
			} else {
				this.fillstats();
				this.curhp = oldhp + this.maxhp - oldmax; 
				this.trylearnmoves();
				return 1;
			}
		} else return 0;
	}
}

// Evolves pokemon by creating a new instance and replacing the ball's reference
// Change to not require ballref? Seems bad
function evolve(mon){
	var npok = mon.evolve.to.copy({}, mon.level);
	npok.xp = mon.xp;
	npok.curhp = mon.curhp;
	npok.checkifseen(true); 
	npok.ballref = mon.ballref;
	mon.ballref.contains = npok
}

function listpoke(){
	var rlist = [];
	p1.inv.balls.forEach(function(item){
		rlist.push(item.contains);
	});
	return rlist;
}

function wildmon(pos){
	var poklev = randI(Math.floor(curroom.poklev * .7), curroom.poklev);
	var poktype = randomelement(curroom.pokemon);
	encpok = newmon(poktype, poklev, pos);

	output(0,"A wild " + encpok.name + " appears!");
	output(0, "Press the any key to continue");
	if(listpoke().length > 0) {
		monout = charout = listpoke()[0];
		output(0, "Go, " + monout.name + "!");
	} else monout = p1;
	anykey = true;
	mode = MODE_BATTLE;
	update();
	$("#grid").addClass("blinkonce"); //queue music
}


function newmon(type, level, position){
	newpokemon = pokemon[type].copy(position, level);
	return newpokemon;
}

//returns the level of a pokemon with xp xp
function levelatxp(xp){
	return Math.floor(Math.pow(xp + 1, .3333));
}

//reverse of levelatxp
function xpatlevel(level){
	return level * level * level;
}

//xp needed to level up
function xptogo(mon){
	return xpatlevel(mon.level + 1) - mon.xp;
}

//returns the amount of xp a mon will give 
function xpgiven(mon){
	return mon.level * 10;
}

function gainxp(result, mon, amount){
	output(0, mon + " gains " + amount + "xp!");
	if(result == 1){
		output(0, " Level up!", true);
	} else if(result == 2){
		charout = mon.ballref.contains;
		output(0, " Level up! What's this? " + mon + " evolved into "
				+ charout, true);
	}
}

//what happens when a pokemon faints
//mon1 is winner
//situation 1 -> enemy faint
//0 -> you faint
//2 -> status faint
function pokefaint(mon1, mon2, situation) {
	output(0, "");
	if(situation < 2) output(1, mon2.name + " faints!"); 
	if(situation == 1){
		var oldname = mon1.name;
		var result = mon1.givexp(xpgiven(mon2));
		gainxp(result, mon1, xpgiven(mon2));
		if(randI(1, 10) == 1) items["pokeball"].copy(mon2.pos, curroom); //make drops more general
		items["berry"].copy(mon2.pos, curroom);
	} else {
		for(var i = p1.inv.balls.length - 1; i >= 0; i--){ 
			if(mon2.ballref == p1.inv.balls[i]) {
				p1.inv.balls.splice(i, 1);
			}
		}
		charout = p1;
	}
}
