//map generator
//
//idea was to make a hill climb, with somewhat interesting maziness
//algorithm makes height map by creating rectangles at the top height
//connects the exit to the topleft rectangle
//then expanding at the edges to lower heights
//
//A few of the bits are pointless, don't actually need to make charmap, 
//can go straight to the actual tilenums
//I think initial rectangles should just be random heights
//omit Connecting the rectangle to the exit
//instead just keep the entrances clear
//it will make extending to more exits easier tho currently exits look nice
//If I change to bfs, I can make it reject maps that aren't windy enough
//Removing paths at random seems like a wonky way to make sure map works
//TODO: place npcs/items in nice places, make sure can't get stuck
//make pseudorandom to repeat
// currently doesn't terminate because of expand section sometimes

//these could be dynamic, but meh
BORDER = 3;
PATHSIZE = 3;
visited=[];

function clearvisited(){
	for(ii = 0; ii < visited.length; ii++){
		for(jj = 0; jj < visited[0].length; jj++) visited[ii][jj] = false; 
	}
	for(ii = 0; ii < BORDER; ii++){ 
		for(jj = 0; jj < visited.length; jj++) 
			visited[jj][ii] = visited[jj][visited[0].length - ii - 1] = true; 
		for(jj = 0; jj < visited[0].length; jj++) 
			visited[ii][jj] = visited[visited.length - ii - 1][jj] = true; 
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
//doing bfs would be nicer, to find the minimum time
function connected(charmap, visited, start, end){//doesn't check jumps, owel
	clearvisited();
	stack = [start];
	visited[start.y][start.x] = true;
	while(stack.length>0){
		next = stack.pop();
		if(equpos(next, end)) return true;
		for(dirnum = 0; dirnum < 4; dirnum++){
			moveto = addpos(next, DIRS[dirnum]);
			if(!ap(visited, moveto) && ap(charmap, moveto) == '.'){
				visited[moveto.y][moveto.x] = true;
				stack.push(moveto);
			}
		}
	}
	return false;
}

//expands a section of a height by one in every direction
function expand(map, visited, pos, newnum){
	num = ap(map, pos);
	clearvisited();

	stack = [pos];
	visited[pos.y][pos.x] = true;
	while(stack.length > 0){
		next = stack.pop();
		if(map[next.y][next.x] == num) {
			for(dirnum = 0; dirnum < 4; dirnum++){
				moveto = addpos(next, DIRS[dirnum]);
				if(!visited[moveto.y][moveto.x]){
					visited[moveto.y][moveto.x] = true;
					stack.push(moveto);
				}
			}
		} else if(map[next.y][next.x] < num) map[next.y][next.x] = newnum;
	}
}

function gradi(pos, bounds){
	grad = {y: 0, x: 0};
	if(pos.y == bounds.up) grad.y = map[pos.y + 1][pos.x] - map[pos.y][pos.x];
	else if(pos.y == bounds.down) grad.y = map[pos.y][pos.x] - map[pos.y - 1][pos.x];
	else grad.y = map[pos.y + 1][pos.x] - map[pos.y - 1][pos.x];

	if(pos.x == bounds.left) grad.x = map[pos.y][pos.x + 1] - map[pos.y][pos.x];
	else if(pos.x == bounds.right) grad.x = map[pos.y][pos.x] - map[pos.y][pos.x - 1];
	else grad.x = map[pos.y][pos.x + 1] - map[pos.y][pos.x - 1];

	return grad;
}

//checks if a square is alone
function friends(charmap, pos){
	count = 0;
	for(i = 0; i < 4; i++){
		moveto = addpos(DIRS[i], pos);
		if(ap(charmap, moveto) != '.') count++;
	}
	return count;
}

function makemap(specs){
	map = new Array(specs.y);
	charmap = new Array(specs.y);
	visited = new Array(specs.y);
	for(i=0; i < map.length; i++){
		map[i] = new Array(specs.x);
		charmap[i] = new Array(specs.x);
		visited[i] = new Array(specs.x);
		for(j = 0; j < map[0].length; j++) {
			map[i][j] = 0;
			charmap[i][j] = '.';
		}
	}

	bounds = {up: BORDER, down: specs.y - BORDER - 1, left: BORDER, right: specs.x - BORDER - 1}

	//finds the xval of leftmost piece of entrance/exit
	entx = bounds.left +Math.floor(prandom() * (bounds.right - bounds.left - PATHSIZE));
	exix = bounds.left +Math.floor(prandom() * (bounds.right - bounds.left - PATHSIZE));

	//draw border
	for(i = 0; i < BORDER; i++){ 
		for(j = 0; j < specs.x; j++){//topbot border
			map[i][j] = map[bounds.down + i + 1][j] = 
				charmap[i][j] = charmap[bounds.down + i + 1][j] = 'T';
			if(j >= entx && j < entx + PATHSIZE) 
				map[bounds.down + i + 1][j] = charmap[bounds.down + i + 1][j] = 'e';
			if(j >= exix && j < exix + PATHSIZE) 
				map[i][j] = charmap[i][j] = 'e';
		}
		for(j = 0; j < specs.y; j++) 
			map[j][i] = map[j][bounds.right + i + 1] 
				= charmap[j][i] = charmap[j][bounds.right + i + 1] = 'T'; //lrborder
	}


	//this section makes rectangles randomly
	//could make it jump randomly instead, but it's helpful for the following bit to know the topest rectangle
	rekt = [];
	RECCHANCE = specs.x/10 ;
	while(rekt.length < 1){//actual problem if no recs created{
		for(i = bounds.up; i < bounds.down; i++){ 
			for(j = bounds.left; j < bounds.right; j++){
				if(map[i][j] != specs.height && randI(1, RECCHANCE) == 1){ //make rectangle
					dims = {y: randI(PATHSIZE + 1, PATHSIZE + 4), x: randI(PATHSIZE + 1, PATHSIZE + 4)};
					if(dims.y + i < bounds.down && dims.x + j < bounds.right){
						rekt.push({dim: dims, y: i, x: j});
						for(k = i; k < i + dims.y; k++){
							for(l = j; l < j + dims.x; l++) map[k][l] = specs.height; //fill in heights
						}
					}
				}
			}
		}
	}

	//from top, draw path to first rectangle, down then leftright
	for(i=BORDER; i < rekt[0].y + PATHSIZE; i++){
		for(j = exix - 1; j < exix + PATHSIZE + 1; j++){
			//if(j == BORDER - 1 || j == DIMX - BORDER) continue;
			map[i][j] = specs.height;
		}
	}

	for(i = rekt[0].y; i < rekt[0].y + PATHSIZE; i++){
		if(rekt[0].x < exix){
			for(j = exix + PATHSIZE - 1; j > rekt[0].x; j--) map[i][j] = specs.height;
		} else {
			for(j = exix; j < rekt[0].x; j++) map[i][j] = specs.height;
		}
	}


	//this section expands the initial rectangles to lower heights
	count=0;
	ATTEMPTS = specs.y * specs.x / 100;
	for(i = 0; i < rekt.length; i++) {
		expand(map, visited, rekt[i], specs.height - 1);
		expand(map, visited, {y:rekt[i].y-1,x:rekt[i].x}, specs.height - 1);
	}
	for(height = specs.height - 1; height > 0; height--){
		for(attno = 0; attno < ATTEMPTS; attno++){
			ranpos = {y : randI(bounds.up, bounds.down), x : randI(bounds.left, bounds.right)};
			if(ap(map, ranpos) == height) {
				attno += 100;
				expand(map, visited, ranpos, height);
			}
		}
		if(height != 1){
			for(attno = 0; attno < ATTEMPTS; attno++){
				ranpos = {y : randI(bounds.up, bounds.down), x : randI(bounds.left, bounds.right)};
				if(ap(map, ranpos) == height){
					attno += 100;
					expand(map, visited, ranpos, height - 1);
					while(true){
						ranpos.x++;
						if(ap(map, ranpos) == 'T') break;
						if(ap(map, ranpos) == height - 1) {
							expand(map, visited, ranpos, height - 1);break;
						}
					}
				}
			}
		}
	}

	//makes cliffs, populates charmap
	for(i = bounds.up; i < bounds.down; i++){
		for(j = bounds.left; j < bounds.right; j++){
			gradient = gradi({y:i, x:j}, bounds);
			charmap[i][j] = gradientchar(gradient);
		}
	}

	for(i = 0; i < PATHSIZE; i++){
		charmap[bounds.down][i + entx] = '.'; //this keeps the entrance clear, helpful for DFS later, ruins nice hills
	}

	while(!connected(charmap, visited, {y: bounds.down, x: entx}, {y: bounds.up, x: exix})){
		dir = randI(0, 3);
		npos = {y: randI(bounds.up, bounds.down), x: randI(bounds.left, bounds.right)};
		sometoggle = false;
		while(true){
			if(ap(charmap, npos) == 'T' || ap(charmap, npos) == 'e') break;
			if(sometoggle && (ap(charmap, npos) == '.')) break;
			if(ap(charmap, npos) != '.') sometoggle = true;
			charmap[npos.y][npos.x] = '.';
			npos = addpos(npos, DIRS[dir]);
		}
	}

	//nowitsamap, cleanup
	pos = {y:0, x:0};
	for(pos.y = bounds.up; pos.y < bounds.down; pos.y++){
		for(pos.x = bounds.left; pos.x < bounds.right; pos.x++){
			if(friends(charmap, pos) == 0) 
				charmap[pos.y][pos.x] = '.'; //removes lone blocks
			if(friends(charmap, pos) == 4){
				gradient = gradi({y: pos.y, x: pos.x}, bounds);
				charmap[pos.y][pos.x] = gradientchar(gradient);
			}
			/*if((ap(charmap, pos) == '<' || ap(charmap, pos) == '>') &&
				(ap(charmap, addpos(pos, LEFT)) != '.' || 
				ap(charmap, addpos(pos, RIGHT)) != '.')) charmap[pos.y][pos.x] = '*';
				if((ap(charmap, pos) == '^' || ap(charmap, pos) == 'v') &&
				(ap(charmap, addpos(pos, UP)) != '.' || 
				ap(charmap, addpos(pos, DOWN)) != '.')) charmap[pos.y][pos.x] = '*';*/
		}
	}

	//icould check if it's possible to get stuck, but that seems like a feature
	for(att = 0; att < specs.y * specs.y / 3; att++){
		next = {y: randI(bounds.up, bounds.down), x: randI(bounds.left, bounds.right)}
		if(ap(charmap, next) == '.') charmap[next.y][next.x] = TALLGRASS.id;
	}

	for(i=0; i < specs.y; i++){
		string = "";
		for(j=0; j< specs.x; j++){
			if(charmap[i][j]=='.') charmap[i][j] = SHORTGRASS.id;
			if(charmap[i][j]=='<') charmap[i][j] = LEFTCLIFF.id;
			if(charmap[i][j]=='>') charmap[i][j] = RIGHTCLIFF.id;
			if(charmap[i][j]=='^') charmap[i][j] = UPCLIFF.id;
			if(charmap[i][j]=='v') charmap[i][j] = DOWNCLIFF.id;
			if(charmap[i][j]=='T') {charmap[i][j] = TREE.id; map[i][j] =0;}//nottheplace..
			if(charmap[i][j]=='e') {charmap[i][j] = SHORTGRASS.id; map[i][j]=0;}
			if(charmap[i][j]=='*') charmap[i][j] = CLIFFFACE.id;
			if(charmap[i][j]=='\\') charmap[i][j] = CLIFFFACE1.id;
			if(charmap[i][j]=='/') charmap[i][j] = CLIFFFACE2.id;
			string += map[i][j];
		}
		//console.log(string + "" + i);
	}
	for(i=0; i < PATHSIZE; i++){
		charmap[specs.y-1][entx+i] = MCHANGEDOWN.id*1e6+ specs.ent[i].innum*1e3+specs.ent[i].outnum;
	}
	for(i=0; i < PATHSIZE; i++){
		charmap[0][exix+i] = MCHANGEUP.id*1e6+ specs.exi[i].innum*1e3+specs.exi[i].outnum;
	}


	return {heightmap: map, map: charmap};
	}
