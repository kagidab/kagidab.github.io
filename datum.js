BEDROOMMAP = [
	[1,1,1,1,1,1,1],
	[2,0,0,0,0,3000001,2],
	[2,0,0,0,0,0,2],
	[2,0,0,5,0,0,2],
	[2,0,0,0,0,0,2],
	[2,0,0,0,0,0,2],
	[2,0,0,0,0,0,2],
	[1,1,1,1,1,1,1]];

DOWNSTAIRMAP = [
	[1,1,1,1,1,1,1],
	[2,0,5,2,0,4001000,2],
	[2,0,1,1,0,0,2],
	[2,0,0,0,0,0,2],
	[2,0,0,0,0,0,2],
	[2,0,0,0,0,0,2],
	[2,0,0,0,0,0,2],
	[1,1,1,6002003,1,1,1]];


PALLETTOWNMAP = [
	[11,11,11,11,11,11,11,12,16008009,16010011,16012013,12,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,12,13,13,13,12,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,12,13,13,13,12,11,11,11,11,11,11,11],
	[11,11,11,12,12,12,12,12,13,13,13,12,12,12,12,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0,10,10,10,10, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0, 2, 9, 9, 2, 0, 0,10,10,10, 0,12,11,11,11],
	[11,11,11,12, 0, 2, 6004005, 9, 2, 0, 0, 7, 6006007, 8, 0,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0,10,10,10,10, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0, 7, 6003002, 9, 8, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0,15,15,15,15, 0, 0, 0,12,11,11,11],
	[11,11,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,11,11,11],
	[11,11,11,12,12,12,12,12,14,14,14,12,12,12,12,12,11,11,11],
	[11,11,11,11,11,11,11,11,14,14,14,11,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,11,14,14,14,11,11,11,11,11,11,11,11],
	[11,11,11,11,11,11,11,11,17,17,17,11,11,11,11,11,11,11,11]];

OAKSLABMAP = [
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

POINTLESSHOUSEMAP = [
	[1,1,1,1,1],
	[2,0,0,0,2],
	[2,0,0,0,2],
	[2,0,0,0,2],
	[1,1,6007006,1,1]
];

NORMAL = {}; FIRE = {}; WATER = {}; ELECTRIC = {}; GRASS = {};
ICE = {}; FIGHTING = {}; POISON = {}; GROUND = {}; FLYING = {};
PSYCHIC = {}; BUG = {}; ROCK = {}; GHOST = {}; DRAGON = {};
NILTYPE = {};

TYPES = [NORMAL, FIRE, WATER, ELECTRIC, GRASS, ICE, 
			FIGHTING, POISON, GROUND, FLYING, PSYCHIC, BUG,
			ROCK, GHOST, DRAGON, NILTYPE];

effec = [
	[1,1,1,1,1,1,1,1,1,1,1,1,0.5,0,1,1],
	[1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5,1],
	[1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5,1],
	[1,1,2,0.5,.5,1,1,1,0,2,1,1,1,1,.5,1],
	[1, .5,1,1,1,1,1,1,1,1,1,1,1,1,.5,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1], 
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,1,1,1,1,1,1,1,1,1,0,1,1,2,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1]
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]


THROWROCK = {
	name : "Throw Rock",
	base : 10,
	type : NORMAL,
	special : false,
}

TACKLE = {
	name : "Tackle",
	base : 10,
	type : NORMAL,
	special : false,
}

GROWL = {
	name : "Growl",
	base : 0,
	type : NORMAL,
	special : false,
}

RED = {
	name: "Red", fn: "red.png",
	phrases: ["I'm so alone"],
	pos : {x: 3, y: 4},
	baseatt: 10, basehp: 25, basedef: 10, basespd: 10, //these in newgame()
	basespc: 10, exp:0, level: 5,
	moves: [THROWROCK],
	type1 : NORMAL, type2 : NILTYPE
}

MOM = {
	name: "Yo' momma", 
	fn: "mom.png", //filename
	phrases: ["Remember to bring fresh underwear",
		"And stay out!",
		"I hope Blue comes over soon, he knows all the right spots *wink*",
		"You're in a coma... just wake up...",
			"One day your father will return..."],
	dpos : {x: 4, y: 4},  //default poses
				//px: 4, py: 4,   //undefault poses
	stat: false, //whether they move
}

OAK = {
	name: "Professor Oak", fn: "oak.png",
	phrases: ["I'm OAK-ay, how are you? HAHAHAHAHAHAH",
	"I hope Blue comes over soon, he knows all the right spots *raises eyebrows*",
	"Are you REALLY a boy or a girl? Ha! Stupid baby ten year old, thinks gender fits into a binary"
	],
	dpos : {x: 3, y: 3}, 
	stat: false,
}

TRAINERJOEY = {
	name: "Trainer Joey", fn: "joey.png",
	phrases: ["I'll call you, bae", "Wanna see my weedle?"],
	dpos : {x: 3, y: 10}, 
	stat: false,
}

TRAINERBILLY = {
	name: "Trainer Billy", fn: "billy.png",
	phrases: ["Man I hate Joey", "I'm on my way to Viridian City, no friends met along the way"],
	dpos : {x: 3, y: 4}, 
	stat: false,
}

GROUND = {
	name: "Ground", fn: "dot.png",
	walk: true,
}

WALLHOR = { name: "Wall", fn: "minus.png", }
WALLVER = { name: "Wall", fn: "pipe.png", }
STAIRDOWN = {
	name: "Stairway", fn: "stairdown.png",
	walk: true, exit: true,
}
STAIRUP = {
	name: "Stairway", fn: "stairup.png",
	walk: true, exit: true
}
MISCOBJECT = { name: "Object", fn: "rbracket.png", }
DOOR = {
	name: "Door", fn: "plus.png",
	walk: true, exit: true
}
HOUSELEFT = { name: "House", fn: "houseleft.png", }
HOUSERIGHT= { name: "House", fn: "houseright.png", }
HOUSEMID= { name: "House", fn: "housemid.png", }
HOUSETOP = {
	name: "roof", fn: "housetop.png",
	walk: true, hide: true
}
TREE = { name: "Tree", fn: "tree.png", }
BLOCKADE = { name: "Blockade", fn: "blockade.png", }
TALLGRASS= {
	name: "Tall grass", fn: "tallgrass.png",
	walk: true, hide: true, danger: true
}
WATERTILE = { name: "Water", fn: "water.png", }
FENCE= { name: "Fence", fn: "fence.png", }
MCHANGEUP= {
	name: "Exit", fn: "mchangeup.png",
	walk: true, exit: true, blink: true
}
MCHANGEDOWN= {
	name: "Exit", fn: "mchangedown.png",
	walk: true, exit: true, blink: true
}
MCHANGELEFT= {
	name: "Exit", fn: "mchangeleft.png",
	walk: true, exit: true, blink: true
}
MCHANGERIGHT = {
	name: "Exit", fn: "mchangeright.png",
	walk: true, exit: true, blink: true
}
UPCLIFF = {
	name: "Cliff", fn: "upcliff.png",
	jumpd: 2
}
DOWNCLIFF = {
	name: "Cliff", fn: "downcliff.png",
	jumpd: 3
}
LEFTCLIFF = {
	name: "Cliff", fn: "leftcliff.png",
	jumpd: 0
}
RIGHTCLIFF = {
	name: "Cliff", fn: "rightcliff.png",
	jumpd: 1
}
SHORTGRASS = {
	name: "Short grass", fn: "shortgrass.png",
	walk: true
}
CLIFFFACE = { name: "Cliff face", fn: "cliffface.png", }
CLIFFFACE1 = { name: "Cliff face", fn: "cliffface1.png", }
CLIFFFACE2 = { name: "Cliff face", fn: "cliffface2.png", }

VENASAUR = {
	name: "Venasaur", fn:"venasaur.png",
	entry:"Just a much bigger, uglier one. Why would you ever pick this line?",
	basehp: 2, baseatt: 3, basespc: 2,basedef: 3,  basespd: 3, weight: 50,
	type1: GRASS, type2: NILTYPE,
	moves: [TACKLE, GROWL]
}

IVYSAUR = { 
	name: "Ivysaur", fn:"ivysaur.png",
	entry: "Ivysaur is well known for its role in the film 'Batman: Triassic'",
	basehp: 2, baseatt: 3, basespc: 2,basedef: 3,  basespd: 3, weight: 50,
	type1: GRASS, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: VENASAUR, at: 36}
}

BULBASAUR = { 
	name: "Bulbasaur", fn:"bulbasaur.png",
	entry:"Bulbasaur enjoys swinging from vines and talking with the jungle creatures",
	basehp: 2, baseatt: 3, basespc: 2,basedef: 3,  basespd: 3, weight: 50,
	type1: GRASS, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: IVYSAUR, at: 16}
}

BLASTOISE = {
	name: "Blastoise", fn: "blastoise.png",
	entry: "",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 50,
	type1: WATER, type2: NILTYPE,
	moves: [TACKLE, GROWL]
}

WARTORTLE = {
	name: "Wartortle", fn: "wartortle.png",
	entry: "You evolved your Squirtle? I HOPE YOU KNOW THIS MEANS WARTORTLE",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 50,
	type1: WATER, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: BLASTOISE, at: 36}
}

SQUIRTLE = { 
	name: "Squirtle",
	fn:"squirtle.png",
	entry:"Squirtle likes to hang out in gangs and wear sunglasses. A real froody dude.",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 50,
	type1: WATER, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: WARTORTLE, at: 16}
}

CHARIZARD = {
	name: "Charizard", fn:"charizard.png",
	entry:"Cha... aaa.. aaari baby[chari baby], won't you come out tonight?",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 50,
	type1: FIRE, type2: NILTYPE,
	moves : [TACKLE, GROWL],
}

CHARMELION = {
	name: "Charmelion", fn:"charmelion.png",
	entry:"CHARMELION GONNA BURN YO' FACE OFF",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 50,
	type1: FIRE, type2: NILTYPE,
	moves : [TACKLE, GROWL],
	evolve: {to: CHARIZARD, at: 36}
}

CHARMANDER = {
	name: "Charmander", fn:"charmander.png",
	entry:"Charmander is the best starter, anyone who says differently is a h8r",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 50,
	type1: FIRE, type2: NILTYPE,
	moves : [TACKLE, GROWL],
	evolve: {to: CHARMELION, at: 16}
}

PIDGEOT = {
	name: "Pidgeot", fn:"pidgeot.png",
	entry: "Pidgeot can fly faster than the speed of light and can even catch up to a mid blast-off Team Rocket",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 50,
	type1: FLYING, type2: NILTYPE,
	moves: [TACKLE, GROWL]
}

PIDGEOTTO = {
	name: "Pidgeotto", fn:"pidgeotto.png",
	entry:"Ol' reliable. When your starter is struggling, trusty Pidgeotto will always step in to finish the job",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 50,
	type1: FLYING, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: PIDGEOT, at: 32}
}

PIDGEY={
	name: "Pidgey", fn:"pidgey.png",
	entry: "Pidgey is known for its cruel PKing tactics, often hanging near new player spawn spots",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 50,
	type1: FLYING, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: PIDGEOTTO, at: 16}
}

RATICATE = {
	name: "Raticate", fn:"rattata.png",
	entry:"Rat, a cat? No! Rat not a cat",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 100,
	type1: NORMAL, type2: NILTYPE,
	moves: [TACKLE, GROWL]
}

RATTATA = {
	name: "Rattata", fn:"rattata.png",
	entry: "Rattatae were once members of the imfamous Team Rocket, having been transmogrified as a punishment for snitching",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 100,
	type1: NORMAL, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: RATICATE, at: 18}
}

BUTTERFREE = {
	name: "Butterfree", fn:"butterfree.png",
	entry: "The current confimed death count for hurricanes caused by butterfrees flapping their wings stands at: 1.6 million",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 100,
	type1: BUG, type2: NILTYPE,
	moves: [TACKLE, GROWL]
}

METAPOD = {
	name: "Metapod", fn:"metapod.png",
	entry: "Ironically, male metapod genitalia are extremely soft",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 100,
	type1: BUG, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: BUTTERFREE, at: 14}
}

CATERPIE = {
	name: "Caterpie", fn:"caterpie.png",
	entry: "Little known fact: Spiderman actually just had caterpies up his sleeves",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 100,
	type1: BUG, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: METAPOD, at: 8}
}

BEEDRILL = {
	name: "Beedrill", fn:"beedrill.png",
	entry: "During a peyote trip, Beedrill realised even the monarchy was limited in power. This led him to build a drill to pierce the heavens and challenge God.",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 100,
	type1: BUG, type2: NILTYPE,
	moves: [TACKLE, GROWL]
}

KAKUNA = { 
	name: "Kakuna", fn:"kakuna.png",
	entry: "Kakuna is a bit of a slacker, just sits around smoking weedle all day and repeating its motto: 'Kakuna matata!'",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 100,
	type1: BUG, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: BEEDRILL, at: 14}
}

WEEDLE = {
	name: "Weedle", fn:"weedle.png",
	entry: "So young, so curious! Weedle will go far, maybe even be king one day!",
	basehp: 2, baseatt: 3, basedef: 3, basespc: 2, basespd: 3, weight: 100,
	type1: BUG, type2: NILTYPE,
	moves: [TACKLE, GROWL],
	evolve: {to: KAKUNA, at: 8}
}


FOOD = 0; BALL = 1; USABLE = 2;


CORPSE = {
	name : "Corpse",
	fn : "corpse.png",
	itemtype : FOOD,
	nutrition: 200,
}

POKEBALL = {
	name : "Pokeball",
	fn : "pokeball.png",
	itemtype : BALL
}

POTION = {
	name : "Potion",
	fn : "potion.png",
	itemtype : USABLE
}

BEDROOM = {
	name: "Your bedroom",
	map: BEDROOMMAP,
};

DOWNSTAIR = {
	name: "Kitchen",
	map: DOWNSTAIRMAP,
	npcs: [MOM],
};

PALLETTOWN = {
	name: "Pallet Town",
	map: PALLETTOWNMAP,
	pokemon:[PIDGEY],
	poklev: 5,
};

OAKSLAB = {
	name: "Oak's Lab",
	map: OAKSLABMAP,
	npcs: [OAK],
	defitems:[
	{itemtype:POKEBALL, pos: {y: 2, x: 6}, contains: CHARMANDER, lev : 5},
	{itemtype:POKEBALL, pos: {y: 2, x: 7}, contains: SQUIRTLE, lev: 5},
	{itemtype:POKEBALL, pos: {y: 2, x: 8}, contains: BULBASAUR, lev: 5}]
};

POINTLESSHOUSE = {
	name: "Guy's house",
	map: POINTLESSHOUSEMAP,
	defitems:[
	{itemtype:POTION, pos: {y: 1, x: 1}},
	{itemtype:POTION, pos: {y: 1, x: 3}}]
}

ROUTE1 = {
	name: "Route 1",
	mapprop: {y: 80, x:80, height: 5, 
		ent: [{innum:9, outnum:8}, {innum:11, outnum:10}, {innum:13, outnum:12}]},
		npcs:[TRAINERJOEY, TRAINERBILLY],
		pokemon: [PIDGEY, RATTATA],
		poklev: 5,
}

rooms = [BEDROOM, DOWNSTAIR, PALLETTOWN, OAKSLAB, POINTLESSHOUSE, ROUTE1];
peeps = [RED, MOM, OAK, TRAINERJOEY, TRAINERBILLY];
tiles = [GROUND, WALLHOR, WALLVER, STAIRDOWN, STAIRUP, 
			MISCOBJECT, DOOR, HOUSELEFT, HOUSERIGHT, HOUSEMID, 
			HOUSETOP, TREE, BLOCKADE, TALLGRASS, WATERTILE,
			FENCE, MCHANGEUP, MCHANGEDOWN, MCHANGELEFT, MCHANGERIGHT,
			UPCLIFF, DOWNCLIFF, LEFTCLIFF, RIGHTCLIFF, SHORTGRASS,
			CLIFFFACE, CLIFFFACE1, CLIFFFACE2
];
pokemon = 
[BULBASAUR, IVYSAUR, VENASAUR,
	SQUIRTLE, WARTORTLE, BLASTOISE,
	CHARMANDER, CHARMELION, CHARIZARD,
	PIDGEY, PIDGEOTTO, PIDGEOT,
	RATTATA, RATICATE,
	CATERPIE, METAPOD, BUTTERFREE,
	WEEDLE, KAKUNA, BEEDRILL];

items = [CORPSE, POKEBALL, POTION];

moves = [THROWROCK, TACKLE, GROWL];

p1 = RED;
