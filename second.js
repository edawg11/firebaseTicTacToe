$(document).ready(init);
var ref = new Firebase('https://basetictactoe.firebaseio.com/');
var playersRef = ref.child('players');
var $nameInput = $('#nameInput');
var playerOneNameSpan = $('#playerOneName');
var playerTwoNameSpan = $('#playerTwoNameSpan'); 

function init(){
	
	$('#theButton').click(getUserName);
}

function getUserName(){
	console.log('get player name');

  playersRef.once('value', function(snapshot){
    if(!snapshot.val()){
      playersRef.push({PlayerOneName: $nameInput.val()});
      playerOneNameSpan.text($nameInput.val())
      
    }
    else if(Object.keys(snapshot.val()).length===1){
      playersRef.push({PlayerTwoName: $nameInput.val()});
      playerTwoNameSpan.text($nameInput.val())
    }
    else{
      return;
    }
  });
  startGame();
}

// function enterName(){
// 	playersRef.once('value', function(snapshot){
		

// 		// if(!snapshot.val()){
// 		// 	playersRef.push($('#nameInput').val());

// 		// }

// 		// else if(Object.keys(snapshot.val()).length===1) {
// 		// 		playersRef.push($('#nameInput').val());
				
// 		// 	} 
// 		// else {
// 		// 		return;
// 		// 		}
// 		// 		console.log(snapshot.val());
// 		// 	startGame();
// 		// })

// 	}

function startGame(){

};

