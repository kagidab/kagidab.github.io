/* items.js
 * Holds mechanisms for items
 * Currently they're not particularly developed
 * e.g. can't use items, can't drop
 */


function listoftype(typetolist){
	var rlist = [];
	if(typetolist == ITEM_FOOD || typetolist == ITEM_ALL){
		p1.inv.food.forEach(function(item){ rlist.push(item); });
	} 
	if(typetolist == ITEM_BALL || typetolist == ITEM_ALL){ 
		p1.inv.balls.forEach(function(item){ rlist.push(item); }); 
	} 
	if(typetolist == ITEM_USABLE || typetolist == ITEM_ALL){ 
		p1.inv.usable.forEach(function(item){ rlist.push(item); }); 
	}
	return rlist;
}

function listitemsoftype(typetolist, curpage){
	var listofitems = listoftype(typetolist);
	if(listofitems.length != 0){
		if(typetolist == ITEM_FOOD) output(0, "What to eat?");
		if(typetolist == ITEM_BALL) output(0, "Which Pokemon?");
		if(typetolist == ITEM_USABLE) output(0, "Use which item?");
		if(typetolist == ITEM_ALL) output(0, "Which item?");
		pagebypage(listofitems, curpage);
		output(3, "(ESC) Back");
		return true;
	} else {
		if(mode == MODE_BATTLE) backtonormal();
		if(typetolist == ITEM_FOOD) output(0, "Nothing to eat");
		if(typetolist == ITEM_BALL) output(0, "No Pokemon");
		if(typetolist == ITEM_USABLE) output(0, "You have no usable items"); 
		if(typetolist == ITEM_ALL) output(0, "You have no items"); 
		return false;
	}
}


function dropitem(key){ // not implemented
}

function getitems(){
	var listofitems = itemsat(p1.pos);
	if(listofitems.length == 0) output(0, "Nothing here");
	else if(listofitems.length == 1) getitem(0);
	else {
		curpage = 0;
		listtheitems();
		mode = MODE_GET;
	}
}

function listtheitems(){
	var listofitems = itemsat(p1.pos);
	output(1, "Which item to get?");
	pagebypage(listofitems, curpage);
	output(3, "(ESC) Back");
}

function gettheitems(key){
	var letternum = key - KEY.A;
	if(key == KEY.ESCAPE) { 
		clearoutputs(); 
		mode = MODE_WALK;
	} else if(key == KEY.GREATERTHAN) { 
		if((curpage + 1) * ITEMSPERPAGE < itemsat(p1.pos).length) curpage++;
		listtheitems();
	} else if(key == KEY.LESSTHAN) { 
		if(curpage > 0) curpage--;
		listtheitems();
	} else if(letternum >= 0 && letternum < itemsat(p1.pos).length){
		itemnum = letternum + curpage * ITEMSPERPAGE;
		getitem(itemnum);
	} else {
		listtheitems();
	}
}

function itemsat(pos){
	var rlist = [];
	for(var i = 0; i < curroom.items.length; i++){
		if(equpos(pos, curroom.items[i].pos)){
			rlist.push(curroom.items[i]);
		}
	}
	return rlist;
}

function getitem(itemtogetnum){ 
	var itemtoget = itemsat(p1.pos)[itemtogetnum];
	if(curroom.mapprop.store){
		if(itemtoget.cost > p1.bitc){
			output(0, "You can't afford it");
			return;
		} else p1.bitc -= itemtoget.cost;
	}
	purgeitemfromlist(curroom.items, itemtoget);
	if(itemsat(p1.pos).length > 0) {
		if(itemsat(p1.pos).length == curpage*ITEMSPERPAGE){
			curpage--;
		}
		listtheitems(); 
	} else { 
		clearoutputs(); 
		mode = MODE_WALK;
	}
	output(0, "You get a " + itemtoget.name);
	if(itemtoget.contains != undefined){
		itemtoget.itemtype = ITEM_BALL;
		itemtoget.contains.checkifseen(true); //picking up new mon
	}

	if(itemtoget.itemtype == ITEM_USABLE) p1.inv.usable.push(itemtoget);
	if(itemtoget.itemtype == ITEM_FOOD) p1.inv.food.push(itemtoget);
	if(itemtoget.itemtype == ITEM_BALL) p1.inv.balls.push(itemtoget);
	update();
}

function purgeitemfromlist(listtopurge, elementtopurge){
	for(i = 0; i < listtopurge.length; i++){
		if(listtopurge[i] == elementtopurge){
			listtopurge.splice(i, 1); 
		}
	}
}

function eat(key){
	if(key == -1) {
		curpage = 0;
		listitemsoftype(ITEM_FOOD, curpage);
		mode = MODE_EAT;
	} else {
		var index = key - KEY.A;
		var foodnum = index + curpage * ITEMSPERPAGE;
		if(key == KEY.GREATERTHAN) { 
			if((curpage + 1) * ITEMSPERPAGE < p1.inv.food.length) curpage++;
			listitemsoftype(ITEM_FOOD, curpage);
		} else if(key == KEY.LESSTHAN) { 
			if(curpage > 0) curpage--;
			listitemsoftype(ITEM_FOOD, curpage);
		} else if(index >= 0 && index < p1.inv.food.length){
			itemtoeat = p1.inv.food.splice(index, 1)[0];
			output(0, "You eat a " + itemtoeat + ". Nom nom");
			p1.hunger += itemtoeat.nutrition;
			if(p1.hunger > MAXHUNGER) p1.hunger = MAXHUNGER;
			passtime(1);
			mode = MODE_WALK;
		} else if(key == KEY.ESCAPE){ 
			mode = MODE_WALK;
		} else { 
			listitemsoftype(ITEM_FOOD, curpage); 
		}
	}
	update();
}


function grabballs(){
	var rlist = [];
	p1.inv.usable.forEach( function(element){
		if(element.id == items["pokeball"].id) rlist.push(element);
	});
	if(rlist.length == 0) return [null];
	else return rlist;
}

function isininv(itemtocheck){
	var listtocheck = listoftype(itemtocheck.itemtype);
	for(var i = 0; i < listtocheck.length; i++){
		if(itemtocheck.id == listtocheck[i].id) return true;
	}
	return false;
}

function Item(name, fn, itemtype, cost, nutrition){
	this.toString = function(){
		if(this.contains != undefined){
			if(isininv(this)) return "" + this.contains;//fixme
			else return this.name + " containing a " + this.contains;
		} else if(curroom.mapprop.store){
			return this.name + " [&ETH" + this.cost + "]";
		} else return this.name;
	}
	this.type = ELE_ITEM;
	this.name = name;
	this.fn = fn;
	this.cost = cost;
	this.itemtype = itemtype;
	this.nutrition = nutrition;
	this.copy = function(position, room, contains, level){
		newitem = new Item(this.name, IMGDIR + this.fn, this.itemtype, this.cost, this.nutrition);
		if(contains != undefined){//new pokemon
			newitem.contains = newmon(contains, level);
			newitem.newpok = true;
			newitem.contains.ballref = newitem;
		}
		newitem.pos = position;
		if(room != undefined) room.items.push(newitem);
		newitem.id = this.id;
		return newitem;
	}
}
