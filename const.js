/* const.js
 *
 * Defines various constants 
 */

//Asset directories
IMGDIR = "img/"
CURSORFN = IMGDIR + "cursor.png";

// Grid size. Currently the grid doesn't adjust size automatically
// These need to be odd
GDIM = {y:11, x:19};
MAXDIM = 60;  //biggest dimensions of maps
MAXEXITS = 1000; //max total exits, need to change map structre if it needs to be bigger

ELE_PLAYER = 0; ELE_NPC = 1; ELE_POKEMON = 2; ELE_ITEM = 3; ELE_TILE = 4; ELE_ROOM = 5;
MENU_NORMAL = 0; MENU_ATTACK = 1; MENU_ITEM = 2; MENU_SWITCH = 3; MENU_KEEPFIGHTING = 4; //fightmenus
MODE_WALK = 0; MODE_TALK = 1; MODE_BATTLE = 2; MODE_EAT = 3; MODE_GET = 4; //walkingmenus
MODE_USE = 5; MODE_POKE = 6; MODE_DROP = 7;

NIL = {};
DIR_LEFT = {y:0, x:-1}; DIR_RIGHT = {y:0, x:1}; DIR_UP = {y:-1, x:0};
DIR_DOWN = {y:1, x:0}; DIR_ZENITH = {y:0, x:0}; DIR_NOTADIR = {}; 
DIR_UPLEFT = {y:-1, x:-1}; DIR_UPRIGHT = {y:-1, x:1}; DIR_DOWNLEFT = {y:1, x:-1};
DIR_DOWNRIGHT = {y:1, x:1};
DIRS = [DIR_LEFT, DIR_RIGHT, DIR_UP, DIR_DOWN, 
		 DIR_UPLEFT, DIR_UPRIGHT, DIR_DOWNLEFT, DIR_DOWNRIGHT, 
		 DIR_ZENITH, DIR_NOTADIR]
KEY = {A:65, B:66, C:67, D:68, E:69, F:70, G:71,
	H:72, I:73, J:74, K:75, L:76, M:77, N:78,
	O:79, P:80, Q:81, R:82, S:83, T:84, U:85,
	V:86, W:87, X:88, Y:89, Z:90, PERIOD: 190, COMMA: 188,
	LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, 
	HOME:36, PAGEUP: 33, END: 35, PAGEDOWN: 34,
	LESSTHAN: 188, GREATERTHAN: 190, ESCAPE: 27};

ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

LINEOFSIGHT = 17; // How far you can see

// This is supposed to preload images that are called.
// I think this stopped working for Firefox
PRELOADER = new Array(); 
function preload(filename){
	PRELOADER.push(new Image());
	PRELOADER[PRELOADER.length - 1].src = filename;
}

STATNAMES = ["attack", "defence", "speed", "special"];

EFFECT_ATTACKUP = 0; EFFECT_DEFENSEUP = 1; EFFECT_SPEEDUP = 2; EFFECT_SPECIALUP = 3; 
EFFECT_ATTACKDOWN = 4; EFFECT_DEFENSEDOWN = 5; EFFECT_SPEEDDOWN = 6; EFFECT_SPECIALDOWN = 7; 
EFFECT_POISONS = 8; EFFECT_BURNS = 9; EFFECT_FREEZES = 10; EFFECT_CONFUSES = 11; EFFECT_PARALYZES = 12;
EFFECT_PUTSASLEEP = 13;
EFFECT_NONE = -1;

STATUSMESSAGES = ["becomes poisoned", "becomes burned", "becomes frozen",
							 "becomes confused", "becomes paralyzed", "falls asleep"];
STATUSNAMES = ["Poisoned", "Burned", "Frozen", "Confused", "Paralyzed", "Asleep"];
STATUS_POISONED = 0; STATUS_BURNED = 1; STATUS_FROZEN = 2; 
STATUS_CONFUSED = 3; STATUS_PARALYZED = 4; STATUS_ASLEEP = 5;

TYPE_NORMAL = 0; TYPE_FIRE = 1; TYPE_WATER = 2; TYPE_ELECTRIC = 3; TYPE_GRASS = 4;
TYPE_ICE = 5; TYPE_FIGHTING = 6; TYPE_POISON = 7; TYPE_GROUND = 8; TYPE_FLYING = 9;
TYPE_PSYCHIC = 10; TYPE_BUG = 11; TYPE_ROCK = 12; TYPE_GHOST = 13; TYPE_DRAGON = 14;
TYPE_NONE = 15;

MAXHUNGER = 1500;

TYPES = [TYPE_NORMAL, TYPE_FIRE, TYPE_WATER, TYPE_ELECTRIC, TYPE_GRASS, TYPE_ICE, 
			TYPE_FIGHTING, TYPE_POISON, TYPE_GROUND, TYPE_FLYING, TYPE_PSYCHIC, TYPE_BUG,
			TYPE_ROCK, TYPE_GHOST, TYPE_DRAGON, TYPE_NONE];

// Type effectiveness chart
// Probably errors
EFFECTIVE = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,.5, 0, 1, 1], 
	[1,.5,.5, 1, 2, 2, 1, 1, 1, 1, 1, 2,.5, 1,.5, 1], 
	[1, 2,.5, 1,.5, 1, 1, 1, 2, 1, 1, 1, 2, 1,.5, 1], 
	[1, 1, 2,.5,.5, 1, 1, 1, 0, 2, 1, 1, 1, 1,.5, 1], 
	[1,.5, 2, 1,.5, 1, 1,.5, 2,.5, 1,.5, 2, 1,.5, 1], 
	[1, 1,.5, 1, 2,.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1], 
	[2, 1, 1, 1, 1, 2, 1,.5, 1,.5,.5,.5, 2, 0, 1, 1], 
	[1, 1, 1, 1, 2, 1, 1,.5,.5, 1, 1, 2,.5,.5, 1, 1], 
	[1, 2, 1, 2,.5, 1, 1, 2, 1, 0, 1,.5, 2, 1, 1, 1], 
	[1, 1, 1,.5, 2, 1, 2, 1, 1, 1, 1, 2,.5, 1, 1, 1], 
	[1, 1, 1, 1, 1, 1, 2, 2, 1, 1,.5, 1, 1, 1, 1, 1], 
	[1,.5, 1, 1, 2, 1,.5, 2, 1,.5, 2, 1, 1, 1, 1, 1], 
	[1, 2, 1, 1, 1, 2,.5, 1,.5, 2, 1, 2, 1, 1, 1, 1], 
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1], 
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1], 
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

STAT_ATTACK = 0; STAT_DEFENCE = 1; STAT_SPECIAL = 2; STAT_SPEED = 3;
ITEMSPERPAGE = 5;

REGENTIME = 20;


ITEM_FOOD = 0; ITEM_BALL = 1; ITEM_USABLE = 2;
ITEM_ALL = -1;

// For the mapmaker, should be easy to make dynamically
BORDER = 3;
PATHSIZE = 3;
RECCHANCE = .1;
