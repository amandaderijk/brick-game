(function(){
	var canvas	= document.getElementById("game"),
		game	= canvas.getContext("2d"),
		paddlePosX = 425,
		paddleposY = 450,
		paddleWidth = 150,
		ballRadius = 10,
		ballX = canvas.width/2,
		ballY = canvas.height - 70,
		ballDX = 3,
		ballDY = -3,
		ballInterval = 0;

	var brickWidth = 150, 
		brickHeight = 25, 
		brickPosX = 100, 
		brickPosY = 50;


	// background
	function drawBg(){
		game.fillStyle = "lightgray";
		game.fillRect (0, 0, canvas.width, canvas.height);
	}

	// bricks 
	// kan loop gebruiken eventueel om ze aan te maken en op afstand te meten
	function drawBricks(){
		game.fillStyle = "red";
		game.fillRect (100, 50, brickWidth, brickHeight);

		game.fillStyle = "red";
		game.fillRect (300, 50, brickWidth, brickHeight);

		game.fillStyle = "red";
		game.fillRect (500, 50, brickWidth, brickHeight);

		game.fillStyle = "red";
		game.fillRect (700, 50, brickWidth, brickHeight);
	}

	// paddle
	function drawPaddle(){
		game.fillStyle = "darkblue";
		game.fillRect (paddlePosX, paddleposY, paddleWidth, 25);
	}

	// ball
	function drawBall() {
    	game.beginPath();
		game.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
		game.fillStyle = "black";
		game.fill();
		game.closePath();
	}

	// call the functions to get the elements visible
	function drawElements(){
		drawBg();
		drawBricks();
		drawPaddle();
		drawBall();
	}
	drawElements();
	// ball movement
	function moveBall() {
		// console.log('move ball');
		game.clearRect(0, 0, canvas.width, canvas.height);
		drawElements();
		bounceBall()

		// make ball move
	    ballX += ballDX;
	    ballY += ballDY;

		// check if ball is still in the canvas
	    if(ballX + ballDX > canvas.width - ballRadius || ballX + ballDX < ballRadius) {
	        ballDX = -ballDX;
	    }
	    if(ballY + ballDY < ballRadius ) {
	        ballDY = -ballDY;
	    } 
	}
	// setInterval(moveBall, 25);

	function bounceBall(){
		// make the ball bounce on the paddle 
	    if ((ballY + ballDY > paddleposY - ballRadius) && paddlePosX < ballX && ballX < paddlePosX + paddleWidth){
	    	ballDY = -ballDY;
	    }

	    // make ball drop out of the game next to paddle 
	    if (ballY + ballDY > canvas.height - ballRadius){
		    console.log("Too bad..");

		    // make ball stop & reset position
		    ballX = canvas.width/2;
			ballY = canvas.height - 70;

			// reset paddle position
			paddlePosX = 425;
			paddleposY = 450;

			clearInterval(ballInterval);
			ballInterval = 0;
			drawElements();
	    }
	}
	// paddle movement
	window.addEventListener("keydown", movePaddle, false);
	function movePaddle(key){
		switch (key.keyCode) {
			case 37: //left arrow pressed
				if (paddlePosX > 10){ // check if the paddle is still in the canvas
					paddlePosX = paddlePosX - 15; //moves the paddle to the left 

					drawElements();
				} else {
					paddlePosX = paddlePosX;
				}
				break;
			case 39: //right arrow pressed
				if (paddlePosX < 840){ 
					paddlePosX = paddlePosX + 15;
					
					drawElements();
				} else {
					paddlePosX = paddlePosX;
				}
				break;
			case 32:  //space bar pressed
				clearInterval(ballInterval); //resets the current interval to stop the ball from accelerating. 
				ballInterval = setInterval(moveBall, 25);
				break;
		}
	}
})();