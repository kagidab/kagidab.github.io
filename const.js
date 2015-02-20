IMGDIR = "img/"
CURSORFN = IMGDIR + "cursor.png";

GDIM = {y:11, x:19};
//Grid sizes, currently the actual grid doesn't adjust size automatically
//keeptheseodd


PLAYA = 0; NPC = 1; POKEMON = 2; ITEM = 3; TILE = 4; ROOM = 5;
NORMALMENU=0; ATTACKMENU=1; ITEMMENU=2; SWITCHMENU=3; KEEPHOLDINGON=4;//fightmenus
WALKMODE = 0; TALKMODE = 1; BATTLEMODE = 2; EATMODE = 3; GETMODE = 4; //walkingmenus
USEMODE=5; POKEMODE=6;DROPMODE=7;
MAXDIM = 60;  //biggest dimensions of maps
MAXEXITS = 1000; //max total exits, need to change map structre if it needs to be bigger

NIL = {};
LEFT = {y:0, x:-1}; RIGHT = {y:0, x:1}; UP = {y:-1, x:0};
DOWN = {y:1, x:0}; ZENITH = {y:0, x:0}; NOTADIR = {}; 
UPLEFT = {y:-1, x:-1}; UPRIGHT = {y:-1, x:1}; DOWNLEFT = {y:1, x:-1};
DOWNRIGHT = {y:1, x:1};
DIRS = [LEFT, RIGHT, UP, DOWN, ZENITH, UPLEFT, UPRIGHT, DOWNLEFT, DOWNRIGHT, NOTADIR]
KEY = {A:65, B:66, C:67, D:68, E:69, F:70, G:71,
	H:72, I:73, J:74, K:75, L:76, M:77, N:78,
	O:79, P:80, Q:81, R:82, S:83, T:84, U:85,
	V:86, W:87, X:88, Y:89, Z:90, PERIOD: 190, COMMA: 188,
		LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, 
		HOME:36, PAGEUP: 33, END: 35, PAGEDOWN: 34,
		LESSTHAN: 188, GREATERTHAN: 190, ESCAPE: 27};

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

LINEOFSIGHT = 17;

PRELOADER = new Array(); //preload images
function preload(filename){
	PRELOADER.push(new Image());
	PRELOADER[PRELOADER.length-1].src = filename;
}

STATNAMES = ["attack", "defence", "speed", "special"];

ATTACKUP = 0; DEFENCEUP = 1; SPEEDUP = 2; SPECIALUP = 3; 
ATTACKDOWN = 4; DEFENCEDOWN = 5; SPEEDDOWN = 6; SPECIALDOWN = 7; 
POISONS = 8; BURNS = 9; FREEZES = 10; CONFUSES = 11; PARALYZES = 12;
PUTSASLEEP = 13; //ADHOCORDER
NOEFFECT = -1;
POISONED = 0; BURNED = 1; FROZEN = 2; CONFUSED = 3; PARALYZED = 4; ASLEEP = 5;
STATUSMESSAGES = ["becomes poisoned", "becomes burned", "becomes frozen",
						"becomes confused", "becomes paralyzed", "falls asleep"];
STATUSNAMES = ["Poisoned", "Burned", "Frozen", "Confused", "Paralyzed", "Asleep"];

NORMAL = 0; FIRE = 1; WATER = 2; ELECTRIC = 3; GRASS = 4;
ICE = 5; FIGHTING = 6; POISON = 7; GROUNDTYPE = 8; FLYING = 9;
PSYCHIC = 10; BUG = 11; ROCK = 12; GHOST = 13; DRAGON = 14;
NILTYPE = 15;

MAXHUNGER = 1500;

TYPES = [NORMAL, FIRE, WATER, ELECTRIC, GRASS, ICE, 
			FIGHTING, POISON, GROUNDTYPE, FLYING, PSYCHIC, BUG,
			ROCK, GHOST, DRAGON, NILTYPE];

//effectiveness chart, finish later
EFFECTIVE = [
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

ATTACKSTAT = 0; DEFENCESTAT = 1; SPECIALSTAT = 2; SPEEDSTAT = 3;
ITEMSPERPAGE = 5;
