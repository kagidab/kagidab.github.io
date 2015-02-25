at = new Array(MAXDIM); // holds current tiles for speedup
for(i=0; i < MAXDIM; i++){
	at[i] = new Array(MAXDIM);
}

function listinit(list, type){
	list.forEach(function(element, index){
		element.id = index;
	});
}

preload(CURSORFN);

listinit(peeps);
listinit(pokemon);
listinit(moves);
listinit(items);
listinit(tiles);
listinit(rooms);
listinit(TYPES);


exitrs = new Array(MAXEXITS); //Which room is each exit 
exitps = new Array(MAXEXITS); //xandy of each exit
rooms.forEach(function(room, roomid) {
	room.map.forEach(function(row, rid) {
		row.forEach( function(element, cid) {
			if(room.map[rid][cid] > 1e6){ //awful exithack 
				//id1 = Math.floor((element % 1e6) / 1000);
				//exitrs[id1] = roomid;
				//exitps[id1] = {y : rid, x : cid};
			}
		});
	});
});

bigstring="";
grids = new Array(GDIM.y);
gridimgs= new Array(GDIM.y);
for(i=0;i<GDIM.y;i++){
	grids[i] = new Array(GDIM.x);
	gridimgs[i] = new Array(GDIM.x);
	for(j=0;j<GDIM.x;j++){ //dothisproperly
		grids[i][j] = "ge"+i+"x"+j;
		bigstring +=	"<div class='ge' id='"+grids[i][j]+"'> </div>";
		grids[i][j] = '#' + grids[i][j];
		gridimgs[i][j] = grids[i][j]+" img"; //to avoid a bunch of strcatslater
	}
}

$("#grid").html(bigstring);
$(".ge").append("<img src='" + IMGDIR + "dot.png'></img>");


STARTINGROOM = BEDROOM;
STARTINGPOS = {y:4, x:3};


function resetthings(seed){
	originalseed = seednow = seed;
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
			//console.log(room);
		room.dim = {y: room.map.length, x: room.map[0].length};
		room.defitems.forEach(function(element, index){
			newitem = element.itemtype.copy(element.pos, room, element.contains, element.lev)
		});
		room.map.forEach(function(row, rid) {
			row.forEach(function(element, cid) {
				if(room.map[rid][cid] > 1e6){ //awful exithack 
					id1 = Math.floor((element % 1e6) / 1000);
					exitrs[id1] = roomid;
					exitps[id1] = {y : rid, x : cid};
				}
			});
		});
	});
	turns = 0; 
	mode = WALKMODE; //movingmode
	itemnum = 0;
	hungerstatus = 0;
	p1 = RED.copy({x: 3, y: 4}, 5);
	p1.type = PLAYA;
	p1.hunger = 800;
	p1.dpos = {x: 3, y: 4};
	p1.phrases = ["I'm so alone"];
	p1.inv = {usable: [], balls: [], food: []};
	p1.doge = 200;
	p1.seen= new Array(pokemon.length);
	p1.owned= new Array(pokemon.length);
	p1.seentotal = 0;
	p1.ownedtotal = 0;
	for(i = 0; i < pokemon.length; i++){
		p1.seen[i] = false;
		p1.owned[i] = false;
	}
}
