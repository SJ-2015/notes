/*
while (either Player1 nor Player2 Win) {
*/
console.log("Sanity Check: JS is working!");
var playerOneLocation =0;
var playerTwoLocation =0;

$(document).ready(function() {
	$(document).on('keypress',function(e){  
		var key =e.which;
		console.log(key);

		//set while no winner loop later
		if (key===102) {              //f = 102, if f is pressed
			console.log(e.which);
			$(".player1Border:eq("+playerOneLocation+")").removeClass("playerSquare");
			$(".player1Border:eq("+(playerOneLocation+1)+")").addClass("playerSquare");
			playerOneLocation=playerOneLocation+1;
			console.log(playerOneLocation);
		}
		if (key===108) {              //l = 108, if f is pressed
			console.log(e.which);
			$(".player2Border:eq("+playerTwoLocation+")").removeClass("playerSquare");
			$(".player2Border:eq("+(playerTwoLocation+1)+")").addClass("playerSquare");
			playerTwoLocation=playerTwoLocation+1;
			console.log(playerTwoLocation);
		}
	})
})	


function checkWinner(playerLocation) {
//


}
	