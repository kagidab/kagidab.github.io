/* room.js
 * Object file for rooms
 */

function Room(name, map, npcs, defitems, pokemon, poklev, mapprop) {
	this.name = name;
	this.map = map;
	this.npcs = npcs;
	this.defitems = defitems;
	this.pokemon = pokemon;
	this.poklev = poklev;
	this.mapprop = mapprop;
	this.type = ELE_ROOM;

	if(mapprop == undefined) {
		this.mapprop = {store: false, rng: false};
	}

	this.toString = function(){ 
		return this.name; 
	}

	this.fill = function(){
		thisroom = this;
		this.map.forEach(function(row, rownum){
			row.forEach(function(element, colnum){
				if(element == tiles["ground"].id){
					items[randomelement(storeitems)].copy({y: rownum, x: colnum}, thisroom);
				}
			});
		});
	}
}

