/* map generator
 * REVISE ALGORITHM
 *
 * Premise is to make a hill climb, with somewhat interesting maziness
 * algorithm makes height map by creating rectangles at the top height
 * connects the exit to the topleft rectangle
 * then expanding at the edges to lower heights
 *
 * Should be able to go to tilenums instead  of chars
 * Removing paths at random seems like a wonky way to make sure map works
 * place npcs/items in nice places, make sure can't get stuck
 * currently some maps can take a long time to make a path, limits size 
 */

var visited = [];
var heightmap = [];
var charmap = [];

// sets up for search  
function clearvisited(){
	for(var ii = 0; ii < visited.length; ii++){
		for(var jj = 0; jj < visited[0].length; jj++) {
			visited[ii][jj] = false; 
		}
	}

	for(ii = 0; ii < BORDER; ii++){ 
		for(jj = 0; jj < visited.length; jj++) {
			visited[jj][ii] = visited[jj][visited[0].length - ii - 1] = true; 
		}

		for(jj = 0; jj < visited[0].length; jj++) {
			visited[ii][jj] = visited[visited.length - ii - 1][jj] = true; 
		}
	}
}

function gradientchar(gradient){
	if(gradient.x == 0 && gradient.y >= 1) return '^';
	else if(gradient.x == 0 && gradient.y <= -1) return 'v';
	else if(gradient.x >= 1 && gradient.y == 0) return '<';
	else if(gradient.x <=-1 && gradient.y == 0) return '>';
	else if((gradient.x * gradient.y) > 0) return '/';
	else if((gradient.x * gradient.y) > 0) return '\\';
	else return '.';
}

// performs a depth first search to figure out if the start and end are connected
// doing bfs would be nice, to find the minimum time
function connected(visited, start, end){
	clearvisited();
	var stack = [start];
	visited[start.y][start.x] = true;
	while(stack.length > 0){
		var next = stack.pop();
		if(equpos(next, end)) return true;
		for(dirnum = 0; dirnum < 8; dirnum++){
			var moveto = addpos(next, DIRS[dirnum]);
			if(!ap(visited, moveto) && ap(charmap, moveto) == '.'){
				visited[moveto.y][moveto.x] = true;
				stack.push(moveto);
			}
		}
	}
	return false;
}

//expands a section of a height by one in every direction
function expand(visited, pos, newnum){
	var num = ap(heightmap, pos);
	var stack = [pos];
	clearvisited();
	visited[pos.y][pos.x] = true;

	while(stack.length > 0){
		var next = stack.pop();
		if(heightmap[next.y][next.x] == num) {
			for(var dirnum = 0; dirnum < 4; dirnum++){
				var moveto = addpos(next, DIRS[dirnum]);
				if(!visited[moveto.y][moveto.x]){
					visited[moveto.y][moveto.x] = true;
					stack.push(moveto);
				}
			}
		} else if(heightmap[next.y][next.x] < num) heightmap[next.y][next.x] = newnum;
	}
}

// returns the gradient of the heightmap, to decide if there should be a cliff
function gradi(pos, bounds){
	var grad = {y: 0, x: 0};
	if(pos.y == bounds.up) grad.y = heightmap[pos.y + 1][pos.x] - heightmap[pos.y][pos.x];
	else if(pos.y == bounds.down) grad.y = heightmap[pos.y][pos.x] - heightmap[pos.y - 1][pos.x];
	else grad.y = heightmap[pos.y + 1][pos.x] - heightmap[pos.y - 1][pos.x];

	if(pos.x == bounds.left) grad.x = heightmap[pos.y][pos.x + 1] - heightmap[pos.y][pos.x];
	else if(pos.x == bounds.right) grad.x = heightmap[pos.y][pos.x] - heightmap[pos.y][pos.x - 1];
	else grad.x = heightmap[pos.y][pos.x + 1] - heightmap[pos.y][pos.x - 1];

	return grad;
}

//checks if a square is alone
function neighbours(charmap, pos){
	var count = 0;
	for(var i = 0; i < 4; i++){
		var moveto = addpos(DIRS[i], pos);
		if(ap(charmap, moveto) != '.') count++;
	}
	return count;
}

function drawborder(specs, bounds, entx, exix){
	for(var i = 0; i < BORDER; i++){ 
		for(var j = 0; j < specs.x; j++){//topbot border
			heightmap[i][j] = heightmap[bounds.down + i + 1][j] = 
				charmap[i][j] = charmap[bounds.down + i + 1][j] = 'T';
			if(j >= entx && j < entx + PATHSIZE) 
				heightmap[bounds.down + i + 1][j] = charmap[bounds.down + i + 1][j] = 'e';
			if(j >= exix && j < exix + PATHSIZE) 
				heightmap[i][j] = charmap[i][j] = 'e';
		}
		for(j = 0; j < specs.y; j++) 
			heightmap[j][i] = heightmap[j][bounds.right + i + 1] 
				= charmap[j][i] = charmap[j][bounds.right + i + 1] = 'T'; //lrborder
	}
}

function populaterectanges(specs, rekt, bounds){
	var chance = specs.x * RECCHANCE;
	while(rekt.length < 1){
		for(var i = bounds.up; i < bounds.down; i++){ 
			for(var j = bounds.left; j < bounds.right; j++){
				if(heightmap[i][j] != specs.height && randI(1, chance) == 1){ //make rectangle
					var dims = {y: randI(PATHSIZE + 1, PATHSIZE + 4), x: randI(PATHSIZE + 1, PATHSIZE + 4)};
					if(dims.y + i < bounds.down && dims.x + j < bounds.right){
						rekt.push({dim: dims, y: i, x: j});
						for(var k = i; k < i + dims.y; k++){
							for(var l = j; l < j + dims.x; l++) heightmap[k][l] = specs.height; //fill in heights
						}
					}
				}
			}
		}
	}
}

//from top, draw path to first rectangle, down then leftright
function makefirstpaths(specs, rekt, exix){
	for(var i = BORDER; i < rekt[0].y + PATHSIZE; i++){
		for(var j = exix - 1; j < exix + PATHSIZE + 1; j++){
			heightmap[i][j] = specs.height;
		}
	}

	for(i = rekt[0].y; i < rekt[0].y + PATHSIZE; i++){
		if(rekt[0].x < exix){
			for(j = exix + PATHSIZE - 1; j > rekt[0].x; j--) heightmap[i][j] = specs.height;
		} else {
			for(j = exix; j < rekt[0].x; j++) heightmap[i][j] = specs.height;
		}
	}
}


//this expands the initial rectangles to lower heights
function expandrectangles(specs, rekt, bounds){
	var count = 0;
	var attempts = specs.y * specs.x / 100; // number of attempts should be in proportion to its area
	for(var i = 0; i < rekt.length; i++) {
		expand(visited, rekt[i], specs.height - 1);
		expand(visited, {y:rekt[i].y-1,x:rekt[i].x}, specs.height - 1);
	}
	for(var height = specs.height - 1; height > 0; height--){
		for(var attno = 0; attno < attempts; attno++){
			var ranpos = {y : randI(bounds.up, bounds.down), x : randI(bounds.left, bounds.right)};
			if(ap(heightmap, ranpos) == height) {
				attno += 100;
				expand(visited, ranpos, height);
			}
		}
		if(height != 1){
			for(attno = 0; attno < attempts; attno++){
				ranpos = {y : randI(bounds.up, bounds.down), x : randI(bounds.left, bounds.right)};
				if(ap(heightmap, ranpos) == height){
					attno += 100; 
					expand(visited, ranpos, height - 1);
					while(true){
						ranpos.x++;
						if(ap(heightmap, ranpos) == 'T') break;
						if(ap(heightmap, ranpos) == height - 1) {
							expand(visited, ranpos, height - 1);
							break;
						}
					}
				}
			}
		}
	}
}	

//makes cliffs, populates charmap
function makecliffs(bounds){
	for(var i = bounds.up; i < bounds.down; i++){
		for(var j = bounds.left; j < bounds.right; j++){
			var gradient = gradi({y:i, x:j}, bounds);
			charmap[i][j] = gradientchar(gradient);
		}
	}
}

function ensurepath(bounds, entx, exix){
	for(var i = 0; i < PATHSIZE; i++){
		charmap[bounds.down][i + entx] = '.'; //this keeps the entrance clear, helpful for DFS later
	}

	while(!connected(visited, {y: bounds.down, x: entx}, {y: bounds.up, x: exix})){
		var dir = randI(0, 3);
		var npos = {y: randI(bounds.up, bounds.down), x: randI(bounds.left, bounds.right)};
		var notempty = false;
		while(true){
			if(ap(charmap, npos) == 'T' || ap(charmap, npos) == 'e') break;
			if(notempty && (ap(heightmap, npos) == 0)) break;
			if(ap(charmap, npos) != '.') notempty = true;
			charmap[npos.y][npos.x] = '.';
			npos = addpos(npos, DIRS[dir]);
		}
	}
}

function cleanup(bounds){
	var pos = {y:0, x:0};
	for(pos.y = bounds.up; pos.y < bounds.down; pos.y++){
		for(pos.x = bounds.left; pos.x < bounds.right; pos.x++){
			if(neighbours(charmap, pos) == 0) 
				charmap[pos.y][pos.x] = '.'; //removes lone blocks
			if(neighbours(charmap, pos) == 4){
				var gradient = gradi({y: pos.y, x: pos.x}, bounds);
				charmap[pos.y][pos.x] = gradientchar(gradient);
			}
		}
	}
}

function chartoid(specs, entx, exix){
	for(var i = 0; i < specs.y; i++){
		for(var j = 0; j < specs.x; j++){
			if(charmap[i][j]=='.') charmap[i][j] = tiles["shortgrass"].id;
			if(charmap[i][j]=='<') charmap[i][j] = tiles["leftcliff"].id;
			if(charmap[i][j]=='>') charmap[i][j] = tiles["rightcliff"].id;
			if(charmap[i][j]=='^') charmap[i][j] = tiles["upcliff"].id;
			if(charmap[i][j]=='v') charmap[i][j] = tiles["downcliff"].id;
			if(charmap[i][j]=='T') {charmap[i][j] = tiles["tree"].id; heightmap[i][j] = 0; }
			if(charmap[i][j]=='e') {charmap[i][j] = tiles["shortgrass"].id; heightmap[i][j] = 0; }
			if(charmap[i][j]=='*') charmap[i][j] = tiles["cliffface"].id;
			if(charmap[i][j]=='\\') charmap[i][j] = tiles["cliffface1"].id;
			if(charmap[i][j]=='/') charmap[i][j] = tiles["cliffface2"].id;
		}
	}

	for(i = 0; i < PATHSIZE; i++){ // add exits
		charmap[specs.y - 1][entx + i] = tiles["mchangedown"].id * 1e6 + specs.ent[i].innum * 1e3 + specs.ent[i].outnum;
		charmap[0][exix + i] = tiles["mchangeup"].id * 1e6 + specs.exi[i].innum * 1e3 + specs.exi[i].outnum;
	}
}

function makearrays(specs){
	for(var i = 0; i < heightmap.length; i++){
		heightmap[i] = new Array(specs.x);
		charmap[i] = new Array(specs.x);
		visited[i] = new Array(specs.x);
		for(var j = 0; j < heightmap[0].length; j++) {
			heightmap[i][j] = 0;
			charmap[i][j] = '.';
		}
	}
}

function maketallgrass(specs, bounds){
	var attempts = specs.x * specs.y / 3;
	for(var att = 0; att < attempts / 3; att++){
		var next = {y: randI(bounds.up, bounds.down), x: randI(bounds.left, bounds.right)}
		if(ap(charmap, next) == '.') charmap[next.y][next.x] = tiles["tallgrass"].id;
	}
}

function makemap(specs){
	heightmap = new Array(specs.y); //heightmap
	charmap = new Array(specs.y); //charactermap

	var rekt = [];
	var bounds = {up: BORDER, down: specs.y - BORDER - 1, left: BORDER, right: specs.x - BORDER - 1}
	visited = new Array(specs.y);

	// make the x values of leftmost piece of entrance/exit
	var entx = bounds.left + Math.floor(prandom() * (bounds.right - bounds.left - PATHSIZE));
	var exix = bounds.left + Math.floor(prandom() * (bounds.right - bounds.left - PATHSIZE));

	makearrays(specs);
	drawborder(specs, bounds, entx, exix);
	populaterectanges(specs, rekt, bounds);
	makefirstpaths(specs, rekt, exix);
	expandrectangles(specs, rekt, bounds);
	makecliffs(bounds);
	ensurepath(bounds, entx, exix);
	cleanup(bounds);
	maketallgrass(specs, bounds);
	chartoid(specs, entx, exix); 

	return {heightmap: heightmap, map: charmap};
}
