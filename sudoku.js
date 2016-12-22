    //Examples 
    var easy = [0, 0, 0, 2, 6, 0, 7, 0, 1, 6, 8, 0, 0, 7, 0, 0, 9, 0, 1, 9, 0, 0, 0, 4, 5, 0, 0, 8, 2, 0, 1, 0, 0, 0, 4, 0, 0, 0, 4, 6, 0, 2, 9, 0, 0, 0, 5, 0, 0, 0, 3, 0, 2, 8, 0, 0, 9, 3, 0, 0, 0, 7, 4, 0, 4, 0, 0, 5, 0, 0, 3, 6, 7, 0, 3, 0, 1, 8, 0, 0, 0];

var easySolved = [4, 3, 5, 2, 6, 9, 7, 8, 1, 6, 8, 2, 5, 7, 1, 4, 9, 3, 1, 9, 7, 8, 3, 4, 5, 6, 2, 8, 2, 6, 1, 9, 5, 3, 4, 7, 3, 7, 4, 6, 8, 2, 9, 1, 5, 9, 5, 1, 7, 4, 3, 6, 2, 8, 5, 1, 9, 3, 2, 6, 8, 7, 4, 2, 4, 8, 9, 5, 7, 1, 3, 6, 7, 6, 3, 4, 1, 8, 2, 5, 9];


var intermediate = [0, 2, 0, 6, 0, 8, 0, 0, 0, 5, 8, 0, 0, 0, 9, 7, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 7, 0, 0, 0, 0, 5, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 8, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 9, 8, 0, 0, 0, 3, 6, 0, 0, 0, 3, 0, 6, 0, 9, 0];

var intermediateSolved = [1, 2, 3, 6, 7, 8, 9, 4, 5, 5, 8, 4, 2, 3, 9, 7, 6, 1, 9, 6, 7, 1, 4, 5, 3, 2, 8, 3, 7, 2, 4, 6, 1, 5, 8, 9, 6, 9, 1, 5, 8, 3, 2, 7, 4, 4, 5, 8, 7, 9, 2, 6, 1, 3, 8, 3, 6, 9, 2, 4, 1, 5, 7, 2, 1, 9, 8, 5, 7, 4, 3, 6, 7, 4, 5, 3, 1, 6, 8, 9, 2];


var difficult = [0, 0, 0, 6, 0, 0, 4, 0, 0, 7, 0, 0, 0, 0, 3, 6, 0, 0, 0, 0, 0, 0, 9, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 1, 8, 0, 0, 0, 3, 0, 0, 0, 3, 0, 6, 0, 4, 5, 0, 4, 0, 2, 0, 0, 0, 6, 0, 9, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0];

var difficultSolved = [5, 8, 1, 6, 7, 2, 4, 3, 9, 7, 9, 2, 8, 4, 3, 6, 5, 1, 3, 6, 4, 5, 9, 1, 7, 8, 2, 4, 3, 8, 9, 5, 7, 2, 1, 6, 2, 5, 6, 1, 8, 4, 9, 7, 3, 1, 7, 9, 3, 2, 6, 8, 4, 5, 8, 4, 5, 2, 1, 9, 3, 6, 7, 9, 1, 3, 7, 6, 8, 5, 2, 4, 6, 2, 7, 4, 3, 5, 1, 9, 8];

var levelsArr=[easy,intermediate,difficult];
var levelSol=[easySolved, intermediateSolved, difficultSolved];

    // to make the inputs grid
    var container=$('#input-container');
    function generateInput(){
    for(var i=0; i<81;i++){
        if(i%9 === 0){
            container.append('<br>');
        }
        container.append('<input id="'+ i +'" class="form-control inputSquares" maxlength="1" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57">');
    }
	}
    //to fill dump data
    var giveUpCount=0;
    function fillSol(){
    if(giveUpCount < 3){
    	$('audio')[0].play();
    	giveUpCount++;
    } else {
    var inputArr=$('#input-container input');
    for(var i=0; i<81;i++){
        inputArr[i].value=levelSol[level-1][i];
        }
    }
	}

    //to parse inputs values when a button clicked
    function parseInput(){
    	//$('#playingAlert').slideToggle();
        var inputArr=$('#input-container input');
        var tempArr=[];
        var resultArr=[];
        for(var i=0; i<inputArr.length; i++){
            if(inputArr[i].value === ""){
                tempArr.push(0);
            } else {
            tempArr.push(parseInt(inputArr[i].value));
            }
            if(tempArr.length === 9){
                resultArr.push(tempArr);
                tempArr=[];
            }
        }
        if(sudokuValidator(resultArr)){
            $('#playing').slideToggle();
            $('#finish').slideToggle();
            $('audio')[0].pause();
        	$('audio')[0].currentTime = 0;
            $('audio')[1].play();
        } else {
        	showAlertMsg();
        }
    }

    var name="Legend";
    var level=1;

    function level2(){
        level=2;
    }

    function level3(){
        level=3;
    }

    function startGame(){
        if($('#nameInput')[0].value !== ""){
            name = $('#nameInput')[0].value;
        }
        generateInput();
        fillEx();
        $('#nameTitle').text(name+"! ");
        $('#nameTitle2').text(name+"! ");
        $('#levelLabel').text(level);
        $('#welcome').slideToggle();
        $('#playing').slideToggle();
    }

    function fillEx(){
    var inputArr=$('#input-container input');
    for(var i=0; i<81;i++){
        if(levelsArr[level-1][i] !== 0){
            inputArr[i].value=levelsArr[level-1][i];
            $(inputArr[i]).attr("disabled", "true");
        }
        }
    }

    function newGame(){
        $('#finish').slideToggle();
        $('#welcome').slideToggle();
        $('#playingAlert').hide();
        level=1;
        name="Legend";
        $('#input-container').empty();
        $('audio')[1].pause();
        $('audio')[1].currentTime = 0;

    }

    function showAlertMsg(){
    	var msg="";
    	if(alertMsg["rows"].length > 0){
    		msg+=" Not valid in rows : "+alertMsg["rows"].join(", ") + " -- ";
    	}
    	if(alertMsg["rows"].length > 0){
    		msg+=" Not valid in columns : "+alertMsg["columns"].join(", ") + " -- ";
    	}
    	if(alertMsg["regions"].length > 0){
    		msg+=" Not valid in regions : "+alertMsg["regions"].join(" -- ");
    	}
    	$('#alertMsg').text(msg);
    	$('#playingAlert').slideToggle();
    	alertMsg = {"rows":[], "columns":[], "regions":[]};
    }


//Sudoku Validator

var alertMsg = {"rows":[], "columns":[], "regions":[]};
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
  			alertMsg["rows"].push(i+1);
  			return false;
  		}
	}
  	return true;
  }).length === board.length;
  //checking columns and regions
  return checkColumns(boardCopy) && regions3x3(boardCopy) && checkRows 
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
			alertMsg["regions"].push(i+1);
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
  			alertMsg["columns"].push(i+1);
  			return false;
  		}
	}
  	return true;
  }).length === 9;
}