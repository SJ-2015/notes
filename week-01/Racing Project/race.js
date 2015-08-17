/*image of horse
http://www.clipartbest.com/cliparts/dir/M4q/dirM4q4i9.jpeg
Image of car:
http://media.caranddriver.com/images/media/51/dissected-lotus-based-infiniti-emerg-e-sports-car-concept-top-image-photo-451994-s-original.jpg
fff1 function moveForward //remove currentsquare, put green on next one

while (either Player1 nor Player2 Win) {
if pressing F (for player 1), or press L for player 2, then execute below
var step = 0;
$(".player1Border:eq(step)").removeClass("playerSquare")
$(".player1Border:eq(step+1)").addClass("playerSquare")
step++;
http://keycode.info/    ==> keycode info (f=70; l=76)
}
/*function CheckNoWinner() 
var winner;
return no winner = true; 
*/
console.log("Sanity Check: JS is working!");

$(document).ready(function() {
var step=0;

$(document).on('keypress',function(e){  
var key =e.which;
console.log(key);
//set while no winner loop later
	if (key===102) {              //f = 102, if f is pressed
		console.log(e.which);
		$(".player1Border:eq(0)").removeClass("playerSquare");
		$(".player1Border:eq(1)").addClass("playerSquare");
	
	}


})




})
