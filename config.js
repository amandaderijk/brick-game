// name of module should be with capital 
var Config = (function () {
 	var canvas	= document.getElementById("game");
		
	return {
   		canvas : canvas,
   		game : canvas.getContext("2d"),

		paddlePosX : 425,
		paddleposY : 450,
		paddleWidth : 150,
		paddleHeight : 25,

		ballRadius : 10,
		ballX : canvas.width/2,
		ballY : canvas.height - 70,
		ballDX : 3,
		ballDY : -3,
		ballInterval : 0,

		brickWidth : 150, 
		brickHeight : 25, 
		brickPosXStart : 70, 
		brickPosYStart : 50,
		brickAmount : 8,
		brickHit : false,
		brickColor: "red",
		brickColorHit : "lightgray",
		bricks : [],

		score : 0,

		gameOver : false	
    }
})();