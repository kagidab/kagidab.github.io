//I lied, this is actually some other things too

//check if two positions are the same
function equpos(pos1, pos2){
	return pos1.y==pos2.y && pos1.x==pos2.x;
}

function addpos(pos1, pos2){
	return {y: pos1.y + pos2.y, x: pos1.x + pos2.x};
}

function randI(lo, hi){ //random int [lo, hi]
	return lo + Math.floor(prandom()*(1+hi-lo));
}

function justanyol(thing){
	return thing[randI(0, thing.length - 1)];
}

//for accessing all those 2d arrays with poses
function ap(array, pos){
	return array[pos.y][pos.x];
}

function distance(pos1, pos2){
	return Math.pow(pos1.x-pos2.x,2)+Math.pow(pos1.y-pos2.y,2);
}

originalseed = Math.floor(1e7*Math.random());
seednow = originalseed;

function prandom(){
	x = Math.sin(seednow++) * 10000;
	return x - Math.floor(x);
}
