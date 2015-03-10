//currently items are pretty lacking
//usables don't do anything currently...
//knowing how to use inheritance would help a lot here
//there may be some redundancy here
FOOD = 0; BALL = 1; USABLE = 2;
ALL = -1;

function listoftype(typetolist){
	rlist = [];
	if(typetolist == FOOD || typetolist == ALL){
		p1.inv.food.forEach(function(item){ rlist.push(item); });
	} 
	if(typetolist == BALL || typetolist == ALL){ 
		p1.inv.balls.forEach(function(item){ rlist.push(item); }); 
	} 
	if(typetolist == USABLE || typetolist == ALL){ 
		p1.inv.usable.forEach(function(item){ rlist.push(item); }); 
	}
	return rlist;
}

function listitemsoftype(typetolist, curpage){
	listofitems = listoftype(typetolist);
	if(listofitems.length != 0){
		if(typetolist == FOOD) output("#bug0", "What to eat?");
		if(typetolist == BALL) output("#bug0", "Which Pokemon?");
		if(typetolist == USABLE) output("#bug0", "Use which item?");
		if(typetolist == ALL) output("#bug0", "Which item?");
		pagebypage(listofitems, curpage);
		output("#bug3", "(ESC) Back");
		return true;
	} else {
		if(mode == BATTLEMODE) backtonormal();
		if(typetolist == FOOD) output("#bug0", "Nothing to eat");
		if(typetolist == BALL) output("#bug0", "No Pokemon");
		if(typetolist == USABLE) output("#bug0", "You have no usable items"); 
		if(typetolist == ALL) output("#bug0", "You have no items"); 
		return false;
	}
}


function changetomode(newmode){
	mode = newmode;
	curpage = 0;
	if(newmode == EATMODE) {
		if(!listitemsoftype(FOOD, curpage)) mode = WALKMODE;
	}
}

function dropitem(key){
}

function getitems(){
	listofitems = itemsat(p1.pos);
	if(listofitems.length == 0) output("#bug0", "Nothing here");
	else if(listofitems.length == 1) getitem(0);
	else {
		curpage = 0;
		listzeitems();
		mode = GETMODE;
	}
}

function listzeitems(){
	listofitems = itemsat(p1.pos);
	output("#bug1", "Which item to get?");
	pagebypage(listofitems, curpage);
	output("#bug3", "(ESC) Back");
}

function getzeitems(key){
	letternum = key - KEY.A;
	if(key == KEY.ESCAPE) { bugspray(); mode = WALKMODE;}
	else if(key == KEY.GREATERTHAN) { 
		if((curpage + 1) * ITEMSPERPAGE < itemsat(p1.pos).length) curpage++;
		listzeitems();
	} else if(key == KEY.LESSTHAN) { 
		if(curpage > 0) curpage--;
		listzeitems();
	} else if(letternum >= 0 && letternum < itemsat(p1.pos).length){
		itemnum = letternum + curpage * ITEMSPERPAGE;
		getitem(itemnum);
	} else {
		listzeitems();
	}
}

function itemsat(pos){
	rlist = [];
	for(i = 0; i < curroom.items.length; i++){
		if(equpos(pos, curroom.items[i].pos)){
			rlist.push(curroom.items[i]);
		}
	}
	return rlist;
}

function getitem(itemtogetnum){ 
	itemtoget = itemsat(p1.pos)[itemtogetnum];
	if(curroom.mapprop.store){
		if(itemtoget.cost > p1.doge){
			output("#bug0", "You can't afford it");
			return;
		} else p1.doge -= itemtoget.cost;
	}
	purgeitemfromlist(curroom.items, itemtoget);
	if(itemsat(p1.pos).length > 0) {
		if(itemsat(p1.pos).length == curpage*ITEMSPERPAGE){
			curpage--;
		}
		listzeitems(); 
	} else { bugspray(); mode = WALKMODE;}
	output("#bug0", "You get a " + itemtoget.name);
	if(itemtoget.contains != undefined){
		itemtoget.itemtype = BALL;
		itemtoget.contains.checkifseen(true); //picking up new mon
	}

	if(itemtoget.itemtype == USABLE) p1.inv.usable.push(itemtoget);
	if(itemtoget.itemtype == FOOD) p1.inv.food.push(itemtoget);
	if(itemtoget.itemtype == BALL) p1.inv.balls.push(itemtoget);
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
		listitemsoftype(FOOD, curpage);
		mode = EATMODE;
	} else {
		index = key - KEY.A;
		foodnum = index + curpage * ITEMSPERPAGE;
		if(key == KEY.GREATERTHAN) { 
			if((curpage + 1) * ITEMSPERPAGE < p1.inv.food.length) curpage++;
			listitemsoftype(FOOD, curpage);
		} else if(key == KEY.LESSTHAN) { 
			if(curpage > 0) curpage--;
			listitemsoftype(FOOD, curpage);
		} else if(index >= 0 && index < p1.inv.food.length){
			itemtoeat = p1.inv.food.splice(index, 1)[0];
			output("#bug0", "You eat a " + itemtoeat + ". Nom nom");
			p1.hunger += itemtoeat.nutrition;
			if(p1.hunger > MAXHUNGER) p1.hunger = MAXHUNGER;
			passtime(1);
			mode = WALKMODE;
		} else if(key == KEY.ESCAPE){ 
			mode = WALKMODE;
		} else { listitemsoftype(FOOD, curpage); }
	}
	update();
}


function grabballs(){
	rlist = [];
	p1.inv.usable.forEach( function(element){
		if(element.id == POKEBALL.id) rlist.push(element);
	});
	if(rlist.length == 0) return [null];
	else return rlist;
}

function isininv(itemtocheck){
	listtocheck = listoftype(itemtocheck.itemtype);
	for(var i = 0; i < listtocheck.length; i++){
		if(itemtocheck == listtocheck[i]) return true;
	}
	return false;
}

function Item(name, fn, itemtype, cost, nutrition){
	this.toString = function(){
		if(this.contains != undefined){
			if(isininv(this)) return "" + this.contains;
			else return this.name + " containing a " + this.contains;
		} else if(curroom.mapprop.store){
			return this.name + " [&ETH" + this.cost + "]";
		} else return this.name;
	}
	this.type = ITEM;
	this.name = name;
	this.fn = fn;
	this.cost = cost;
	this.itemtype = itemtype;
	this.nutrition = nutrition;
	this.copy = function(position, room, contains, level){
		newitem = new Item(this.name, IMGDIR + this.fn, this.itemtype, this.cost, 
				this.nutrition);
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
