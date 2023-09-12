function knightsPath(start,end){
	const visited = new Set();
  const queue = [[start]];
  
  while(queue.length > 0){
  	const path = queue.shift();
    const [x,y] = path[path.length - 1];
    
    if(x === end[0] && y === end[1]){
    	path.forEach((item) => console.log(item));
      return path;
    }
   	
    const possibleMoves = [
      [x + 1, y + 2],
      [x - 1, y + 2],
      [x + 1, y - 2],
      [x - 1, y - 2],
      [x + 2, y + 1],
      [x - 2, y + 1],
      [x + 2, y - 1],
      [x - 2, y - 1],
    ];
    
    for(const move of possibleMoves){
    	const [newX,newY] = move;
      const newMove = [newX,newY];
      
      if(newX <= 8 && newY >= 0 && newY <= 8 && newX >= 0 && !visited.has(newMove)){
      	visited.add(newMove);
        const newPath = [...path,newMove];
        queue.push(newPath);
      }
    }
  }
}

knightsPath([0,0],[5,2])