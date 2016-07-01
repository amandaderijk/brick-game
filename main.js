window.onload = function(){
	var canvas	= document.getElementById("game"),
		game	= canvas.getContext("2d"),
		paddlePosX = 400,
		paddleposY = 450,
		ballRadius = 10,
		ballX = canvas.width/2,
		ballY = canvas.height-30,
		ballDX = 3,
		ballDY = -3;

	// background
	function drawBg(){
		game.fillStyle = "lightgray";
		game.fillRect (0, 0, canvas.width, canvas.height);
	}

	// bricks 
	function drawBricks(){
		game.fillStyle = "red";
		game.fillRect (100, 50, 150, 25);

		game.fillStyle = "red";
		game.fillRect (300, 50, 150, 25);

		game.fillStyle = "red";
		game.fillRect (500, 50, 150, 25);

		game.fillStyle = "red";
		game.fillRect (700, 50, 150, 25);
	}

	// paddle
	function drawPaddle(){
		game.fillStyle = "darkblue";
		game.fillRect (paddlePosX, paddleposY, 150, 25);
	}

	// ball
	function drawBall() {
    	game.beginPath();
		game.arc(ballX, ballY, 10, 0, 2*Math.PI);
		game.fillStyle = "black";
		game.fill();
		game.closePath();
	}

	// call the functions to get the elements visible
	drawBg();
	drawBricks();
	drawPaddle();
	drawBall();

	// ball movement
	// window.addEventListener("keydown", moveBall, true);
	// space is key 32 
	function moveBall() {
		game.clearRect(0, 0, canvas.width, canvas.height);
		drawBg();
		drawBricks();
		drawBall();
		drawPaddle();

		// check if ball is still in the canvas
	    if(ballX + ballDX > canvas.width-ballRadius || ballX + ballDX < ballRadius) {
	        ballDX = -ballDX;
	    }
	    if(ballY + ballDY < ballRadius || ballY + ballDY > canvas.height-ballRadius) {
	        ballDY = -ballDY;
	    } 
	    // else if (ballY + ballDY > canvas.height-ballRadius) {
	    // 	alert("Too bad..")
	    // }
	    // if (ballY + ballDY > paddleposY-ballRadius){
	    // 	ballDY = -ballDY;
	    // }

	    //make ball move
	    ballX += ballDX;
	    ballY += ballDY;
	}
	setInterval(moveBall, 25); 	

	// paddle movement
	window.addEventListener("keydown", movePaddle, false);
	function movePaddle(key){
		switch (key.keyCode) {
			case 37:
				if (paddlePosX > 10){
					paddlePosX = paddlePosX - 15; //moves the paddle to the left 

					drawPaddle();
				} else {
					paddlePosX = paddlePosX;
				}
				break;
			case 39:
				if (paddlePosX < 840){ // check if the paddle is still in the canvas
					paddlePosX = paddlePosX + 15; //moves the paddle to the right 
					
					drawPaddle();
				} else {
					paddlePosX = paddlePosX;
				}
				break;
		}
	}
};