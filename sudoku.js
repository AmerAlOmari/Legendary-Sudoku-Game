//Sudoku Game

//Validator
function sudokuValidator(board){
	// to take copy of array so sorting the array doesnt affect the original array
  var boardCopy=board.map(function(arr) {
    return arr.slice();
});
  //checking the rows by sorting array and comparing numbers to index+1
  var checkRows=board.filter(function(elem, i){
  	elem.sort((a,b) => a-b);
  	for(var ind=0; ind<elem.length; ind++){
  		if(elem[ind] !== (ind+1)){
  			return false;
  		}
	}
  	return true;
  }).length === board.length;
  //checking columns and regions
  return checkColumns(boardCopy) && regions3x3(boardCopy) && checkRows ? "Finished!" : "Try again!"
}

function regions3x3(arr){
	var regionStrings=[];
	//converting every region to a string through 1 loop
	for(var i=0; i<3; i++){
		regionStrings.push(arr[0].splice(0,3).join("") + arr[1].splice(0,3).join("") + arr[2].splice(0,3).join(""));
		regionStrings.push(arr[3].splice(0,3).join("") + arr[4].splice(0,3).join("") + arr[5].splice(0,3).join(""));
		regionStrings.push(arr[6].splice(0,3).join("") + arr[7].splice(0,3).join("") + arr[8].splice(0,3).join(""));
	}
	//checking if there is identical regions, by checking if there are equal strings
	for(var i=0; i<regionStrings.length-1; i++){
		var temp=regionStrings.shift();
		if(regionStrings.indexOf(temp) > -1){
			return false;
		}
	}
	return true;
}

function checkColumns(arr){
	var columnStrings=[];
	//converting every column to a string through 1 loop
	for(var i=0; i<9; i++){
		columnStrings.push(arr[0][i].toString() + arr[1][i].toString() + arr[2][i].toString() + arr[3][i].toString() + arr[4][i].toString() + arr[5][i].toString() + arr[6][i].toString() + arr[7][i].toString() + arr[8][i].toString());
	}
	//checking if there is identical regions, by checking if there are equal strings
	//and comparing the result array of filter function to original length
  return columnStrings.filter(function(elem, i){
  	elem=elem.split("");
  	elem.sort((a,b) => a-b);
  	for(var ind=0; ind<elem.length; ind++){
  		if(parseInt(elem[ind]) !== (ind+1)){
  			return false;
  		}
	}
  	return true;
  }).length === 9;
}