/* innerworkings.js
 *
 * This handles the majority of the input and directs it accordingly
 * 
 *
 * To implement: 
 * wild pokemon should have moves depending on level
 * battles
 * 	-when items implemented properly, a systematic way of dropping
 * story
 * using items 
 * trainer battles
 * mapmaking could be better
 * spritesheet
 * make a better output system
 * Split this file into html interaction things and higher level things
 *
 * TOFIX: 
 * eating menu lets you eat past ITEMSPERPAGE... causes no actual problems, just confusing 
 * hiding is a bit awkward, don't want NPCs appearing on rooftops
 */

newgame("Welcome!");

function newgame(message){
	resetthings(Math.floor(1e7*Math.random()));
	charout = p1; 
	changeroom(rooms[STARTINGROOM], STARTINGPOS); 
	output(0, message);
}

// Make modes objects with functions 
$("body").keydown(function(event){
	clearoutputs();
	var key = event.keyCode;
	var shifted = event.shiftKey;
	var dir = keytodir(key, shifted);
	if(mode == MODE_WALK){ walking(key, shifted, dir); } 
	else if(mode == MODE_EAT){ eat(key); } 
	else if(mode == MODE_TALK){ chat(dir); mode = MODE_WALK;
	} else if(mode == MODE_BATTLE){
		if(anykey) {
			$("#grid").removeClass("blinkonce"); 
			anykey = false;
			update();
			fightmenu = MENU_NORMAL;
			fightingmessage(true);
		} else fightinkeys(key);
	} else if(mode == MODE_GET) gettheitems(key); 
	else if(mode == MODE_DROP); //dropitem(key); 
	else if(mode == MODE_USE); // useitem(key); 
	else if(mode == MODE_POKE);//checkpoke(key); 
});

function walking(key, shifted, dir){
	clearoutputs();
	if(dir != DIR_NOTADIR){ movechar(dir); } 
	else if(key == KEY.GREATERTHAN && shifted || key == KEY.LESSTHAN && shifted){ exit(); } 
	else if(key == KEY.T){ mode = MODE_TALK; output(0, "Talk to whom?");
	} else if(key == KEY.COMMA && !shifted){ getitems(); }
	else if(key == KEY.E){ changetomode(MODE_EAT); }
	else if(key == KEY.P);//{ changetomode(MODE_POKE); }
	else if(key == KEY.I);//{ changetomode(MODE_USE); }
	else if(key == KEY.D);//{ changetomode(MODE_DROP); }
	else if(key == KEY.S){ savegame();}
	else if(key == KEY.R){ restoregame();}
	else if(key == KEY.W){ passtime(10);}
	else if(key == KEY.Q){ passtime(100);}
}

function listonseverallines(list){
	var string = "";
	list.forEach(function(element, index){
		string += "(" + ALPHABET[index] + ") " + element + "<br>";
	});
	return string;
}

function pagebypage(list, page){
	output(1, ""); 
	itemsonpage = ITEMSPERPAGE;
	for(var i = 0; i < ITEMSPERPAGE; i++){
		if(i + page * ITEMSPERPAGE >= list.length){
			itemsonpage = i;
			break;
		}
		if(i > 0) output(1, "<br>", true);
		output(1, "(" + ALPHABET[i] + ") " + list[page * ITEMSPERPAGE + i], true);
	}
	output(0, "");
	if(page != 0) output(0, "(<) Prev ");
	if((page + 1) * ITEMSPERPAGE < list.length) output(0, "(>) Next", 1);
	return itemsonpage;
}


function listpokemon(){
	var listofpoke = listpoke();
	if(listofpoke.length != 0){
		output(0, "Check out which Pokemon?");
		output(1, listonseverallines(listofpoke)); //CHANGEME
	} else {
		output(0, "No Pokemon");
		mode = MODE_WALK;
	}
}

function savegame(){
	output(0, "Game saved!");
	$.jStorage.set("playerroom", curroom.id);
	$.jStorage.set("seedy", originalseed);
	$.jStorage.set("saveexists", true);
	deflatepokemon(p1.inv.balls);
	roomitems = [];
	rooms.forEach( function(element){
		deflatepokemon(element.items);
		roomitems.push(element.items);
	});
	$.jStorage.set("playersave", p1);
	$.jStorage.set("roomitems", roomitems);
	inflateitems(p1.inv.balls);
	rooms.forEach( function(element){
		inflateitems(element.items);
	});
}

// For saving
function deflatepokemon(list){
	list.forEach( function(element, index){
		if(element.contains != undefined){
			var next = element.contains;
			var shortform = {id: next.id, xp: next.xp, level: next.level, hp: next.curhp, moves: next.moves};
			list[index].contains = shortform;
		}
	});
}

// for loading
function inflateitems(list){
	list.forEach( function(itemtoinf, index, array) {
		var infl = items[itemtoinf.id].copy(itemtoinf.pos);
		infl.name = itemtoinf.name;
		infl.pos = itemtoinf.pos;
		if(itemtoinf.contains != undefined){ //ball with pokemon inside
			var next = itemtoinf.contains;
			var inflated = pokemon[next.id].copy({}, next.level);
			inflated.xp = next.xp; 
			inflated.curhp = next.hp;
			inflated.moves = next.moves
			inflated.ballref = infl;
			infl.contains = inflated;
		}
		array[index] = infl;
	});
}

function restoregame(){
	var restp1 = $.jStorage.get("playersave");
	var restroom = $.jStorage.get("playerroom");
	var roomitems = $.jStorage.get("roomitems");
	p1 = SATOSHI.copy({x: 3, y:4}, restp1.level);
	p1.type = ELE_PLAYER;
	p1.dpos = {x: 3, y: 4};
	p1.hunger = restp1.hunger;
	p1.phrases = ["Hello!"];
	p1.inv = restp1.inv;
	p1.bitc = restp1.bitc;
	p1.seentotal = restp1.seentotal;
	p1.ownedtotal = restp1.ownedtotal;
	p1.pos = restp1.pos;
	p1.xp = restp1.xp;
	p1.seen = restp1.seen;
	p1.owned = restp1.owned;
	p1.turns = restp1.turns;

	inflateitems(p1.inv.usable);
	inflateitems(p1.inv.food);
	inflateitems(p1.inv.balls);
	rooms.forEach( function(element, index){
		element.items = roomitems[index];
		if(element.items != undefined) inflateitems(element.items);
		else element.items = [];
		element.npcs.forEach( function(npc){
			npc.pos = npc.dpos;
		});
	});
	charout = p1;
	curroom = rooms[restroom];
	savegame();//fixes some problems with the storage

	output(0, "Game restored!");
	update();
}

function keytodir(keyn, shifted){
	if(keyn == KEY.H || keyn == KEY.LEFT) return DIR_LEFT;
	if(keyn == KEY.J || keyn == KEY.DOWN) return DIR_DOWN;
	if(keyn == KEY.K || keyn == KEY.UP) return DIR_UP;
	if(keyn == KEY.L || keyn == KEY.RIGHT) return DIR_RIGHT;
	if(keyn == KEY.Y || keyn == KEY.HOME) return DIR_UPLEFT;
	if(keyn == KEY.U || keyn == KEY.PAGEUP) return DIR_UPRIGHT;
	if(keyn == KEY.B || keyn == KEY.END) return DIR_DOWNLEFT;
	if(keyn == KEY.N || keyn == KEY.PAGEDOWN) return DIR_DOWNRIGHT;
	if(keyn == KEY.PERIOD && !shifted) return DIR_ZENITH;
	return DIR_NOTADIR;
}

// Give the placement of the top left square
function findtl(pxorpy, max, len){
	if(max < len) return Math.floor((max - len + 1) / 2);
	if(pxorpy < (len - 1) / 2) return 0;
	if(pxorpy > max-(len + 1) / 2) return max - len;
	return pxorpy - (len - 1) / 2;
}

function startpos(post){
	var val = {
		y: findtl(post.y, curroom.dim.y, GDIM.y),
		x: findtl(post.x, curroom.dim.x, GDIM.x)};
	return val;
}

function update(fighting){
	statusupdate();
	if(mode == MODE_WALK && !fighting){
		var hunt = thingsat(curroom.items, p1.pos);
		if(hunt.length > 0){
			var string = "You see here: ";
			hunt.forEach(function(element, index){
				if(index > 0) string += ", ";
				string += "A " + element;
			});
			output(1, string);
		}
	}
	drawmap();
}

function drawmap(){
	$("#cursor").remove();
	for(var ii = 0; ii < GDIM.y; ii++){
		for(var jj = 0; jj < GDIM.x; jj++){
			drawsquare({y: ii, x: jj});
		}
	}
}

//fixmagicalnumbers
function howhungryami(){
	if(p1.hunger > 1000) return { message: "Satisfied", affectstats: 0};
	if(p1.hunger < 100) return  { message: "Weak",      affectstats: -4};
	if(p1.hunger < 300) return  { message: "Hungry",    affectstats: -2};
	else return {message: "", affectstats: 0};
}


function exitdest(pos){
	return Math.floor(ap(curroom.map,pos) % 1e3);
}

function tileat(pos){
	if(ap(curroom.map, pos) > 1e6) 
		return tiles[Math.floor(ap(curroom.map, pos) / 1e6)];
	return tiles[ap(curroom.map, pos)];
}

function drawsquare(pos){
	var ijda = addpos(startpos(p1.pos), pos);// pos is position on grid, ijda is on map
	var toohigh = false; 
	if(curroom.heightmap != undefined && ap(curroom.heightmap, ijda) > ap(curroom.heightmap, p1.pos)
			&& distance(ijda, p1.pos) > LINEOFSIGHT){
		var toohigh = true; 
	} 

	if(inbounds(ijda) && !toohigh){ 
		$(ap(gridimgs,pos)).show();
		var newtile = tileat(ijda);
		var personat = checkforthings(ijda); 
		var hunt = thingsat(curroom.items, ijda);
		var hideme = personat == p1 && newtile.hide && hunt.length == 0 && mode != MODE_BATTLE;

		if(personat != null && !hideme) newtile = personat;

		if(newtile.type == ELE_TILE && newtile.blink) $(ap(gridimgs,pos)).addClass("blinking");
		else $(ap(gridimgs, pos)).removeClass("blinking");

		if(newtile.type == ELE_TILE && ap(at, pos) != newtile.id || personat != null){
			$(ap(gridimgs,pos)).attr("src", newtile.fn);
			if(personat == null) at[pos.y][pos.x] = newtile.id;
			else at[pos.y][pos.x] = -1;
		}
		if(hideme) blinky(pos);
	} else $(ap(gridimgs,pos)).hide(); //OOB
}

//Makes the cursor blink, for hiding in tall grass
function blinky(pos){ 
	$(ap(grids, pos)).append("<img id='cursor' class='blinking' src='" + CURSORFN + "'></img>");
}

//moves around npcs
function movenpcs(){
	curroom.npcs.forEach(function(element){
		if(!element.stat && randI(0, 4) == 0){ //NPC_MOVEFREQ
			move(element, DIRS[randI(0, 3)]);
		}
	})
}

//resets npc positions
function placenpcs(){
	curroom.npcs.forEach(function(element){ element.pos = element.dpos; })
}

function exit(){
	if(tileat(p1.pos).exit){ 
		exitid = exitdest(p1.pos);
		changeroom(rooms[exitrs[exitid]], exitps[exitid]);
	}
}

function changeroom(newroom, newpos){
	curroom = newroom;
	p1.pos = newpos;
	placenpcs();
	update();
}

function thingsat(list, pos){
	var rlist = [];
	list.forEach(function(element){
		if(equpos(element.pos, pos)) rlist.push(element);
	});
	return rlist;
}

function checkforthings(pos){
	if(equpos(p1.pos, pos)) return charout; 

	if(mode == MODE_BATTLE && equpos(pos, encpok.pos)) return encpok;

	var npccheck = thingsat(curroom.npcs, pos);
	if(npccheck.length > 0) return npccheck[0];

	var itemcheck = thingsat(curroom.items, pos);
	if(itemcheck.length > 0) return itemcheck[0];

	return null;
}

// Tries to go to another tile, handles jumps, exits and wild pokemon
function checktile(nexttile, pos, dir){
	if(nexttile.danger){
		if(randI(0, 5) == 0){ //encounter chance
			wildmon(pos); //populates encpok
			encpok.checkifseen(false); //move to wildmon?
			return true;
		}
	} else if(nexttile.exit){
		p1.pos = pos; exit(); return true;
	} else if(nexttile.jumpd != -1 && equpos(DIRS[nexttile.jumpd], dir)){  
		tryjump(nexttile, dir, pos); return true;
	}
	return false; //if nothing is in the way
}

function tryjump(nexttile, dir, pos){
	var newpos = addpos(pos, dir);
	var element = checkforthings(newpos);
	if(element == null || element.type == ELE_ITEM){
		p1.pos = newpos;
	}
}

function move(person, dir){ 
	var op = {y:person.pos.y, x:person.pos.x};
	var np = addpos(person.pos, dir);

	if(!inbounds(np)) return false; 
	var nexttile = tileat(np);
	var things = checkforthings(np); 

	if(person == p1){ //could use object instead of direction
		if(things != null && things.type == ELE_NPC) chat(dir); 
		else if(checktile(nexttile, np, dir)) return !equpos(person.pos, op); //special things eg jump
	}  

	if((things == null || things.type == ELE_ITEM) && nexttile.walk) {
		person.pos = np; 
		return true;
	}
}

//checks if pos is within bounds of current room
function inbounds(pos){ 
	var topl = {y : 0, x : 0};
	var botr = {y : curroom.dim.y, x : curroom.dim.x};
	if(pos.y < topl.y || pos.x < topl.x || pos.y >= botr.y || pos.x >= botr.x) return false;
	return true;
}

function movechar(dir){
	if(!equpos(dir, DIR_ZENITH)){ //just in case
		if(move(p1, dir)) passtime(1);
	} else passtime(1);
}

function passtime(timetopass){
	for(var i = 0; i < timetopass; i++) { //not strictly necessary, but easy way to do this
		if(p1.hunger < 100 && timetopass > 1){
			output(0, "You are too hungry to just sit around");
			break;
		}
		p1.turns++;
		p1.hunger--;
		var hungercheck = howhungryami().affectstats;

		if(hungercheck != hungerstatus){ // Do a full recalculation instead
			p1.att -= hungerstatus - hungercheck; p1.def -= hungerstatus - hungercheck;
			p1.spd -= hungerstatus - hungercheck; p1.spc -= hungerstatus - hungercheck;
			hungerstatus = hungercheck;
		}

		if(p1.turns % REGENTIME == 0) {
			p1.regen();  
			listpoke().forEach(function(element){
				element.regen();
				if(element.curhp <= 0) pokefaint(0, element, 2); 
			});
			if(p1.curhp <= 0) playerfaint(); //link hp changes to this
		}
		movenpcs();
	}
	update();
	if(p1.hunger <= 0) { // if hunger gets changed anywhere else moveme/copyme
		playerfaint();
	}
}

function playerfaint(){
	clearoutputs();
	newgame("You fainted");
}

//append is an optional flag, appends if true
function output(outnum, message, append){ 
	if(append) { 
		$("#bug" + outnum).append(message);
	} else { 
		$("#bug" + outnum).html(message); 
	}
}

function statusupdate(){
	$("#status11").html(charout.name); 
	$("#status12").html("At:" + charout.att + " Df:" + charout.def + " Sp:" + charout.spd + " Sc:" + charout.spc +
			" Own:" + p1.ownedtotal + "(" + p1.seentotal + ")");
	$("#status2").html(curroom + " &#x0E3F:" + p1.bitc + " HP:" + charout.curhp +
			"("+ charout.maxhp + ") Exp:" + charout.level + "(" + xptogo(charout) +
			") T:" + p1.turns + " " + howhungryami().message + " " + charout.checkstatus() + " ");
}

function chat(dir){
	chkp = addpos(p1.pos, dir);
	thing = checkforthings(chkp);
	if(thing != null && (thing.type == ELE_NPC || thing.type == ELE_PLAYER)){
		output(0, thing +": "+ randomelement(thing.phrases));
	}
}

function clearoutputs(){
	$(".bugs").html("");
}

function changetomode(newmode){
	mode = newmode;
	curpage = 0;
	if(newmode == MODE_EAT) {
		if(!listitemsoftype(ITEM_FOOD, curpage)) mode = MODE_WALK;
	}
}
