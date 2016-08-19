/* datum.js
 *
 * Contains basic data
 * Quite tedious with manual entry
 * Make automated system in future
 */

var maps = []
maps["bedroom"] = [
	[1,1,1,1,1,1,1],
	[2,0,0,0,0,3000001,2],
	[2,0,0,0,0,0,2],
	[2,0,0,5,0,0,2],
	[2,0,0,0,0,0,2],
	[2,0,0,0,0,0,2],
	[2,0,0,0,0,0,2],
	[1,1,1,1,1,1,1]];

maps["downstair"] = [
	[1,1,1,1,1,1,1],
	[2,0,5,2,0,4001000,2],
	[2,0,1,1,0,0,2],
	[2,0,0,0,0,0,2],
	[2,0,0,0,0,0,2],
	[2,0,0,0,0,0,2],
	[2,0,0,0,0,0,2],
	[1,1,1,6002003,1,1,1]];

maps["pallettown"] = [
	[11,11,11,11,11,11,11,12,16008009,16010011,16012013,12,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,12,13,13,13,12,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,12,13,13,13,12,11,11,11,11,11,11,11],
	[11,11,11,12,12,12,12,12,13,13,13,12,12,12,12,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0,10,10,10,10, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 2, 9, 9, 2, 0, 0,10,10,10, 0,12,11,11,11],
	[11,11,11,12,0, 2, 6004005, 9, 2, 0, 0, 7, 6006007, 8, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0,10,10,10,10, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 7, 6003002, 9, 8, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0,15,15,15,15, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,12,12,12,12,14,14,14,12,12,12,12,12,11,11,11],
	[11,11,11,11,11,11,11,11,14,14,14,11,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,11,14,14,14,11,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,11,17,17,17,11,11,11,11,11,11,11,11]];

maps["oakslab"] = [
	[1,1,1,1,1,1,1,1,1,1,1],
	[2,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,1,1,1,0,2],
	[2,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,2],
	[2,2,2,2,0,0,0,2,2,2,2],
	[2,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,2],
	[1,1,1,1,1,6005004,1,1,1,1,1]
];

maps["pointlesshouse"] = [
	[1,1,1,1,1],
	[2,0,0,0,2],
	[2,0,0,0,2],
	[2,0,0,0,2],
	[1,1,6007006,1,1]
];

maps["viridiancity"] = [
	[11,11,11,11,11,11,11,12,16020021,16022023,16024025,12,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,12,0, 0, 0,12,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,12,0, 0, 0,12,11,11,11,11,11,11,11],
	[11,11,11,12,12,12,12,12,0, 0, 0,12,12,12,12,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0,10,10,10,10, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 2, 9, 9, 2, 0, 0,10,10,10, 0,12,11,11,11],
	[11,11,11,12,0, 2, 6, 9, 2, 0, 0, 7, 6, 8, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0,10,10,10,10, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 7,6032033, 9, 8, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,12,12,12,12,0, 0, 0,12,12,12,12,12,11,11,11],
	[11,11,11,11,11,11,11,11,0, 0, 0,11,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,11,17,17,17,11,11,11,11,11,11,11,11]
	];

maps["vdcitystore"] = [
	[1,1,1,1,1],
	[2,0,0,0,2],
	[2,0,0,0,2],
	[2,0,0,0,2],
	[1,1,6033032,1,1]
];

maps["viktor"] = [
	[11,11,11,11,11,11,11],
	[11,0,0,0,0,0,11],
	[11,0,0,0,0,0,11],
	[11,0,0,0,0,0,11],
	[11,11,6099098,6101100,6103102,11,11]
];

MOVE_PHYSICAL = 0; MOVE_STATUS = 1; MOVE_SPECIAL = 2;
var movetypes = [MOVE_PHYSICAL, MOVE_STATUS, MOVE_SPECIAL];

//name,type, cat, base, PP, ACC, EFFECT
var moves = [];
moves["throwrock"] = new Move("Throw Rock", TYPE_NORMAL, MOVE_PHYSICAL, 100, 10, 10, EFFECT_NONE);
moves["absorb"] = new Move("Absorb", TYPE_GRASS, MOVE_SPECIAL,20, 100,25, EFFECT_NONE);//
moves["acid"] = new Move("Acid", TYPE_POISON, MOVE_SPECIAL,40,100,30, EFFECT_SPECIALDOWN);
moves["acidarmor"] = new Move("Acid Armor", TYPE_POISON, MOVE_STATUS, -1, -1, 20, EFFECT_DEFENSEUP);
moves["agility"] = new Move("Agility",  TYPE_PSYCHIC, MOVE_STATUS, -1, -1, 30, EFFECT_SPEEDUP);
moves["amnesia"] = new Move("Amnesia",  TYPE_PSYCHIC, MOVE_STATUS, -1, -1, 20, EFFECT_SPECIALUP);
moves["aurorabeam"] = new Move("Aurora Beam", TYPE_ICE, MOVE_SPECIAL, 65, 100, 20, EFFECT_ATTACKDOWN);
moves["barrage"] = new Move("Barrage",  TYPE_NORMAL, MOVE_PHYSICAL, 65, 85, 20, EFFECT_NONE);
moves["barrier"] = new Move("Barrier",  TYPE_PSYCHIC, MOVE_STATUS, -1, -1, 20, EFFECT_DEFENSEUP);
moves["bide"] = new Move("Bide",  TYPE_NORMAL, MOVE_PHYSICAL, 50, -1, 10, EFFECT_NONE);//
moves["bind"] = new Move("Bind",  TYPE_NORMAL, MOVE_PHYSICAL, 55, 85, 20, EFFECT_NONE);//
moves["bite"] = new Move("Bite",  TYPE_NORMAL, MOVE_PHYSICAL, 60, 100, 25, EFFECT_NONE);//
moves["blizzard"] = new Move("Blizzard",  TYPE_ICE, MOVE_SPECIAL, 110, 70, 5, EFFECT_FREEZES);
moves["bodyslam"] = new Move("Body Slam", TYPE_NORMAL, MOVE_PHYSICAL, 85, 100, 15, EFFECT_PARALYZES);
moves["boneclub"] = new Move("Bone Club", TYPE_GROUND, MOVE_PHYSICAL, 65, 85, 20, EFFECT_NONE);//
moves["bonemerang"] = new Move("Bonemerang",  TYPE_GROUND, MOVE_PHYSICAL, 100, 90, 10, EFFECT_NONE);//
moves["bubble"] = new Move("Bubble",  TYPE_WATER, MOVE_SPECIAL, 40, 100, 30, EFFECT_SPEEDDOWN);
moves["bubblebeam"] = new Move("Bubble Beam", TYPE_WATER, MOVE_SPECIAL, 65, 100, 20,  EFFECT_SPEEDDOWN);
moves["clamp"] = new Move("Clamp",  TYPE_WATER, MOVE_PHYSICAL, 65, 85, 10, EFFECT_NONE);//
moves["cometpunch"] = new Move("Comet Punch",  TYPE_NORMAL, MOVE_PHYSICAL, 58, 85, 15, EFFECT_NONE);//
moves["confuseray"] = new Move("Confuse Ray", TYPE_GHOST, MOVE_STATUS, -1, 100, 10, EFFECT_CONFUSES);
moves["confusion"] = new Move("Confusion",  TYPE_PSYCHIC, MOVE_SPECIAL, 50, 100, 25, EFFECT_CONFUSES);
moves["constrict"] = new Move("Constrict",  TYPE_NORMAL, MOVE_PHYSICAL, 10, 100, 35, EFFECT_SPEEDDOWN);
moves["conversion"] = new Move("Conversion",  TYPE_NORMAL, MOVE_STATUS, 50, -1, 30, EFFECT_NONE);//wat
moves["counter"] = new Move("Counter",  TYPE_FIGHTING, MOVE_PHYSICAL, 50, 100, 20, EFFECT_NONE);//
moves["crabhammer"] = new Move("Crabhammer",  TYPE_WATER, MOVE_PHYSICAL, 100, 90, 10, EFFECT_NONE);//
moves["cut"] = new Move("Cut",  TYPE_NORMAL, MOVE_PHYSICAL, 50, 95, 30, EFFECT_NONE);
moves["defensecurl"] = new Move("Defense Curl",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 40, EFFECT_DEFENSEUP);
moves["dig"] = new Move("Dig",  TYPE_GROUND, MOVE_PHYSICAL, 80, 100, 10, EFFECT_NONE);//
moves["disable"] = new Move("Disable",  TYPE_NORMAL, MOVE_STATUS, 50, 100, 20, EFFECT_NONE);//
moves["dizzypunch"] = new Move("Dizzy Punch",  TYPE_NORMAL, MOVE_PHYSICAL, 70, 100,10, EFFECT_CONFUSES);
moves["doublekick"] = new Move("Double Kick",  TYPE_FIGHTING, MOVE_PHYSICAL, 60, 100,30, EFFECT_NONE);//
moves["doubleslap"] = new Move("Double Slap",  TYPE_NORMAL, MOVE_PHYSICAL, 60, 85,10, EFFECT_NONE);//
moves["doubleteam"] = new Move("Double Team",  TYPE_NORMAL, MOVE_STATUS, -1, -1,15, EFFECT_NONE);//
moves["doubleedge"] = new Move("Double-Edge", TYPE_NORMAL, MOVE_PHYSICAL, 120, 100, 15, EFFECT_NONE);
moves["dragonrage"] = new Move("Dragon Rage",  TYPE_DRAGON, MOVE_SPECIAL, 50, 100, 10, EFFECT_NONE);//
moves["dreameater"] = new Move("Dream Eater",  TYPE_PSYCHIC, MOVE_SPECIAL, 100, 100, 20, EFFECT_NONE);//
moves["drillpeck"] = new Move("Drill Peck",  TYPE_FLYING, MOVE_PHYSICAL, 80, 100, 20, EFFECT_NONE);
moves["earthquake"] = new Move("Earthquake",  TYPE_GROUND, MOVE_PHYSICAL, 100, 100, 10, EFFECT_NONE);//
moves["eggbomb"] = new Move("Egg Bomb",  TYPE_NORMAL, MOVE_PHYSICAL, 100, 75,  10, EFFECT_NONE);
moves["ember"] = new Move("Ember",  TYPE_FIRE, MOVE_SPECIAL, 40, 100, 25, EFFECT_BURNS);
moves["explosion"] = new Move("Explosion",  TYPE_NORMAL, MOVE_PHYSICAL, 100, 100, 5, EFFECT_NONE);//
moves["fireblast"] = new Move("Fire Blast",  TYPE_FIRE, MOVE_SPECIAL, 110, 85,5, EFFECT_BURNS);
moves["firepunch"] = new Move("Fire Punch",  TYPE_FIRE, MOVE_PHYSICAL, 75, 100,15, EFFECT_BURNS);
moves["firespin"] = new Move("Fire Spin", TYPE_FIRE, MOVE_SPECIAL, 75, 85, 15, EFFECT_NONE);
moves["fissure"] = new Move("Fissure",  TYPE_GROUND, MOVE_PHYSICAL, 100, -1, 5, EFFECT_NONE);//
moves["flamethrower"] = new Move("Flamethrower",  TYPE_FIRE, MOVE_SPECIAL, 90, 100, 15, EFFECT_BURNS);
moves["flash"] = new Move("Flash",  TYPE_NORMAL, MOVE_STATUS, -1, 100, 20, EFFECT_SPEEDDOWN);//
moves["fly"] = new Move("Fly",  TYPE_FLYING, MOVE_PHYSICAL, 90, 95, 15, EFFECT_NONE);//
moves["focusenergy"] = new Move("Focus Energy", TYPE_NORMAL, MOVE_STATUS, -1, -1, 30, EFFECT_SPEEDUP);//
moves["furyattack"] = new Move("Fury Attack",  TYPE_NORMAL, MOVE_PHYSICAL, 65, 85, 20, EFFECT_NONE);//
moves["furyswipes"] = new Move("Fury Swipes",  TYPE_NORMAL, MOVE_PHYSICAL, 68, 80, 15, EFFECT_NONE);//
moves["glare"] = new Move("Glare",  TYPE_NORMAL, MOVE_STATUS, -1, 100, 30, EFFECT_PARALYZES);
moves["growl"] = new Move("Growl",  TYPE_NORMAL, MOVE_STATUS, -1, 100, 40, EFFECT_ATTACKDOWN);
moves["growth"] = new Move("Growth",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 40, EFFECT_ATTACKUP);//
moves["guillotine"] = new Move("Guillotine",  TYPE_NORMAL, MOVE_PHYSICAL, 100, -1, 5, EFFECT_NONE);//
moves["gust"] = new Move("Gust",  TYPE_FLYING, MOVE_SPECIAL, 40, 100, 35, EFFECT_NONE);//
moves["harden"] = new Move("Harden",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 30, EFFECT_DEFENSEUP);
moves["haze"] = new Move("Haze",  TYPE_ICE, MOVE_STATUS, 50, -1, 30, EFFECT_NONE);//
moves["headbutt"] = new Move("Headbutt",  TYPE_NORMAL, MOVE_PHYSICAL, 70, 100, 15, EFFECT_NONE);//
moves["hijumpkick"] = new Move("High Jump Kick", TYPE_FIGHTING, MOVE_PHYSICAL, 130, 90, 10, EFFECT_NONE);//
moves["hornattack"] = new Move("Horn Attack",  TYPE_NORMAL, MOVE_PHYSICAL, 65, 100, 25, EFFECT_NONE);
moves["horndrill"] = new Move("Horn Drill", TYPE_NORMAL, MOVE_PHYSICAL, -1, -1, 5, EFFECT_NONE);//
moves["hydropump"] = new Move("Hydro Pump",  TYPE_WATER, MOVE_SPECIAL, 110, 80, 5, EFFECT_NONE);
moves["hyperbeam"] = new Move("Hyper Beam",  TYPE_NORMAL, MOVE_SPECIAL, 110, 90, 5, EFFECT_NONE);//
moves["hyperfang"] = new Move("Hyper Fang",  TYPE_NORMAL, MOVE_PHYSICAL, 80, 90, 15, EFFECT_NONE);//
moves["hypnosis"] = new Move("Hypnosis",  TYPE_PSYCHIC, MOVE_STATUS, -1, 60, 20, EFFECT_PUTSASLEEP);
moves["icebeam"] = new Move("Ice Beam",  TYPE_ICE, MOVE_SPECIAL, 90, 100, 10, EFFECT_FREEZES);
moves["icepunch"] = new Move("Ice Punch",  TYPE_ICE, MOVE_PHYSICAL, 75, 100, 15, EFFECT_FREEZES);
moves["jumpkick"] = new Move("Jump Kick",  TYPE_FIGHTING, MOVE_PHYSICAL, 100, 95,10,  EFFECT_NONE);//
moves["karatechop"] = new Move("Karate Chop", TYPE_FIGHTING, MOVE_PHYSICAL, 50, 100,25, EFFECT_NONE);//
moves["kinesis"] = new Move("Kinesis",  TYPE_PSYCHIC, MOVE_STATUS, 50, 80, 15, EFFECT_NONE);//
moves["leechlife"] = new Move("Leech Life",  TYPE_BUG, MOVE_PHYSICAL, 20, 100,15, EFFECT_NONE);//
moves["leechseed"] = new Move("Leech Seed",  TYPE_GRASS, MOVE_STATUS, -1, 90, 10, EFFECT_NONE);//
moves["leer"] = new Move("Leer",  TYPE_NORMAL, MOVE_STATUS, -1, 100, 30, EFFECT_DEFENSEDOWN);
moves["lick"] = new Move("Lick",  TYPE_GHOST, MOVE_PHYSICAL, 30, 100, 30, EFFECT_PARALYZES);
moves["lightscreen"] = new Move("Light Screen",  TYPE_PSYCHIC, MOVE_STATUS, -1, -1,30, EFFECT_SPECIALDOWN);//
moves["lovelykiss"] = new Move("Lovely Kiss",  TYPE_NORMAL, MOVE_STATUS, -1, 75, 10, EFFECT_PUTSASLEEP);
moves["lowkick"] = new Move("Low Kick",  TYPE_FIGHTING, MOVE_PHYSICAL, 80, 100,20, EFFECT_NONE);//
moves["meditate"] = new Move("Meditate",  TYPE_PSYCHIC, MOVE_STATUS, -1, -1, 40, EFFECT_ATTACKUP);
moves["megadrain"] = new Move("Mega Drain", TYPE_GRASS, MOVE_SPECIAL, 40, 100, 15, EFFECT_NONE);//
moves["megakick"] = new Move("Mega Kick",  TYPE_NORMAL, MOVE_PHYSICAL, 120, 75, 5, EFFECT_NONE);
moves["megapunch"] = new Move("Mega Punch",  TYPE_NORMAL, MOVE_PHYSICAL, 80, 85, 20, EFFECT_NONE);
moves["metronome"] = new Move("Metronome",  TYPE_NORMAL, MOVE_STATUS, 100, -1, 10, EFFECT_NONE);//
moves["mimic"] = new Move("Mimic",  TYPE_NORMAL, MOVE_STATUS, 50, -1, 10, EFFECT_NONE);//
moves["minimize"] = new Move("Minimize",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 10, EFFECT_SPEEDUP);//
moves["mirrormove"] = new Move("Mirror Move",  TYPE_FLYING, MOVE_STATUS, 50, -1, 20, EFFECT_NONE);//
moves["mist"] = new Move("Mist",  TYPE_ICE, MOVE_STATUS, -1, -1, 30, EFFECT_DEFENSEUP);//
moves["nightshade"] = new Move("Night Shade",  TYPE_GHOST, MOVE_SPECIAL, 100, 100, 15, EFFECT_NONE);//
moves["payday"] = new Move("Pay Day", TYPE_NORMAL, MOVE_PHYSICAL, 40, 100, 20, EFFECT_NONE);//
moves["peck"] = new Move("Peck",  TYPE_FLYING, MOVE_PHYSICAL, 35, 100, 35, EFFECT_NONE);
moves["petaldance"] = new Move("Petal Dance",  TYPE_GRASS, MOVE_SPECIAL, 120, 100, 10, EFFECT_NONE);//
moves["pinmissile"] = new Move("Pin Misile",  TYPE_BUG, MOVE_PHYSICAL, 55, 85, 20, EFFECT_NONE);//
moves["poisongas"] = new Move("Poison Gas",  TYPE_POISON, MOVE_STATUS, -1, 90, 20, EFFECT_POISONS);
moves["poisonpowder"] = new Move("Poison Powder", TYPE_POISON, MOVE_STATUS, -1, 75, 20, EFFECT_POISONS);
moves["poisonsting"] = new Move("Poison Sting",  TYPE_POISON, MOVE_PHYSICAL, 15, 100, 20, EFFECT_POISONS);
moves["pound"] = new Move("Pound",  TYPE_NORMAL, MOVE_PHYSICAL, 40, 100, 35, EFFECT_NONE);
moves["psybeam"] = new Move("Psybeam",  TYPE_PSYCHIC, MOVE_SPECIAL, 65, 100, 20, EFFECT_CONFUSES);
moves["psychic"] = new Move("Psychic",  TYPE_PSYCHIC, MOVE_SPECIAL, 90, 100, 10, EFFECT_SPECIALDOWN);
moves["psywave"] = new Move("Psywave",  TYPE_PSYCHIC, MOVE_SPECIAL, 60, 80, 15, EFFECT_NONE);//
moves["quickattack"] = new Move("Quick Attack",  TYPE_NORMAL, MOVE_PHYSICAL, 40, 100, 20, EFFECT_NONE);//
moves["rage"] = new Move("Rage",  TYPE_NORMAL, MOVE_PHYSICAL, 20, 100, 20, EFFECT_ATTACKUP);//
moves["razorleaf"] = new Move("Razor Leaf",  TYPE_GRASS, MOVE_PHYSICAL, 55, 95, 20, EFFECT_NONE);//
moves["razorwind"] = new Move("Razor Wind",  TYPE_NORMAL, MOVE_SPECIAL, 80, 100, 20, EFFECT_NONE);//
moves["recover"] = new Move("Recover",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 10, EFFECT_DEFENSEUP);//
moves["reflect"] = new Move("Reflect",  TYPE_PSYCHIC, MOVE_STATUS, -1, -1, 20, EFFECT_DEFENSEUP);//
moves["rest"] = new Move("Rest",  TYPE_PSYCHIC, MOVE_STATUS, -1, -1, 10, EFFECT_PUTSASLEEP);//
moves["roar"] = new Move("Roar",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 20, EFFECT_ATTACKUP);//
moves["rockslide"] = new Move("Rock Slide", TYPE_ROCK, MOVE_PHYSICAL, 75, 90, 20, EFFECT_NONE);//
moves["rockthrow"] = new Move("Rock Throw", TYPE_ROCK, MOVE_PHYSICAL, 50, 90, 20, EFFECT_NONE);
moves["rollingkick"] = new Move("Rolling Kick", TYPE_FIGHTING, MOVE_PHYSICAL, 60, 85, 20, EFFECT_NONE);//
moves["sandattack"] = new Move("Sand Attack",  TYPE_GROUND, MOVE_STATUS, -1, 100, 20, EFFECT_SPEEDDOWN);//
moves["scratch"] = new Move("Scratch",  TYPE_NORMAL, MOVE_PHYSICAL, 40, 100, 35, EFFECT_NONE);
moves["screech"] = new Move("Screech",  TYPE_NORMAL, MOVE_STATUS, -1, 85, 40, EFFECT_DEFENSEDOWN);//
moves["seismictoss"] = new Move("Seismic Toss",  TYPE_FIGHTING, MOVE_PHYSICAL, 100, -1, 100, EFFECT_NONE);//
moves["selfdestruct"] = new Move("Self-Destruct", TYPE_NORMAL, MOVE_PHYSICAL, 100, 100, 5, EFFECT_NONE);//
moves["sharpen"] = new Move("Sharpen",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 30, EFFECT_ATTACKUP);
moves["sing"] = new Move("Sing",  TYPE_NORMAL, MOVE_STATUS, -1, 55, 15, EFFECT_PUTSASLEEP);
moves["skullbash"] = new Move("Skull Bash",TYPE_NORMAL, MOVE_PHYSICAL, 130, 100, 10, EFFECT_NONE);
moves["skyattack"] = new Move("Sky Attack", TYPE_FLYING, MOVE_PHYSICAL, 110, 90, 20, EFFECT_NONE);//
moves["slam"] = new Move("Slam",  TYPE_NORMAL, MOVE_PHYSICAL, 80, 75, 20, EFFECT_NONE);
moves["slash"] = new Move("Slash",  TYPE_NORMAL, MOVE_PHYSICAL, 70, 100, 20, EFFECT_NONE);//
moves["sleeppowder"] = new Move("Sleep Powder",  TYPE_GRASS, MOVE_STATUS, -1, 75, 20, EFFECT_PUTSASLEEP);
moves["sludge"] = new Move("Sludge",  TYPE_POISON, MOVE_SPECIAL, 65, 100, 20, EFFECT_POISONS);
moves["smog"] = new Move("Smog",  TYPE_POISON, MOVE_SPECIAL, 30, 70, 20, EFFECT_POISONS);
moves["smokescreen"] = new Move("Smokescreen",  TYPE_NORMAL, MOVE_STATUS, -1, 100, 20, EFFECT_SPEEDDOWN);//
moves["softboiled"] = new Move("Softboiled", TYPE_NORMAL, MOVE_STATUS, -1, -1, 10, EFFECT_DEFENSEUP);//
moves["solarbeam"] = new Move("Solar Beam",  TYPE_GRASS, MOVE_SPECIAL, 110, 100, 20, EFFECT_NONE);//
moves["sonicboom"] = new Move("Sonic Boom",  TYPE_NORMAL, MOVE_SPECIAL, 50, -1, 90, EFFECT_NONE); //
moves["spikecannon"] = new Move("Spike Cannon", TYPE_NORMAL, MOVE_PHYSICAL, 50, 100, 20, EFFECT_NONE);//
moves["splash"] = new Move("Splash",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 40, EFFECT_NONE);//forjustice
moves["spore"] = new Move("Spore",  TYPE_GRASS, MOVE_STATUS, -1, 100, 15, EFFECT_PUTSASLEEP);
moves["stomp"] = new Move("Stomp",  TYPE_NORMAL, MOVE_PHYSICAL, 65, 100, 20, EFFECT_NONE);
moves["stringshot"] = new Move("String Shot",  TYPE_BUG, MOVE_STATUS, -1, 95, 40, EFFECT_SPEEDDOWN);//
moves["strength"] = new Move("Strength",  TYPE_NORMAL, MOVE_PHYSICAL, 80, 100, 15, EFFECT_NONE);//
moves["struggle"] = new Move("Struggle",  TYPE_NORMAL, MOVE_PHYSICAL, 50, 100, -1, EFFECT_NONE);
moves["stunspore"] = new Move("Stun Spore",  TYPE_GRASS, MOVE_STATUS, -1, 75, 20, EFFECT_PARALYZES);
moves["submission"] = new Move("Submission",  TYPE_FIGHTING, MOVE_PHYSICAL, 80, 80, 25, EFFECT_NONE);//
moves["substitute"] = new Move("Substitute",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 10, EFFECT_DEFENSEUP);//
moves["superfang"] = new Move("Super Fang",  TYPE_NORMAL, MOVE_PHYSICAL, 50, 90, 20, EFFECT_NONE);//
moves["supersonic"] = new Move("Supersonic",  TYPE_NORMAL, MOVE_STATUS, -1, 55, 20, EFFECT_CONFUSES);
moves["surf"] = new Move("Surf",  TYPE_WATER, MOVE_SPECIAL, 90, 100, 15, EFFECT_NONE);//
moves["swift"] = new Move("Swift",  TYPE_NORMAL, MOVE_SPECIAL, 60, 100, 20, EFFECT_NONE);//
moves["swordsdance"] = new Move("Swords Dance",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 20, EFFECT_ATTACKUP);//
moves["tackle"] = new Move("Tackle",  TYPE_NORMAL, MOVE_PHYSICAL, 50, 100, 35, EFFECT_NONE);
moves["tailwhip"] = new Move("Tail Whip",  TYPE_NORMAL, MOVE_STATUS, -1, -1, 30, EFFECT_DEFENSEDOWN);
moves["takedown"] = new Move("Take Down",  TYPE_NORMAL, MOVE_PHYSICAL, 90, 85, 20, EFFECT_NONE); //
moves["teleport"] = new Move("Teleport",  TYPE_PSYCHIC, MOVE_STATUS, -1, -1, 20, EFFECT_NONE);//forabra
moves["thrash"] = new Move("Thrash",  TYPE_NORMAL, MOVE_PHYSICAL, 90, 100, 10, EFFECT_NONE);//
moves["thunder"] = new Move("Thunder",  TYPE_ELECTRIC, MOVE_SPECIAL, 110, 70, 10, EFFECT_PARALYZES);
moves["thunderpunch"] = new Move("Thunder Punch", TYPE_ELECTRIC, MOVE_PHYSICAL, 75, 100, 20, EFFECT_PARALYZES);
moves["thundershock"] = new Move("Thunder Shock", TYPE_ELECTRIC, MOVE_SPECIAL, 40, 100, 20, EFFECT_PARALYZES);
moves["thunderwave"] = new Move("Thunder Wave",  TYPE_ELECTRIC, MOVE_STATUS, -1, 100, 20, EFFECT_PARALYZES);
moves["thunderbolt"] = new Move("Thunderbolt",  TYPE_ELECTRIC, MOVE_SPECIAL, 90, 100, 15, EFFECT_PARALYZES);
moves["toxic"] = new Move("Toxic",  TYPE_POISON, MOVE_STATUS, -1, 90, 10, EFFECT_POISONS);
moves["transform"] = new Move("Transform",  TYPE_NORMAL, MOVE_STATUS, 40, -1, 10, EFFECT_NONE);//forditto
moves["triattack"] = new Move("Tri Attack",  TYPE_NORMAL, MOVE_SPECIAL, 80, 100, 20, EFFECT_FREEZES);//
moves["twineedle"] = new Move("Twineedle",  TYPE_BUG, MOVE_PHYSICAL, 50, 100, 20, TYPE_POISON);//
moves["vicegrip"] = new Move("Vice Grip",  TYPE_NORMAL, MOVE_PHYSICAL, 55, 100, 20, EFFECT_NONE);
moves["vinewhip"] = new Move("Vine Whip", TYPE_GRASS, MOVE_PHYSICAL, 45, 100, 20, EFFECT_NONE);
moves["watergun"] = new Move("Water Gun",  TYPE_WATER, MOVE_SPECIAL, 40, 100, 20, EFFECT_NONE);
moves["waterfall"] = new Move("Waterfall",  TYPE_WATER, MOVE_PHYSICAL, 80, 100, 15, EFFECT_NONE);//
moves["whirlwind"] = new Move("Whirlwind",  TYPE_NORMAL, MOVE_STATUS, 50, -1, 20, EFFECT_NONE);//
moves["wingattack"] = new Move("Wing Attack",TYPE_FLYING, MOVE_PHYSICAL, 60, 100, 20, EFFECT_NONE);
moves["withdraw"] = new Move("Withdraw",  TYPE_WATER, MOVE_STATUS, -1, -1, 40, EFFECT_NONE);
moves["wrap"] = new Move("Wrap",  TYPE_NORMAL, MOVE_PHYSICAL, 55, 90, 20, EFFECT_NONE);//


function NPC(name, filename, phrases, dpos, stationary){
	this.toString = function(){ return this.name; }
	this.name = name;
	this.type = ELE_NPC;
	this.fn = IMGDIR + filename;
	this.phrases = phrases;
	this.dpos = dpos;
	this.stat = stationary;
	preload(this.fn);
}

SATOSHI = new Pokemon("Satoshi", "red.png", "", 300, 5, 10, 10, 10, 100, TYPE_NORMAL, TYPE_NONE,
		["throwrock"],[],[]);

npc=[]
npc["mom"] = new NPC("Your mother", "mom.png", 
		["You're in a coma... just wake up...",
		"One day your father will return..."],
		{x:4, y: 4}, false
		);

npc["oak"] = new NPC("Professor Oak", "oak.png",
		["I'm OAK-ay, how are you? HAHAHAHAHAHAH",
		"Are you a boy and a girl?"],
		{x:3, y: 3}, false
		);

npc["trainerjoey"] = new NPC( "Trainer Joey", "joey.png", 
		["I'll call you, bae"],
		{x:3, y: 10}, false);

npc["trainerbilly"] = new NPC("Trainer Billy", "billy.png", 
		["I'm on my way to Viridian City"],
		{x:3, y: 4}, false);

npc["storejoe"] = new NPC("Joe", "joe.png", 
		["Buy my items!"], 
		{x:2, y: 2}, false);

Tile = function(tileid, name, filename, walk, exit, hide, blink, jumpd, danger){
	this.name = name;
	this.fn = IMGDIR + filename;
	this.type = ELE_TILE;
	this.id = tileid
	if(walk		!= undefined) this.walk = walk;			else this.walk = false;
	if(exit		!= undefined) this.exit = exit;			else this.exit = false;
	if(hide		!= undefined) this.hide = hide;			else this.hide = false;
	if(blink	!= undefined) this.blink = blink;		else this.blink = false;
	if(jumpd	!= undefined) this.jumpd = jumpd;		else this.jumpd = -1;
	if(danger	!= undefined) this.danger = danger;	else this.danger = false;
	preload(this.fn);
	this.toString = function(){ return this.name; }
}

tiles = []
tiles["ground"] = new Tile(0, "Ground", "dot.png", true);
tiles["wallhor"] = new Tile(1, "Wall", "minus.png");
tiles["wallver"] = new Tile(2, "Wall", "pipe.png");
tiles["stairdown"] = new Tile(3, "Stairway", "stairdown.png", true, true);
tiles["stairup"] = new Tile(4, "Stairway", "stairup.png", true, true);
tiles["miscobject"] = new Tile(5, "Object", "rbracket.png");
tiles["door"] = new Tile(6, "Door", "plus.png", true, true);
tiles["houseleft"] = new Tile(7, "House", "houseleft.png");
tiles["houseright"] = new Tile(8, "House", "houseright.png");
tiles["housemid"] = new Tile(9, "House", "housemid.png");
tiles["housetop"] = new Tile(10, "roof", "housetop.png", true, false, true);
tiles["tree"] = new Tile(11, "Tree", "tree.png");
tiles["blockade"] = new Tile(12, "Blockade", "blockade.png");
tiles["tallgrass"] = new Tile(13, "Tall grass", "tallgrass.png", true, false, true, false, -1, true);
tiles["watertile"] = new Tile(14, "Water", "water.png");
tiles["fence"] = new Tile(15, "Fence", "fence.png");
tiles["mchangeup"] = new Tile(16, "Exit", "mchangeup.png", true, true, false, true);
tiles["mchangedown"] = new Tile(17, "Exit", "mchangedown.png", true, true, false, true);
tiles["mchangeleft"] = new Tile(18, "Exit", "mchangeleft.png", true, true, false, true);
tiles["mchangeright"] = new Tile(19, "Exit", "mchangeright.png", true, true, false, true);
tiles["upcliff"] = new Tile(20, "Cliff", "upcliff.png", false, false, false, false, 2);
tiles["downcliff"] = new Tile(21, "Cliff", "downcliff.png", false, false, false, false, 3);
tiles["leftcliff"] = new Tile(22, "Cliff", "leftcliff.png", false, false, false, false, 0);
tiles["rightcliff"] = new Tile(23, "Cliff", "rightcliff.png", false, false, false, false, 1); 
tiles["shortgrass"] = new Tile(24, "Short grass", "shortgrass.png", true);
tiles["cliffface"] = new Tile(25, "Cliff face", "cliffface.png");
tiles["cliffface1"] = new Tile(26, "Cliff face", "cliffface1.png");
tiles["cliffface2"] = new Tile(27, "Cliff face", "cliffface2.png");


pokemon = [];
pokemon["venusaur"]  = new Pokemon(
		"Venasaur","venasaur.png",
		"",
		80,82,83,100,80,221,
		TYPE_GRASS, TYPE_POISON, 
		["tackle", "growl", "leechseed", "vinewhip"],
		["leechseed","vinewhip", "poisonpowder", "razorleaf", "growth", "sleeppowder", "solarbeam"],
		[7,13,22,30,43,55,65]
		);

pokemon["ivysaur"]  = new Pokemon( 
		"Ivysaur","ivysaur.png",
		"",
		60,62,63,80,60,29,
		TYPE_GRASS, TYPE_POISON, 
		["tackle", "growl","leechseed", "vinewhip"], 
		["leechseed","vinewhip", "poisonpowder", "razorleaf", "growth", "sleeppowder", "solarbeam"],
		[7,13,22,30,38,46,54],
		{to: "venusaur", at: 32}
		);

pokemon["bulbasaur"]  = new Pokemon( 
		"Bulbasaur","bulbasaur.png",
		"Bulbasaur enjoys swinging from vines and talking with the jungle creatures",
		45,49,49,65,45,15,
		TYPE_GRASS, TYPE_POISON, 
		["tackle", "growl"], 
		["leechseed","vinewhip", "poisonpowder", "sleeppowder", "razorleaf", "growth", "sleeppowder",
			"solarbeam"],
			[7,13,20,27,34,41,48],
		{to: "ivysaur", at: 16}
		);

pokemon["blastoise"] = new Pokemon(
		"Blastoise","blastoise.png",
		"",
		79,83,100,85,78,189,
		TYPE_WATER, TYPE_NONE, 
		["tackle","tailwhip", "bubble", "watergun"], 
		["bubble","watergun", "bite", "skullbash", "hydropump"],
		[8,15,24,31,42,52]
		);

pokemon["wartortle"] = new Pokemon(
		"Wartortle", "wartortle.png",
		"You evolved your Squirtle? I HOPE YOU KNOW THIS MEANS WARTORTLE",
		59,63,80,65,58,50,
		TYPE_WATER, TYPE_NONE, 
		["tackle","tailwhip", "bubble", "watergun"], 
		["bubble","watergun", "bite", "skullbash", "hydropump"],
		[8,15,24,31,39,47],
		{to: "blastoise", at: 36}
		);

pokemon["squirtle"] = new Pokemon( 
		"Squirtle","squirtle.png",
		"Squirtle likes to hang out in gangs and wear sunglasses. A real froody dude.",
		44,48,65,50,43,20,
		TYPE_WATER, TYPE_NONE, 
		["tackle","tailwhip"], 
		["bubble","watergun", "bite", "skullbash", "hydropump"],
		[8,16,22,28,35,42],
		{to: "wartortle", at: 16}
		);

pokemon["charizard"] = new Pokemon(
		"Charizard","charizard.png",
		"",
		78,84,78,109,100,200,
		TYPE_FIRE, TYPE_NONE, 
		["scratch","growl", "ember", "leer"], 
		["ember","leer", "rage", "slash", "flamethrower", "firespin"],
		[9,15,24,36,46,55]
		);

pokemon["charmeleon"] = new Pokemon(
		"Charmelion","charmelion.png",
		"",
		58,64,58,80,80,42,
		TYPE_FIRE, TYPE_NONE, 
		["scratch","growl","ember"], 
		["ember","leer", "rage", "slash", "flamethrower", "firespin"],
		[15,24,33,42,56],
		{to: "charizard", at: 36}
		);

pokemon["charmander"] = new Pokemon(
		"Charmander","charmander.png",
		"",
		39,52,43,60,65,19,
		TYPE_FIRE, TYPE_NONE, 
		["scratch","growl"], 
		["ember","leer", "rage", "slash", "flamethrower", "firespin"],
		[9,15,22,30,38,46],
		{to: "charmeleon", at: 16}
		);

pokemon["pidgeot"] = new Pokemon(
		"Pidgeot", "pidgeot.png",
		"Pidgeot flies faster than the speed of light, can overtake a mid blast-off Team Rocket",
		83,80,75,70,91,87,
		TYPE_FLYING, TYPE_NORMAL, 
		["gust","tackle"],
		["sandattack","quickattack", "whirlwind", "wingattack", "agility", "mirrormove"],
		[5,12,21,31,44,54]
		);

pokemon["pidgeotto"] = new Pokemon(
		"Pidgeotto", "pidgeotto.png",
		"Ol' reliable.",
		63,60,55,50,71,66,
		TYPE_FLYING, TYPE_NORMAL, 
		["gust","tackle"],
		["sandattack","quickattack", "whirlwind", "wingattack", "agility", "mirrormove"],
		[5,12,21,31,40,49],
		{to: "pidgeot", at: 32}
		);

pokemon["pidgey"] =new Pokemon(
		"Pidgey", "pidgey.png",
		"Pidgey is known for its cruel PKing tactics, often hanging near new player spawn spots",
		40,45,40,35,56,4,
		TYPE_FLYING, TYPE_NORMAL, 
		["gust","tackle"], 
		["sandattack","quickattack", "whirlwind", "wingattack", "agility", "mirrormove"],
		[5,12,19,28,36,44],
		{to: "pidgeotto", at: 16}
		);

pokemon["raticate"] = new Pokemon(
		"Raticate","raticate.png",
		"Rat, a cat? No! Rat not a cat",
		55,81,60,50,97,41,
		TYPE_NORMAL, TYPE_NONE, 
		["tackle","tailwhip"],
		["quickattack","hyperfang", "focusenergy", "superfang"],
		[7,14,27,41]
		);

pokemon["rattata"] = new Pokemon(
		"Rattata","rattata.png",
		"Rattatae were once members of the imfamous Team Rocket, having been transmogrified as a punishment for snitching",
		30,56,35,25,72,8,
		TYPE_NORMAL, TYPE_NONE, 
		["tackle","tailwhip"],
		["quickattack","hyperfang", "focusenergy", "superfang"],
		[7,14,23,34],
		{to: "raticate", at: 20}
		);

pokemon["butterfree"] = new Pokemon(
		"Butterfree","butterfree.png",
		"Scientists estimate the death count from hurricanes caused by butterfrees flapping their wings stands at: 1.6 million",
		60,45,50,80,70,71,
		TYPE_BUG, TYPE_FLYING, 
		["confusion"],
		["poisonpowder","stunspore", "sleeppowder", "supersonic", "whirlwind", "psybeam"],
		[15,16,17,21,26,32]
		);

pokemon["metapod"] = new Pokemon(
		"Metapod","metapod.png",
		"",
		50,20,55,25,30,22,
		TYPE_BUG, TYPE_NONE, 
		["harden", "tackle"],[], [],
		{to: "butterfree", at: 9}
		);

pokemon["caterpie"] = new Pokemon(
		"Caterpie","caterpie.png",
		"",
		45,30,35,20,45,6,
		TYPE_BUG, TYPE_NONE, 
		["tackle","stringshot"], [], [],
		{to: "metapod", at: 7}
		);

pokemon["beedrill"] = new Pokemon(
		"Beedrill","beedrill.png",
		"",
		65,80,40,45,75,65,
		TYPE_BUG, TYPE_POISON, 
		["furyattack"],
		["focusenergy","twineedle", "rage", "pinmissile", "agility"],
		[12,16,20,25,30,35]
		);

pokemon["kakuna"] = new Pokemon( 
		"Kakuna","kakuna.png",
		"Kakuna is a bit of a slacker, just sits around smoking weedle all day and repeating its motto: 'Kakuna matata!'",
		45,25,50,25,35,22,
		TYPE_BUG, TYPE_POISON, 
		["harden"],[], [],
		{to: "beedrill", at: 10}
		);

pokemon["weedle"] = new Pokemon(
		"Weedle","weedle.png",
		"So young, so curious! Weedle will go far, maybe even be king one day!",
		40,35,30,20,50,7,
		TYPE_BUG, TYPE_POISON, 
		["poisonsting","stringshot"], [], [],
		{to: "kakuna", at: 7}
		);

pokemon["fearow"] = new Pokemon(
		"Fearow","fearow.png",
		"",
		65,90,65,61,100,84,
		TYPE_NORMAL, TYPE_FLYING,
		["peck","growl", "leer"],
		["leer","furyattack", "mirrormove", "drillpeck", "agility"],
		[9,15,25,34,43]
		);

pokemon["spearow"] = new Pokemon(
		"Spearow","spearow.png",
		"",
		40,60,30,31,70,4,
		TYPE_NORMAL, TYPE_FLYING,
		["peck","growl"],
		["leer","furyattack", "mirrormove", "drillpeck", "agility"],
		[9,15,22,29,36],
		{to: "fearow", at:20}
		);

pokemon["arbok"] = new Pokemon(
		"Arbok","arbok.png",
		"",
		60,85,69,65,80,143,
		TYPE_POISON, TYPE_NONE,
		["wrap","leer", "poisonsting"],
		["poisonsting","bite", "glare", "screech", "acid"],
		[10,17,27,36,47]
		);

pokemon["ekans"] = new Pokemon(
		"Ekans","ekans.png",
		"",
		35,60,44,40,55,15,
		TYPE_POISON, TYPE_NONE,
		["wrap","leer"],
		["poisonsting","bite", "glare", "screech", "acid"],
		[10,17,24,31,38],
		{to: "arbok", at: 22}
		);

pokemon["raichu"] = new Pokemon(
		"Raichu","raichu.png",
		"",
		60,90,55,90,100,66,
		TYPE_ELECTRIC, TYPE_NONE, 
		["thundershock","growl"], 
		["thunderwave","quickattack", "swift", "agility", "thunder"],
		[9,16,26,33,43]
		);

pokemon["pikachu"] = new Pokemon(
		"Pikachu","pikachu.png",
		"",
		35,55,30,50,90,13,
		TYPE_ELECTRIC, TYPE_NONE, 
		["thundershock","growl"], 
		["thunderwave","quickattack", "swift", "agility", "thunder"],
		[9,16,26,33,43],
		{to: "raichu", at: 45} //stones?
		);

pokemon["sandslash"] = new Pokemon(
		"Sandslash","sandslash.png",
		"",
		75,100,110,45,65,65,
		TYPE_GROUND, TYPE_NONE,
		["scratch","sandattack"],
		["sandattack","slash", "poisonsting", "swift", "furyswipes"],
		[10,17,27,36,47]
		);

pokemon["sandshrew"] = new Pokemon(
		"Sandshrew","sandshrew.png",
		"",
		50,75,85,20,40,26,
		TYPE_GROUND, TYPE_NONE,
		["scratch"],
		["sandattack","slash", "poisonsting", "swift", "furyswipes"],
		[10,17,24,31,38],
		{to: "sandslash", at: 22}
		);

pokemon["golem"] = new Pokemon(
		"Golem","golem.png",
		"",
		80,110,130,55,45,
		TYPE_ROCK, TYPE_GROUND, 
		["tackle","defensecurl"], 
		["defensecurl","rockthrow", "selfdestruct", "harden", "earthquake", "explosion"],
		[11,16,21,29,36,43]
		);

pokemon["graveler"] = new Pokemon(
		"Graveler","graveller.png",
		"",
		55,95,115,45,35,232,
		TYPE_ROCK, TYPE_GROUND, 
		["tackle","defensecurl"], 
		["defensecurl","rockthrow", "selfdestruct", "harden", "earthquake", "explosion"],
		[11,16,21,29,36,43],
		{to: "golem", at: 45} //trade?
		);

pokemon["geodude"] = new Pokemon(
		"Geodude","geodude.png",
		"A cool dude to go on a hike with",
		40,80,100,30,20,44,
		TYPE_ROCK, TYPE_GROUND, 
		["tackle"],
		["defensecurl","rockthrow", "selfdestruct", "harden", "earthquake", "explosion"],
		[11,16,21,26,31,36],
		{to: "graveler", at: 20}
		);

pokemon["nidoqueen"] = new Pokemon(
		"Nidoqueen","nidoqueen.png",
		"",
		90,82,87,75,76,132,
		TYPE_POISON, TYPE_NONE, 
		["tackle","growl", "bodyslam", "scratch"],
		["scratch","poisonsting", "bodyslam"], 
		[8,14, 23]
		);

pokemon["nidorina"] = new Pokemon( 
		"Nidorina","nidorina.png",
		"",
		70,62,67,55,56,44,
		TYPE_POISON, TYPE_NONE, 
		["tackle","growl", "scratch"], 
		["scratch","poisonsting", "tailwhip", "bite", "furyswipes", "doublekick"], 
		[8,14,23,32,41,50],
		{to: "nidoqueen", at: 51} //leafstone?
		);

pokemon["nidoranf"] = new Pokemon( 
		"Nidoran[F]","nidoranf.png",
		"",
		55,47,52,40,41,15,
		TYPE_POISON, TYPE_NONE, 
		["tackle","growl"], 
		["scratch","poisonsting", "tailwhip", "bite", "furyswipes", "doublekick"], 
		[8,14,21,29,36,43],
		{to: "nidorina", at: 16}
		);

pokemon["nidoking"] = new Pokemon(
		"Nidoking","nidoking.png",
		"",
		81,92,77,85,85,137,
		TYPE_POISON, TYPE_NONE, 
		["tackle","hornattack", "poisonsting", "thrash"],
		["hornattack","poisonsting", "thrash"], 
		[8,14, 23]
		);

pokemon["nidorino"] = new Pokemon( 
		"Nidorino","nidorino.png",
		"",
		61,72,57,55,65,43,
		TYPE_POISON, TYPE_NONE, 
		["tackle","leer", "hornattack"], 
		["hornattack","poisonsting", "focusenergy", "furyattack", "horndrill", "doublekick"]
		[8,14,23,32,41,50],
		{to: "nidoqueen", at: 51} //leafstone?
		);

pokemon["nidoranm"] = new Pokemon( 
		"Nidoran[M]","nidoranm.png",
		"",
		46,57,40,40,50,20,
		TYPE_POISON, TYPE_NONE, 
		["tackle","leer"], 
		["hornattack","poisonsting", "focusenergy", "furyattack", 
		"horndrill", "doublekick"]
		[8,14,21,29,36,43],
		{to: "nidorino", at: 16}
		);

pokemon["golbat"] = new Pokemon(
		"Golbat","golbat.png",
		"",
		75,80,80,65,90,121,
		TYPE_POISON, TYPE_FLYING,
		["leechlife","screech", "bite"],
		["supersonic","bite", "confuseray", "wingattack", "haze"],
		[10,15,21,32,43]
		);

pokemon["zubat"] = new Pokemon(
		"Zubat","zubat.png",
		"",
		40,45,35,30,55,17,
		TYPE_POISON, TYPE_FLYING, 
		["leechlife"],
		["supersonic","bite", "confuseray", "wingattack", "haze"],
		[10,15,21,28,36],
		{to: "golbat", at: 22}
		);

pokemon["vileplume"] = new Pokemon(
		"Vileplume","vileplume.png",
		"",
		75,80,85,100,50,41,
		TYPE_GRASS, TYPE_POISON,
		["stunspore","sleeppowder", "acid", "petaldance"],
		["poisonpowder","stunspore", "sleeppowder"],
		[15,17,19]
		);

pokemon["gloom"] = new Pokemon(
		"Gloom","gloom.png",
		"",
		60,65,70,85,40,19,
		TYPE_GRASS, TYPE_POISON,
		["absorb","poisonpowder", "stunspore"],
		["poisonpowder","stunspore", "sleeppowder", "acid", "petaldance", "solarbeam"],
		[15,17,19,28,38,52],
		{to: "vileplume", at: 54}
		);

pokemon["oddish"] = new Pokemon(
		"Oddish","oddish.png",
		"",
		45,50,55,75,30,12,
		TYPE_GRASS, TYPE_POISON,
		["absorb"],
		["poisonpowder","stunspore", "sleeppowder", "acid", "petaldance", "solarbeam"],
		[15,17,19,24,33,46],
		{to: "gloom", at: 21}
		);

pokemon["parasect"] = new Pokemon(
		"Parasect","parasect.png", 
		"",
		60,95,80,60,30,65,
		TYPE_BUG, TYPE_GRASS, 
		["scratch","stunspore", "leechlife"], 
		["stunspore","leechlife", "spore", "slash", "growth"],
		[13,20,30,39,48]
		);

pokemon["paras"] = new Pokemon(
		"Paras","paras.png",
		"",
		35,70,55,45,25,12,
		TYPE_BUG, TYPE_GRASS,
		["scratch"],
		["stunspore","leechlife", "spore", "slash", "growth"],
		[13,20,27,34,41],
		{to: "parasect", at: 24}
		);

pokemon["primeape"] = new Pokemon( 
		"Primeape","primeape.png",
		"",
		65,105,60,60,95,71,
		TYPE_FIGHTING, TYPE_NONE, 
		["scratch","leer", "karatechop", "furyswipes"],
		["karatechop","furyswipes", "focusenergy", "seismictoss", "thrash"],
		[15,21,27,37,46]
		);

pokemon["mankey"] = new Pokemon(
		"Mankey","mankey.png",
		"Protip: it's his stomach",
		40,80,45,45,80,62,
		TYPE_FIGHTING, TYPE_NONE, 
		["scratch","leer"],
		["karatechop","furyswipes", "focusenergy", "seismictoss", "thrash"],
		[15,21,27,33,39],
		{to: "primeape", at: 28}
		);

pokemon["clefable"] = new Pokemon( 
		"Clefable","clefable.png",
		"",
		95,70,73,85,60,88,
		TYPE_NORMAL, TYPE_NONE, 
		["sing","doubleslap", "minimize", "metronome"],
		[],[]
		);

pokemon["clefairy"] = new Pokemon(
		"Clefairy","clefairy.png",
		"",
		70,45,48,60,35,17,
		TYPE_NORMAL, TYPE_NONE, 
		["pound","growl"], 
		["sing","doubleslap", "minimize", "metronome", "defensecurl", "lightscreen"],
		[13,18,24,31,39,48],
		{to: "clefable", at: 50} //mooonstone
		);

pokemon["wigglytuff"] = new Pokemon(
		"Wigglytuff","wigglytuff.png",
		"",
		140,70,45,75,45,26,
		TYPE_NORMAL, TYPE_NONE, 
		["sing","disable", "defensecurl", "doubleslap"],
		[],[]
		);

pokemon["jigglypuff"] = new Pokemon(
		"Jigglypuff","jigglypuff.png",
		"",
		115,45,20,45,20,12,
		TYPE_NORMAL, TYPE_NONE, 
		["sing", "pound"],
		["pound", "disable", "defensecurl", "doubleslap", "rest", "bodyslam", "doubleedge"]
		[9,14,19,24,29,34,39],
		{to: "wigglytuff", at: 40} //moonstone
		);

pokemon["venomoth"] = new Pokemon(
		"Venomoth","venomoth.png",
		"",
		70,65,60,90,90,28,
		TYPE_POISON, TYPE_BUG, 
		["tackle","disable", "poisonpowder", "leechlife"],
		["poisonpowder","leechlife", "stunspore", "psybeam", "sleeppowder", "psychic"],
		[24,27, 30, 38, 43, 50]
		);

pokemon["venonat"] = new Pokemon( 
		"Venonat","venonat.png",
		"",
		60,55,50,40,45,66,
		TYPE_POISON, TYPE_BUG, 
		["tackle","disable"], 
		["poisonpowder","leechlife", "stunspore", "psybeam", "sleeppowder", "psychic"],
		[24,27,30,35,38,43],
		{to: "venomoth", at: 31}
		);

pokemon["tangela"] = new Pokemon(
		"Tangela","tangela.png",
		"",
		65,55,115,100,60,35,
		TYPE_GRASS, TYPE_NONE, 
		["tackle","growl"]
		);

pokemon["ninetales"] = new Pokemon(
		"Ninetales","Ninetales.png",
		"Named for Scherazade's other sister, who only kept the Shiek busy for nine nights, before being killed",
		73,76,75,81,100,44,
		TYPE_FIRE, TYPE_NONE, 
		["ember","tailwhip", "quickattack", "roar"], 
		[],[]
		);

pokemon["vulpix"] = new Pokemon(
		"Vulpix","vulpix.png",
		"",
		38,41,40,50,65,22,
		TYPE_FIRE, TYPE_NONE, 
		["ember","tailwhip"], 
		["quickattack","roar", "confuseray", "flamethrower", "firespin"],
		[16,21,28,35,42],
		{to: "ninetales", at: 20000} //firestone?
		);

pokemon["dugtrio"] = new Pokemon(
		"Dugtrio","dugtrio.png",
		"Is actually just six venomoths taped together",
		35,80,50,50,120,
		TYPE_GROUND, TYPE_NONE, 
		["scratch","growl", "dig"], 
		["growl","dig", "sandattack", "slash", "earthquake"],
		[15,19,24,35,47]
		);

pokemon["diglett"] = new Pokemon(
		"Diglett","diglett.png",
		"",
		10,55,25,35,95,2,
		TYPE_GROUND, TYPE_NONE, 
		["scratch"],
		["growl","dig", "sandattack", "slash", "earthquake"],
		{to: "dugtrio", at: 26}
		);

pokemon["persian"] = new Pokemon(
		"Persian","persian.png",
		"",
		65,70,60,65,115,71,
		TYPE_NORMAL, TYPE_NONE, 
		["scratch","growl", "bite", "screech"],
		["bite","payday", "screech", "furyswipes", "slash"],
		[12,17,24,37,51]
		);

pokemon["meowth"] = new Pokemon(
		"Meowth","meowth.png",
		"",
		40,45,35,40,90,9,
		TYPE_NORMAL, TYPE_NONE, 
		["scratch","growl"],
		["bite","payday", "screech", "furyswipes", "slash"],
		[12,17,24,33,44],
		{to: "persian", at: 28}
		);

pokemon["gyarados"] = new Pokemon(
		"Gyarados","gyarados.png",
		"",
		95,125,79,100,81,235,
		TYPE_FLYING, TYPE_WATER, 
		["tackle","growl"]
		);

pokemon["magikarp"] = new Pokemon(
		"Magikarp","magikarp.png",
		"",
		20,10,55,20,80,10,
		TYPE_WATER, TYPE_NONE, 
		["tackle","growl"], {to: "gyarados", at: 30}
		);

pokemon["golduck"] = new Pokemon(
		"Golduck","golduck.png",
		"",
		80,82,78,95,85,169,
		TYPE_WATER, TYPE_NONE,
		["scratch","tailwhip", "disable"],
		["tailwhip","disable", "confusion", "furyswipes", "hydropump"],
		[28,31,39,48,59]
		);

pokemon["psyduck"] = new Pokemon(
		"Psyduck","psyduck.png",
		"",
		50,52,48,65,55,43,
		TYPE_WATER, TYPE_NONE,
		["scratch"],
		["tailwhip","disable", "confusion", "furyswipes", "hydropump"],
		[28,31,36,43,52],
		{to: "golduck", at: 33}
		);

pokemon["arcanine"] = new Pokemon(
		"Arcanine","arcanine.png",
		"",
		90,110,80,100,95,342,
		TYPE_FIRE, TYPE_NONE,
		["roar","ember", "leer", "takedown"],
		[],[]
		)

pokemon["growlithe"] = new Pokemon(
		"Growlithe","growlithe.png",
		"",
		55,70,45,70,60,42,
		TYPE_FIRE, TYPE_NONE,
		["bite","roar"],
		["ember","leer", "takedown", "agility", "flamethrower"],
		[18,23,30,39,50],
		{to: "arcanine",at: 2000}
		);

pokemon["poliwrath"] = new Pokemon(
		"Poliwrath","poliwrath.png",
		"",
		90,85,95,70,70,119,
		TYPE_WATER, TYPE_NONE,
		["bubble","watergun", "doubleslap", "bodyslam"],
		["hypnosis","watergun"],
		[16,19]
		)

pokemon["poliwhirl"] = new Pokemon(
		"Poliwhirl","poliwhirl.png",
		"",
		65,65,65,50,90,44,
		TYPE_WATER, TYPE_NONE,
		["bubble","hypnosis", "watergun"],
		["hypnosis","watergun", "doubleslap", "bodyslam", "amnesia", "hydropump"],
		[16,19,26,33,41,49],
		{to: "poliwrath", at: 20000}
		);

pokemon["poliwag"] = new Pokemon(
		"Poliwag","poliwag.png",
		"",
		40,50,40,40,90,27,
		TYPE_WATER, TYPE_NONE,
		["bubble"],
		["hypnosis","watergun", "doubleslap", "bodyslam", "amnesia", "hydropump"],
		[16,19,25,31,38,45],
		{to: "poliwhirl", at: 25}
		);

pokemon["alakazam"] = new Pokemon(
		"Alakazam","alakazam.png",
		"",
		55,50,45,135,120,106,
		TYPE_PSYCHIC, TYPE_NONE,
		["teleport","confusion", "disable"],
		["confusion","disable", "psybeam", "recover", "psychic", "reflect"], 
		[16,20,27,31,38,42]
		);

pokemon["kadabra"] = new Pokemon(
		"Kadabra","kadabra.png",
		"",
		40,35,30,120,105,125,
		TYPE_PSYCHIC, TYPE_NONE,
		["teleport","confusion", "disable"],
		["confusion","disable", "psybeam", "recover", "psychic", "reflect"], 
		[16,20,27,31,38,42],
		{to: "alakazam", at: 10006}
		);

pokemon["abra"] = new Pokemon(
		"Abra","abra.png",
		"",
		25,20,15,105,90,43,
		TYPE_PSYCHIC, TYPE_NONE,
		["teleport", "tackle"],
		[],[],
		{to: "kadabra", at: 16}
		);

pokemon["machamp"]  = new Pokemon("Machamp", "machamp.png",
		"",
		90,130,80,75,65,287,
		TYPE_FIGHTING, TYPE_NONE,
		["karatechop", "lowkick", "leer"],
		["lowkick", "leer", "focusenergy", "seismictoss", "submission"],
		[20,25,36,44,52]
		);

pokemon["machoke"]  = new Pokemon( "Machoke", "machoke.png",
		"",
		80,100,70,50,45,155,
		TYPE_FIGHTING, TYPE_NONE,
		["karatechop", "lowkick", "leer"],
		["lowkick", "leer", "focusenergy", "seismictoss", "submission"],
		[20,25,36,44,52],
		{to: "machamp", at: 40}
		);

pokemon["machop"]  = new Pokemon( "Machop", "machop.png",
		"",
		70,80,50,35,35,43,
		TYPE_FIGHTING, TYPE_NONE,
		["karatechop"],
		["lowkick", "leer", "focusenergy", "seismictoss", "submission"],
		[20,25,32,39,46],
		{to: "machoke", at: 28}
		);

pokemon["victreebel"]  = new Pokemon("Victreebel", "victreebel.png",
		"",
		80,105,65,100,70,35,
		TYPE_GRASS, TYPE_POISON,
		["sleeppowder", "stunspore", "acid", "razorleaf"],
		["wrap", "poisonpowder", "sleeppowder"],
		[13,15,18]
		);

pokemon["weepinbell"]  = new Pokemon("Weepinbell", "weepinbell.png",
		"",
		65,90,50,85,55,14,
		TYPE_GRASS, TYPE_POISON,
		["vinewhip", "growth", "wrap"],
		["wrap", "poisonpowder", "sleeppowder", "stunspore", "acid", "razorleaf", "slam"],
		[13,15,18,23,29,38,49],
		{to: "victreebel", at: 30}
		);

pokemon["bellsprout"]  = new Pokemon("Bellsprout", "bellsprout.png",
		"",
		50,75,35,70,40,9,
		TYPE_GRASS, TYPE_POISON,
		["vinewhip", "growth"],
		["wrap", "poisonpowder", "sleeppowder", "stunspore", "acid", "razorleaf", "slam"],
		[13,15,18,21,26,33,42],
		{to: "weepinbell", at: 21}
		);

pokemon["tentacruel"]  = new Pokemon("Tentacruel", "tentacruel.png",
		"",
		80,70,65,80,100,121,
		TYPE_WATER, TYPE_POISON,
		["acid", "supersonic", "wrap"],
		["supersonic", "wrap", "poisonsting", "watergun", "constrict", "barrier", "screech", "hydropump"],
		[7,13,18,22,27,35,43,50]
		);

pokemon["tentacool"]  = new Pokemon("Tentacool", "tentacool.png",
		"",
		40,40,35,50,70,100,
		TYPE_WATER, TYPE_POISON,
		["acid"],
		["supersonic", "wrap", "poisonsting", "watergun", "constrict", "barrier", "screech", "hydropump"],
		[7,13,18,22,27,33,40,48],
		{to: "tentacruel", at: 30}
		);

pokemon["rapidash"]  = new Pokemon("Rapidash", "rapidash.png",
		"",
		65,100,70,80,105,209,
		TYPE_FIRE, TYPE_NONE,
		["ember"],
		["tailwhip", "stomp", "growl", "firespin", "takedown", "agility"],
		[30,32,35,39,47,55]
		);

pokemon["ponyta"]  = new Pokemon("Ponyta", "ponyta.png",
		"",
		50,85,55,65,90,66,
		TYPE_FIRE, TYPE_NONE,
		["ember", "tailwhip", "stomp", "growl"],
		["tailwhip", "stomp", "growl", "firespin", "takedown", "agility"],
		[30,32,35,39,43,48],
		{to: "rapidash", at: 40}
		);

pokemon["slowbro"]  = new Pokemon("Slowbro", "slowbro.png",
		"",
		95,75,119,199,39,173,
		TYPE_WATER, TYPE_PSYCHIC,
		["confusion", "disable", "headbutt"],
		["disable", "headbutt", "growl", "withdraw", "watergun", "amnesia", "psychic"],
		[18,22,27,33,37,44,55]
		);

pokemon["slowpoke"]  = new Pokemon("Slowpoke", "slowpoke.png",
		"",
		90,65,65,40,15,79,
		TYPE_WATER, TYPE_PSYCHIC,
		["confusion"],
		["disable", "headbutt", "growl", "watergun", "amnesia", "psychic"],
		[18,22,27,33,40,48],
		{to: "slowbro", at:37}
		);


pokemon["magneton"]  = new Pokemon("Magneton", "magneton.png",
		"",
		50,60,95,120,70,132,
		TYPE_ELECTRIC, TYPE_NONE,
		["tackle", "sonicboom", "thundershock"],
		["sonicboom", "thundershock", "supersonic", "thunderwave", "swift", "screech"],
		[21,25,29,35,41,47]
		);

pokemon["magnemite"]  = new Pokemon("Magnemite", "magnemite.png",
		"",
		25,35,70,95,45,13,
		TYPE_ELECTRIC, TYPE_NONE,
		["tackle"],
		["sonicboom", "thundershock", "supersonic", "thunderwave", "swift", "screech"],
		[21,25,29,35,41,47],
		{to: "magneton", at: 30}
		);


pokemon["farfetchd"]  = new Pokemon("Farfetch'd", "farfetchd.png",
		"",
		52,65,55,58,60,33,
		TYPE_NORMAL, TYPE_FLYING,
		["peck", "sandattack"],
		["leer", "furyattack", "swordsdance", "agility", "slash"],
		[7,15,23,31,39]
		);

pokemon["dodrio"]  = new Pokemon("Dodrio", "dodrio.png",
		"",
		60,110,70,60,100,188,
		TYPE_NORMAL, TYPE_FLYING,
		["peck", "growl", "furyattack"],
		["growl", "furyattack", "drillpeck", "rage", "triattack", "agility"],
		[20,24,30,39,45,51]
		);

pokemon["doduo"]  = new Pokemon("Doduo", "doduo.png",
		"",
		35,85,45,35,75,86,
		TYPE_NORMAL, TYPE_FLYING,
		["peck"],
		["growl", "furyattack", "drillpeck", "rage", "triattack", "agility"],
		[20,24,30,36,40,44],
		{to: "dodrio", at: 31}
		);

pokemon["dewgong"]  = new Pokemon("Dewgong", "dewgong.png",
		"",
		90,70,80,70,70,265,
		TYPE_WATER, TYPE_ICE,
		["headbutt"],
		["growl", "aurorabeam", "rest", "takedown", "icebeam"],
		[30,35,44,50,56]
		);

pokemon["seel"]  = new Pokemon("Seel", "seel.png",
		"",
		65,45,55,45,45,198,
		TYPE_WATER, TYPE_NONE,
		["headbutt"],
		["growl", "aurorabeam", "rest", "takedown", "icebeam"],
		[30,35,40,45,50],
		{to: "dewgong", at:34}
		);

pokemon["muk"]  = new Pokemon("Muk", "muk.png",
		"",
		105,105,75,65,50,66,
		TYPE_POISON, TYPE_NONE,
		["pound", "disable", "poisongas"],
		["poisongas", "minimize", "sludge", "harden", "screech", "acidarmor"],
		[30,33,37,45,53,60]
		);

pokemon["grimer"]  = new Pokemon("Grimer", "grimer.png",
		"",
		80,80,50,40,25,66,
		TYPE_POISON, TYPE_NONE,
		["pound", "disable"],
		["poisongas", "minimize", "sludge", "harden", "screech", "acidarmor"],
		[30,33,37,42,48,55],
		{to: "muk", at: 38}
		);

pokemon["cloyster"]  = new Pokemon("Cloyster", "cloyster.png",
		"",
		50,95,180,85,70,292,
		TYPE_WATER, TYPE_ICE,
		["withdraw", "supersonic", "clamp", "aurorabeam"],
		["spikecannon"],
		[50]
		);

pokemon["shellder"]  = new Pokemon("Shellder", "shellder.png",
		"",
		30,65,100,45,40,9,
		TYPE_WATER, TYPE_NONE,
		["tackle", "withdraw"],
		["supersonic", "clamp", "aurorabeam", "leer", "icebeam"],
		[18,23,30,39,50],
		{to: "cloyster", at: 40}
		);

pokemon["gengar"]  = new Pokemon("Gengar", "gengar.png",
		"",
		60,65,60,130,110,89,
		TYPE_GHOST, TYPE_POISON,
		["lick", "confuseray", "nightshade"],
		["hypnosis", "dreameater"],
		[29,38]
		);

pokemon["haunter"]  = new Pokemon("Haunter", "haunter.png",
		"",
		45,50,45,115,95,1,
		TYPE_GHOST, TYPE_POISON,
		["lick", "confuseray", "nightshade"],
		["hypnosis", "dreameater"],
		[27,35],
		{to: "gengar", at: 40}
		);

pokemon["gastly"]  = new Pokemon("Gastly", "gastly.png",
		"",
		30,35,30,100,80,1,
		TYPE_GHOST, TYPE_POISON,
		["lick", "confuseray", "nightshade"],
		["hypnosis", "dreameater"],
		[27,35],
		{to: "haunter", at: 25}
		);

pokemon["onix"]  = new Pokemon("Onix", "onix.png",
		"",
		35,45,160,30,70,463,
		TYPE_ROCK, TYPE_GROUND,
		["tackle", "screech"],
		["bind", "rockthrow", "rage", "slam", "harden"],
		[15,19,25,33,43]
		);

pokemon["hypno"]  = new Pokemon("Hypno", "hypno.png",
		"",
		85,73,70,73,67,167,
		TYPE_PSYCHIC, TYPE_NONE,
		["pound", "hypnosis"],
		["disable", "confusion", "headbutt", "poisongas", "psychic", "meditate"],
		[12,17,24,33,37,43]
		);

pokemon["drowzee"]  = new Pokemon("Drowzee", "drowzee.png",
		"",
		60,48,45,43,42,71,
		TYPE_PSYCHIC, TYPE_NONE,
		["pound", "hypnosis"],
		["disable", "confusion", "headbutt", "poisongas", "psychic", "meditate"],
		[12,17,24,29,32,37],
		{to: "hypno", at: 26}
		);

pokemon["kingler"]  = new Pokemon("Kingler", "kingler.png",
		"",
		55,130,115,50,75,132,
		TYPE_WATER, TYPE_NONE,
		["bubble", "leer", "vicegrip"],
		["vicegrip", "guillotine", "stomp", "crabhammer", "harden"],
		[20,25,34,42,49]
		);

pokemon["krabby"]  = new Pokemon("Krabby", "krabby.png",
		"",
		30,105,90,25,50,14,
		TYPE_WATER, TYPE_NONE,
		["bubble", "leer"],
		["vicegrip", "guillotine", "stomp", "crabhammer", "harden"],
		[20,25,30,35,40],
		{to: "kingler", at: 28}
		);

pokemon["electrode"]  = new Pokemon("Electrode", "electrode.png",
		"",
		60,50,70,80,140,147,
		TYPE_ELECTRIC, TYPE_NONE,
		["tackle", "screech"],
		["sonicboom", "selfdestruct", "lightscreen", "swift", "explosion"],
		[17,22,29,36,43]
		);

pokemon["voltorb"]  = new Pokemon("Voltorb", "voltorb.png",
		"",
		40,30,50,55,100,23,
		TYPE_ELECTRIC, TYPE_NONE,
		["tackle", "screech"],
		["sonicboom", "selfdestruct", "lightscreen", "swift", "explosion"],
		[17,22,29,36,43],
		{to: "electrode", at: 30}
		);

pokemon["exeggutor"]  = new Pokemon("Exeggutor", "exeggutor.png",
		"",
		95,95,85,125,55,265,
		TYPE_GRASS, TYPE_PSYCHIC,
		["barrage", "hypnosis"],
		["stomp"],
		[28]
		);

pokemon["exeggcute"]  = new Pokemon("Exeggcute", "exeggcute.png",
		"",
		60,40,80,60,40,6,
		TYPE_GRASS, TYPE_PSYCHIC,
		["barrage", "hypnosis"],
		["reflect", "leechseed", "stunspore", "poisonpowder", "solarbeam"],
		[25,28,32,37,42,48],
		{to: "exeggutor", at: 40}
		);

pokemon["marowak"]  = new Pokemon("Marowak", "marowak.png",
		"",
		60,80,110,50,45,99,
		TYPE_GROUND, TYPE_NONE,
		["boneclub", "growl", "leer", "focusenergy"],
		["leer", "focusenergy", "thrash", "bonemerang", "rage"],
		[25,33,41,48,55]
		);

pokemon["cubone"]  = new Pokemon("Cubone", "cubone.png",
		"",
		50,50,95,40,35,14,
		TYPE_GROUND, TYPE_NONE,
		["boneclub", "growl"],
		["leer", "focusenergy", "thrash", "bonemerang", "rage"],
		[25,31,38,43,46],
		{to: "marowak", at: 28}
		);

pokemon["hitmonlee"]  = new Pokemon("Hitmonlee", "hitmonlee.png",
		"",
		50,120,53,35,87,110,
		TYPE_FIGHTING, TYPE_NONE,
		["doublekick", "meditate"],
		["rollingkick", "jumpkick", "focusenergy", "hijumpkick", "megakick"],
		[33,38,43,48,53]
		);

pokemon["hitmonchan"]  = new Pokemon("Hitmonchan", "hitmonchan.png",
		"",
		50,105,79,35,76,111,
		TYPE_FIGHTING, TYPE_NONE,
		["cometpunch", "agility"],
		["firepunch", "icepunch", "thunderpunch", "megapunch", "counter"],
		[33,38,43,48,53]
		);

pokemon["lickitung"]  = new Pokemon("Lickitung", "lickitung.png",
		"",
		90,55,75,60,30,144,
		TYPE_NORMAL, TYPE_NONE,
		["wrap", "supersonic"],
		["stomp", "disable", "defensecurl", "slam", "screech"],
		[7,15,23,31,39]
		);

pokemon["weezing"]  = new Pokemon("Weezing", "weezing.png",
		"",
		65,90,120,85,60,21,
		TYPE_POISON, TYPE_NONE,
		["tackle", "smog", "sludge"],
		["sludge", "smokescreen", "selfdestruct", "haze", "explosion"],
		[32,39,43,49,53]
		);

pokemon["koffing"]  = new Pokemon("Koffing", "koffing.png",
		"",
		40,65,95,60,35,2,
		TYPE_POISON, TYPE_NONE,
		["tackle", "smog"],
		["sludge", "smokescreen", "selfdestruct", "haze", "explosion"],
		[32,37,40,45,48],
		{to: "weezing", at:35}
		);

pokemon["rhydon"]  = new Pokemon("Rhydon", "rhydon.png",
		"",
		105,130,120,45,40,265,
		TYPE_GROUND, TYPE_ROCK,
		["hornattack", "stomp", "tailwhip", "furyattack"],
		["stomp","tailwhip","furyattack","horndrill","leer","takedown"],
		[30,35,40,48,55,64]
		);

pokemon["rhyhorn"]  = new Pokemon("Rhyhorn", "rhyhorn.png",
		"",
		80,85,95,30,25,254,
		TYPE_GROUND, TYPE_ROCK,
		["hornattack"],
		["stomp","tailwhip","furyattack","horndrill","leer","takedown"],
		[30,35,40,45,50,55],
		{to: "rhydon", at:42}
		);

pokemon["chansey"]  = new Pokemon("Chansey", "chansey.png",
		"",
		250,5,5,35,50,76,
		TYPE_NORMAL, TYPE_NONE,
		["pound", "doubleslap"],
		["sing", "growl", "minimize", "defensecurl","lightscreen","doubleedge"],
		[24,30,38,44,48,54]
		);

pokemon["tangela"]  = new Pokemon("Tangela", "tangela.png",
		"",
		65,55,115,100,60,77,
		TYPE_GRASS, TYPE_NONE,
		["constrict", "bind"],
		["absorb", "vinewhip", "poisonpowder", "stunspore", "sleeppowder", "slam", "growth"],
		[29,32,36,39,45,49]
		);

pokemon["kangaskhan"]  = new Pokemon("Kangaskhan", "kangaskhan.png",
		"",
		105,95,80,40,90,176,
		TYPE_NORMAL, TYPE_NONE,
		["cometpunch", "rage"],
		["bite", "tailwhip", "megapunch", "leer", "dizzypunch"],
		[26,31,36,41,46]
		);

pokemon["seadra"]  = new Pokemon("Seadra", "seadra.png",
		"",
		55,65,95,85,85,55,
		TYPE_WATER, TYPE_NONE,
		["bubble", "smokescreen"],
		["smokescreen", "leer", "watergun", "agility", "hydropump"],
		[19,24,30,41,52]
		);

pokemon["horsea"]  = new Pokemon("Horsea", "horsea.png",
		"",
		30,40,70,70,60,18,
		TYPE_WATER, TYPE_NONE,
		["bubble"],
		["smokescreen", "leer", "watergun", "agility", "hydropump"],
		[19,24,30,37,45],
		{to: "seadra", at: 32}
		);

pokemon["seaking"]  = new Pokemon("Seaking", "seaking.png",
		"",
		80,92,65,65,68,86,
		TYPE_NORMAL, TYPE_NONE,
		["peck","tailwhip","supersonic"],
		["supersonic", "hornattack", "furyattack", "waterfall", "horndrill", "agility"],
		[19,24,30,39,48,54]
		);

pokemon["goldeen"]  = new Pokemon("Goldeen", "goldeen.png",
		"",
		35,67,60,35,63,33,
		TYPE_WATER, TYPE_NONE,
		["peck", "tailwhip"],
		["supersonic", "hornattack", "furyattack", "waterfall", "horndrill", "agility"],
		[19,24,30,37,45,54],
		{to: "seaking", at: 33}
		);

pokemon["starmie"]  = new Pokemon("Starmie", "starmie.png",
		"",
		60,75,85,100,115,176,
		TYPE_WATER, TYPE_PSYCHIC,
		["tackle", "watergun", "harden"],
		[],
		[]
		);

pokemon["staryu"]  = new Pokemon("Staryu", "staryu.png",
		"",
		30,45,55,70,85,76,
		TYPE_WATER, TYPE_NONE,
		["tackle"],
		["watergun","harden","recover","swift","minimize","lightscreen","hydropump"],
		[17,22,27,32,37,42,47],
		{to: "starmie", at: 50}
		);

pokemon["mrmime"]  = new Pokemon("Mr. Mime", "mrmime.png",
		"",
		40,45,65,100,90,120,
		TYPE_PSYCHIC, TYPE_NONE,
		["confusion", "barrier"],
		["lightscreen", "doubleslap", "meditate", "substitute"],
		[15,23,31,39,47]
		);

pokemon["scyther"]  = new Pokemon("Scyther", "scyther.png",
		"",
		70,110,80,55,105,123,
		TYPE_BUG, TYPE_FLYING,
		["quickattack"],
		["leer", "focusenergy", "doubleteam", "slash", "swordsdance", "agility"],
		[17,20,24,29,35,42]
		);

pokemon["jynx"]  = new Pokemon("Jynx", "jynx.png",
		"",
		65,50,35,115,95,90,
		TYPE_ICE, TYPE_PSYCHIC,
		["pound", "lovelykiss"],
		["lick", "doubleslap", "icepunch", "bodyslam", "thrash", "blizzard"],
		[18,23,31,39,47,58]
		);

pokemon["electabuzz"]  = new Pokemon("Electabuzz", "electabuzz.png",
		"",
		65,83,57,95,105,66,
		TYPE_ELECTRIC, TYPE_NONE,
		["quickattack","leer"],
		["thundershock", "screech", "thunderpunch", "lightscreen", "thunder"],
		[34,37,42,49,54]
		);

pokemon["magmar"]  = new Pokemon("Magmar", "magmar.png",
		"",
		65,95,57,100,93,98,
		TYPE_FIRE, TYPE_NONE,
		["ember"],
		["leer", "confuseray", "firepunch", "smokescreen", "smog", "flamethrower"],
		[36,39,43,48,52,55]
		);

pokemon["pinsir"]  = new Pokemon("Pinsir", "pinsir.png",
		"",
		65,125,100,55,85,121,
		TYPE_BUG, TYPE_NONE,
		["vicegrip"],
		["seismictoss", "guillotine", "focusenergy", "harden", "slash", "swordsdance"],
		[25,30,36,43,49,54]
		);

pokemon["tauros"]  = new Pokemon("Tauros", "tauros.png",
		"",
		75,100,95,40,110,195,
		TYPE_NORMAL, TYPE_NONE,
		["tackle"],
		["stomp", "tailwhip", "leer", "rage", "takedown"],
		[21,28,35,44,51]
		);

pokemon["gyarados"]  = new Pokemon("Gyarados", "gyarados.png",
		"",
		95,125,79,60,81,518,
		TYPE_WATER, TYPE_FLYING,
		["bite", "dragonrage", "leer", "hydropump"],
		["bite", "dragonrage", "leer", "hydropump", "hyperbeam"],
		[20,25,32,41,52]
		);

pokemon["magikarp"]  = new Pokemon("Magikarp", "magikarp.png",
		"",
		20,10,55,15,80,22,
		TYPE_WATER, TYPE_NONE,
		["splash", "tackle"],
		[],
		[],
		{to: "gyarados", at: 20}
		);

pokemon["lapras"]  = new Pokemon("Lapras", "lapras.png",
		"",
		130,85,80,85,60,485,
		TYPE_WATER, TYPE_ICE,
		["watergun", "growl"],
		["sing", "mist", "bodyslam", "confuseray", "icebeam", "hydropump"],
		[16,20,25,31,38,46]
		);

pokemon["ditto"]  = new Pokemon("Ditto", "ditto.png",
		"",
		48,48,48,48,48,9,
		TYPE_NORMAL, TYPE_NONE,
		["transform"],
		[],
		[]
		);

pokemon["eevee"]  = new Pokemon("Eevee", "eevee.png",
		"",
		55,55,50,45,55,14,
		TYPE_NORMAL, TYPE_NONE,
		["tackle", "sandattack"],
		["quickattack", "tailwhip", "bite", "takedown"],
		[27,31, 37, 45]
		);

pokemon["vaporeon"]  = new Pokemon("Vaporeon", "vaporeon.png",
		"",
		130,65,60,110,65,64,
		TYPE_WATER, TYPE_NONE,
		["tackle", "sandattack", "quickattack", "watergun"],
		["quickattack", "watergun", "tailwhip", "bite", "acidarmor", "haze", "mist",
		"hydropump"],
		[27,31,37,40,42,44,48,54]
		);

pokemon["jolteon"]  = new Pokemon("Jolteon", "jolteon.png",
		"",
		65,65,60,110,130,54,
		TYPE_ELECTRIC, TYPE_NONE,
		["tackle", "sandattack", "quickattack", "thundershock"],
		["quickattack", "thundershock", "tailwhip", "thunderwave", "doublekick",
		"pinmissile", "agility", "thunder"],
		[27,31,37,40,42,48,44,54]
		);

pokemon["flareon"]  = new Pokemon("Flareon", "flareon.png",
		"",
		65,130,60,95,65,55,
		TYPE_FIRE, TYPE_NONE,
		["tackle", "sandattack", "quickattack", "ember"],
		["quickattack", "ember", "tailwhip", "bite", "leer", "firespin", "rage",
		"flamethrower"],
		[27,31,37,40,42,44,48,54]
		);

pokemon["porygon"]  = new Pokemon("Porygon", "porygon.png",
		"",
		65,60,70,85,40,80,
		TYPE_NORMAL, TYPE_NONE,
		["tackle", "sharpen", "conversion"],
		["psybeam", "recover", "agility", "triattack"],
		[23,28,35,42]
		);

pokemon["omastar"]  = new Pokemon("Omastar", "omastar.png",
		"",
		70,60,125,115,55,77,
		TYPE_ROCK, TYPE_WATER,
		["watergun", "withdraw", "hornattack"],
		["hornattack", "leer", "spikecannon", "hydropump"],
		[34, 39, 44, 49]
		);

pokemon["omanyte"]  = new Pokemon("Omanyte", "omanyte.png",
		"",
		35,40,100,90,35,17,
		TYPE_ROCK, TYPE_WATER,
		["watergun", "withdraw"],
		["hornattack", "leer", "spikecannon", "hydropump"],
		[34, 39, 46, 53],
		{to: "omastar", at: 40}
		);

pokemon["kabutops"]  = new Pokemon("Kabutops", "kabutops.png",
		"",
		60,115,105,65,80,89,
		TYPE_ROCK, TYPE_WATER,
		["scratch", "harden", "absorb"],
		["absorb", "slash", "leer", "hydropump"],
		[34,39,46,53]
		);

pokemon["kabuto"]  = new Pokemon("Kabuto", "kabuto.png",
		"",
		30,80,90,55,55,25,
		TYPE_ROCK, TYPE_WATER,
		["scratch", "harden"],
		["absorb", "slash", "leer", "hydropump"],
		[34,39,44,49],
		{to: "kabutops", at: 40}
		);

pokemon["aerodactyl"]  = new Pokemon("Aerodactyl", "aerodactyl.png",
		"",
		80,105,65,60,130,130,
		TYPE_ROCK, TYPE_FLYING,
		["wingattack","agility"],
		["supersonic", "bite", "takedown", "hyperbeam"],
		[33,38,45,54]
		);

pokemon["snorlax"]  = new Pokemon("Snorlax", "snorlax.png",
		"",
		160,110,65,65,30,1014,
		TYPE_NORMAL, TYPE_NONE,
		["headbutt", "amnesia","rest"],
		["bodyslam","harden","doubleedge","hyperbeam"],
		[35,41,48,56]
		);

pokemon["articuno"]  = new Pokemon("Articuno", "articuno.png",
		"",
		90,85,100,95,85,122,
		TYPE_ICE, TYPE_FLYING,
		["peck", "icebeam"],
		["blizzard", "agility", "mist"],
		[51,55,60]
		);

pokemon["zapdos"]  = new Pokemon("Zapdos", "zapdos.png",
		"",
		90,90,85,125,100,116,
		TYPE_ELECTRIC, TYPE_FLYING,
		["thundershock","drillpeck"],
		["thunder","agility","lightscreen"],
		[51,55,60]
		);

pokemon["moltres"]  = new Pokemon("Moltres", "moltres.png",
		"",
		90,100,90,125,90,132,
		TYPE_FIRE, TYPE_FLYING,
		["peck","firespin"],
		["leer","agility","skyattack"],
		[51,55,60]
		);

pokemon["dragonite"]  = new Pokemon("Dragonite", "dragonite.png",
		"",
		91,134,95,100,80,463,
		TYPE_DRAGON, TYPE_NONE,
		["wrap", "leer", "thunderwave", "agility"],
		["thunderwave", "agility", "slam", "dragonrage", "hyperbeam"],
		[10,20,35,45,60]
		);

pokemon["dragonair"]  = new Pokemon("Dragonair", "dragonair.png",
		"",
		61,84,65,70,70,36,
		TYPE_DRAGON, TYPE_NONE,
		["wrap", "leer", "thunderwave"],
		["thunderwave", "agility", "slam", "dragonrage", "hyperbeam"],
		[10,20,35,45,55],
		{to: "dragonite", at:55}
		);

pokemon["dratini"]  = new Pokemon("Dratini", "dratini.png",
		"",
		41,64,45,50,50,7,
		TYPE_DRAGON, TYPE_NONE,
		["wrap", "leer"],
		["thunderwave", "agility", "slam", "dragonrage", "hyperbeam"],
		[10, 20,35,45,55],
		{to: "dragonair", at: 30}
		);

pokemon["mewtwo"]  = new Pokemon("Mewtwo", "mewtwo.png",
		"",
		106,110,90,154,130,269,
		TYPE_PSYCHIC, TYPE_NONE,
		["confusion", "disable", "swift", "psychic"],
		["barrier", "psychic", "recover", "mist", "amnesia"],
		[63,66,70,75,81]
		);

pokemon["mew"]  = new Pokemon("Mew", "mew.png",
		"",
		100,100,100,100,100,9,
		TYPE_PSYCHIC, TYPE_NONE,
		["pound"],
		["transform", "megapunch", "metronome", "psychic"],
		[10,20,30,40]
		);


//name,filename, itemtype, cost, nutrition
items = []
items["berry"] = new Item("Berry", "berry.png", ITEM_FOOD, 200, 200);
items["pokeball"] = new Item("Pokeball", "pokeball.png", ITEM_USABLE, 200);
items["potion"] = new Item("Potion", "potion.png", ITEM_USABLE, 200);
items["helixfossil"] = new Item("Helix Fossil", "hfossil.png", ITEM_USABLE, 20000);

//name,map, npcs, items, pokemon, poklev, mapprop
rooms = [];
rooms["bedroom"] = new Room("Your bedroom", maps["bedroom"], [], []);
rooms["downstair"] = new Room("Kitchen", maps["downstair"], [npc["mom"]], [], []);
rooms["pallettown"] = new Room("Pallet Town", maps["pallettown"], [], [], ["pidgey", "rattata"], 5);
rooms["oakslab"] = new Room("Oak's Lab", maps["oakslab"], [npc["oak"]], [
		{itemtype: "pokeball", pos: {y: 2, x: 6}, contains: "charmander", lev : 5},
		{itemtype: "pokeball", pos: {y: 2, x: 7}, contains: "squirtle", lev: 5},
		{itemtype: "pokeball", pos: {y: 2, x: 8}, contains: "bulbasaur", lev: 5}]);
rooms["pointlesshouse"] = new Room("Guy's house", maps["pointlesshouse"], [], [
		{itemtype: "potion", pos: {y: 1, x: 1}},
		{itemtype: "potion", pos: {y: 1, x: 3}}]);

rooms["endzone"] = new Room("Victory Cul-de-sac", maps["viktor"], [], [
		{itemtype: "helixfossil", pos: {y: 2, x: 3}}]);

rooms["route1"] = new Room("Route 1", [], [], [], 
		["nidoranm","nidoranf", "pidgey", "rattata", "caterpie", "weedle", "metapod", "kakuna", "spearow", "ekans"]
		, 5,
		{rng:true, store: false, y: 25, x:30, height: 3, 
			ent:[{innum: 9, outnum: 8}, {innum: 11, outnum: 10}, {innum: 13, outnum: 12}],
			exi:[{innum: 14, outnum: 15}, {innum: 16, outnum: 17}, {innum: 18, outnum: 19}]});

rooms["route2"] = new Room("Route 2", [], [], [], 
		["sandshrew", "pikachu", "clefairy", "vulpix", "jigglypuff", "zubat", "oddish", "meowth", "paras", "magikarp"],
		10,
		{rng:true, store: false, y: 30, x:30, height: 5, 
			ent:[{innum: 15, outnum: 14}, {innum: 17, outnum: 16}, {innum: 19, outnum: 18}],
			exi:[{innum: 20, outnum: 21}, {innum: 22, outnum: 23}, {innum: 24, outnum: 25}]});

rooms["route3"] = new Room("Route 3", [], [], [], 
		["diglett", "mankey", "growlithe", "poliwag", "abra", "machop", "tentacool", "bellsprout", "geodude", "venonat"],
		15,
		{rng:true, store: false, y: 35, x:30, height: 5, 
			ent:[{innum: 21, outnum: 20}, {innum: 23, outnum: 22}, {innum: 25, outnum: 24}],
			exi:[{innum: 26, outnum: 27}, {innum: 28, outnum: 29}, {innum: 30, outnum: 31}]});

rooms["route4"] = new Room("Route 4", [], [], [], 
		["psyduck", "seel", "ponyta", "slowpoke", "doduo", "farfetchd", "magnemite", "grimer", "shellder"], 20,
		{rng:true, store: false, y: 40, x:20, height: 5, 
			ent:[{innum: 27, outnum: 26}, {innum: 29, outnum: 28}, {innum: 31, outnum: 30}],
			exi:[{innum: 32, outnum: 33}, {innum: 34, outnum: 35}, {innum: 36, outnum: 37}]});

rooms["route5"] = new Room("Route 5", [], [], [], 
		["butterfree", "beedrill", "pidgeotto", "golbat", "gastly", "drowzee", "onix", "krabby", "cubone", "machoke", "voltorb"],
		25,
		{rng:true, store: false, y: 45, x:30, height: 5, 
			ent:[{innum: 33, outnum: 32}, {innum: 35, outnum: 34}, {innum: 37, outnum: 36}],
			exi:[{innum: 38, outnum: 39}, {innum: 40, outnum: 41}, {innum: 42, outnum: 43}]});

rooms["route6"] = new Room("Route 6", [], [], [], 
		["fearow", "raichu", "nidorina", "nidorino", "hitmonlee", "hitmonchan", "horsea", "chansey", "staryu", "goldeen", "omanyte", "dratini"], 
		30,
		{rng:true, store: false, y: 50, x:40, height: 5, 
			ent:[{innum: 39, outnum: 38}, {innum: 41, outnum: 40}, {innum: 43, outnum: 42}],
			exi:[{innum: 44, outnum: 45}, {innum: 46, outnum: 47}, {innum: 48, outnum: 49}]});

rooms["route7"] = new Room("Route 7", [], [], [], 
		["bulbasaur", "charmander", "squirtle", "graveler", "koffing", "rhyhorn", "jynx", "poliwhirl", "gloom", "haunter"],
		35,
		{rng:true, store: false, y: 53, x:40, height: 5, 
			ent:[{innum: 45, outnum: 44}, {innum: 47, outnum: 46}, {innum: 49, outnum: 48}],
			exi:[{innum: 50, outnum: 51}, {innum: 52, outnum: 53}, {innum: 54, outnum: 55}]});

rooms["route8"] = new Room("Route 8", [], [], [], 
		["eevee", "exeggcute", "scyther", "mrmime", "magmar", "electabuzz", "lapras", "ditto", "kabuto", "snorlax", "weepinbell"],
		40,
		{rng:true, store: false, y: 56, x:40, height: 5, 
			ent:[{innum: 51, outnum: 50}, {innum: 53, outnum: 52}, {innum: 55, outnum: 54}],
			exi:[{innum: 56, outnum: 57}, {innum: 58, outnum: 59}, {innum: 60, outnum: 61}]});

rooms["route9"] = new Room("Route 9", [], [], [], 
		["raticate", "tentacruel", "arbok", "raichu", "sandslash", "tauros", "pinsir", "haunter", "muk", "dodrio", "dugtrio", "kadabra", "dragonair"], 45,
		{rng:true, store: false, y: 59, x:40, height: 5, 
			ent:[{innum: 57, outnum: 56}, {innum: 59, outnum: 58}, {innum: 61, outnum: 60}],
			exi:[{innum: 62, outnum: 63}, {innum: 64, outnum: 65}, {innum: 66, outnum: 67}]});

rooms["route10"] = new Room("Route 10", [], [], [], 
		["golduck", "dewgong", "starmie", "pidgeot", "clefable", "wigglytuff", "ninetales", "primeape", "tangela", "ivysaur", "charmeleon", "wartortle"], 50,
		{rng:true, store: false, y: 62, x:40, height: 5, 
			ent:[{innum: 63, outnum: 62}, {innum: 65, outnum: 64}, {innum: 67, outnum: 66}],
			exi:[{innum: 68, outnum: 69}, {innum: 70, outnum: 71}, {innum: 72, outnum: 73}]});

rooms["route11"] = new Room("Route 11", [], [], [], 
		["tangela", "lickitung", "rapidash", "kangaskhan", "persian", "vaporeon", "jolteon", "flareon", "porygon", "cloyster", "slowbro", "arcanine"], 55,
		{rng:true, store: false, y: 65, x:50, height: 5, 
			ent:[{innum: 69, outnum: 68}, {innum: 71, outnum: 70}, {innum: 73, outnum: 72}],
			exi:[{innum: 74, outnum: 75}, {innum: 76, outnum: 77}, {innum: 78, outnum: 79}]});

rooms["route12"] = new Room("Route 12", [], [], [], 
		["marowak", "seaking", "seadra", "parasect", "venomoth", "poliwrath", "kingler", "electrode", "aerodactyl", "omastar", "kabutops"], 60,
		{rng:true, store: false, y: 68, x:50, height: 5, 
			ent:[{innum: 75, outnum: 74}, {innum: 77, outnum: 76}, {innum: 79, outnum: 78}],
			exi:[{innum: 80, outnum: 81}, {innum: 82, outnum: 83}, {innum: 84, outnum: 85}]});

rooms["route13"] = new Room("Route 13", [], [], [], 
		["gyarados", "magneton", "lickitung", "exeggutor", "vileplume", "victreebel", "machamp", "rhydon", "nidoqueen", "nidoking", "golem"],
		65,
		{rng:true, store: false, y: 71, x:50, height: 5, 
			ent:[{innum: 81, outnum: 80}, {innum: 83, outnum: 82}, {innum: 85, outnum: 84}],
			exi:[{innum: 86, outnum: 87}, {innum: 88, outnum: 89}, {innum: 90, outnum: 91}]});

rooms["route14"] = new Room("Route 14", [], [], [], 
		["venusaur", "charizard", "blastoise", "alakazam", "dragonite", "snorlax", "gengar"], 70,
		{rng:true, store: false, y: 74, x:50, height: 5, 
			ent:[{innum: 87, outnum: 86}, {innum: 89, outnum: 88}, {innum: 91, outnum: 90}],
			exi:[{innum: 92, outnum: 93}, {innum: 94, outnum: 95}, {innum: 96, outnum: 97}]});

rooms["route15"] = new Room("Route 15", [], [], [], 
		["mew", "mewtwo", "moltres", "articuno", "zapdos"], 75,
		{rng:true, store: false, y: 77, x:50, height: 5, 
			ent:[{innum: 93, outnum: 92}, {innum: 95, outnum: 88}, {innum: 97, outnum: 96}],
			exi:[{innum: 98, outnum: 99}, {innum: 100, outnum: 101}, {innum: 102, outnum: 103}]});

/*
VIRIDIANCITY= new Room("Viridian City", VIRIDIANCITYMAP, [], []);
BUGGYFOREST= new Room("Bug Forest", [], [], [], [CATERPIE, METAPOD, WEEDLE, KAKUNA], 7,
		{rng:true, store: false, y: 50, x:50, height: 2,
			ent:[{innum: 21, outnum: 20}, {innum: 23, outnum: 22}, {innum: 25, outnum: 24}],
			exi:[{innum: 26, outnum: 27}, {innum: 28, outnum: 29}, {innum: 30, outnum: 31}]}); 
VDCITYSTORE= new Room("Joe's Storatorium", VDCITYSTOREMAP, [STOREJOE], [], [], 0, {store: true, rng: false});
*/

//stores select a random item from this list
storeitems = [items["pokeball"], items["potion"]]; 

STARTINGROOM = "bedroom";
STARTINGPOS = {y:4, x:3};
