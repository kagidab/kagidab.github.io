var curpage = 0;
var mode = MODE_WALK;
var encpok;
var fightmenu = MENU_NORMAL;
//var curroom = rooms

var at = new Array(MAXDIM); // holds current tiles for speedup
for(var i = 0; i < MAXDIM; i++){
	at[i] = new Array(MAXDIM);
}

function listinit(list, type){
	Object.values(list).forEach(function(element, index){
		list[index] = element;
		element.id = index;
	});
}

preload(CURSORFN);

listinit(npc);
listinit(pokemon);
listinit(moves);
listinit(items);
listinit(tiles);
listinit(rooms);
listinit(TYPES);

//revise method for exits
exitrs = new Array(MAXEXITS); //Which room is each exit 
exitps = new Array(MAXEXITS); //xandy of each exit
/*
rooms.forEach(function(room, roomid) {
	room.map.forEach(function(row, rid) {
		row.forEach( function(element, cid) {
			if(element > 1e6){ 
				id1 = Math.floor((element % 1e6) / 1000);
				exitrs[id1] = roomid;
				exitps[id1] = {y : rid, x : cid};
			}
		});
	});
});*/

//sets up the grid html
var bigstring = "";
var grids = new Array(GDIM.y);
var gridimgs = new Array(GDIM.y);
for(var i = 0; i < GDIM.y; i++){
	grids[i] = new Array(GDIM.x);
	gridimgs[i] = new Array(GDIM.x);
	for(var j = 0; j < GDIM.x; j++){ //dothisproperly
		grids[i][j] = "ge" + i + "x" + j;
		bigstring +=	"<div class='ge' id='" + grids[i][j] + "'> </div>";
		grids[i][j] = '#' + grids[i][j];
		gridimgs[i][j] = grids[i][j]+" img"; //to avoid a bunch of strcatslater
	}
}

$("#grid").html(bigstring);
$(".ge").append("<img src='" + IMGDIR + "dot.png'></img>");



function resetthings(seed){
	var originalseed = seednow = seed;
	rooms.forEach(function(room, roomid) {
		if(room.mapprop.rng){ 
			newmap = makemap(room.mapprop);
			room.map = newmap.map;
			room.heightmap = newmap.heightmap;
		} 
		room.items = [];
		if(room.mapprop.store) {
			room.fill();
		}

		room.dim = {y: room.map.length, x: room.map[0].length};
		room.defitems.forEach(function(element, index){
			newitem = items[element.itemtype].copy(element.pos, room, element.contains, element.lev);
		});

		room.map.forEach(function(row, rid) {
			row.forEach(function(element, cid) {
				if(element > 1e6){ // revise exit method
					id1 = Math.floor((element % 1e6) / 1000);
					exitrs[id1] = roomid;
					exitps[id1] = {y : rid, x : cid};
				}
			});
		});
	});
	mode = MODE_WALK;
	itemnum = 0;
	hungerstatus = 0;
	p1 = SATOSHI.copy({x: 3, y: 4}, 5);
	p1.turns = 0; 
	p1.type = ELE_PLAYER;
	p1.hunger = 800;
	p1.dpos = {x: 3, y: 4};
	p1.phrases = ["Hello!"];
	p1.inv = {usable: [], balls: [], food: []};
	p1.bitc = 200;
	p1.seen = new Array(pokemon.length);
	p1.owned = new Array(pokemon.length);
	p1.seentotal = 0;
	p1.ownedtotal = 0;
	for(var i = 0; i < pokemon.length; i++){
		p1.seen[i] = false;
		p1.owned[i] = false;
	}
}
