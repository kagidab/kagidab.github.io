/* utility.js
 * 
 * Mostly contains functions for positions and misc functions
 */

//check if two positions are the same
function equpos(pos1, pos2){
	return pos1.y == pos2.y && pos1.x == pos2.x;
}

function addpos(pos1, pos2){
	return {y: pos1.y + pos2.y, x: pos1.x + pos2.x};
}

function randI(lo, hi){ //random int [lo, hi]
	return lo + Math.floor(prandom() * (1 + hi - lo));
}

//Gives a random element from a list
function randomelement(list){
	return list[randI(0, list.length - 1)];
}

//shorthand for accessing 2d arrays with a position
function ap(array, pos){
	return array[pos.y][pos.x];
}

// Returns the square of Euclidean distance between two positions
// Currently just used for line of sight, don't need to return sqrt
function distance(pos1, pos2) {
	return Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2);
}

// These are for future versions to allow pseudorandom generation
originalseed = Math.floor(1e7 * Math.random());
seednow = originalseed;

function prandom(){
	x = Math.sin(seednow++) * 10000;
	return x - Math.floor(x);
}
