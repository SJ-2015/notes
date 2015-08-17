
console.log("Sanity Check: JS is working!");
var playerOneLocation =0;
var playerTwoLocation =0;
var trackLength =8;
var winner; 

$(document).ready(function() {

		$(document).on('keypress',function(e){  
			var key =e.which;

			if (key===102) {              //f = 102, if f is pressed
				$(".player1Border:eq("+playerOneLocation+")").removeClass("playerSquare");
				$(".player1Border:eq("+(playerOneLocation+1)+")").addClass("playerSquare");
				playerOneLocation=playerOneLocation+1;
			}
			if (key===108) {              //l = 108, sif f is pressed
				$(".player2Border:eq("+playerTwoLocation+")").removeClass("playerSquare");
				$(".player2Border:eq("+(playerTwoLocation+1)+")").addClass("playerSquare");
				playerTwoLocation=playerTwoLocation+1;
				
			}
			console.log(playerOneLocation);
			console.log(playerTwoLocation);
			if ((playerOneLocation === trackLength) || (playerTwoLocation === trackLength)) {
			announceWinner(playerOneLocation,playerTwoLocation,trackLength);
		}
		})
})
	
function announceWinner(playerOneLocation,playerTwoLocation,trackLength) {
	if (playerOneLocation===trackLength) {
		winner = "Player1";
	} else if (playerTwoLocation===trackLength) {
		winner = "player2";
	}

	alert(winner + " won the game!");
	return winner;
}


	