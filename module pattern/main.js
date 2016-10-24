(function(){
	var canvas	= document.getElementById("game"),
		game	= canvas.getContext("2d"),

		paddlePosX = 425,
		paddleposY = 450,
		paddleWidth = 150,
		paddleHeight = 25,

		ballRadius = 10,
		ballX = canvas.width/2,
		ballY = canvas.height - 70,
		ballDX = 3,
		ballDY = -3,
		ballInterval = 0,

		brickWidth = 150, 
		brickHeight = 25, 
		brickPosXStart = 70, 
		brickPosYStart = 50,
		brickAmount = 8,
		brickHit = false,
		brickColor= "red",
		brickColorHit = "lightgray",
		bricks = [],

		score = 0,

		gameOver = false;
		

	// background
	function drawBg(){
		game.fillStyle = "lightgray";
		game.fillRect (0, 0, canvas.width, canvas.height);
	}

	// bricks 
	function drawBricks(){
		var brickPosX = brickPosXStart, // 70
			brickPosY = brickPosYStart;

		for (var i = 0; i <= brickAmount; i++) {
			game.beginPath();
			game.fillStyle = brickColor;
			game.fillRect (brickPosX, brickPosY, brickWidth, brickHeight);
			game.closePath();
			
			// push brick positions as an object into an array
			bricks.push({brickPosX, brickPosY, brickColor, brickHit});
			// console.log(bricks);
			if (bricks[i].brickHit){
				game.beginPath();
				game.fillStyle = brickColorHit;
				game.fillRect (brickPosX, brickPosY, brickWidth, brickHeight);
				game.closePath();
			};			
			
			brickPosX += 175;

			// als binnen breedte = brickPosY + brick height + 50
			if (brickPosX + brickWidth >= canvas.width){
				brickPosY += 50;
				brickPosX = 157;
			}
		}
		// console.log(bricks);
	}

	// paddle
	function drawPaddle(){
		game.fillStyle = "darkblue";
		game.fillRect (paddlePosX, paddleposY, paddleWidth, paddleHeight);
	}

	// ball
	function drawBall() {
    	game.beginPath();
		game.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
		game.fillStyle = "black";
		game.fill();
		game.closePath();
	}

	// get lives and score on the screen
	function drawscore(){
		game.font="18px Verdana";
		game.fillText ("score: " + score, canvas.width - 100, 25);
	}

	// call the functions to get the elements visible
	function drawElements(){
		drawBg();
		drawBricks();
		drawPaddle();
		drawBall();
		drawscore();
	}
	drawElements();

	// ball movement
	function moveBall() {
		game.clearRect(0, 0, canvas.width, canvas.height);
		drawElements();
		bounceBall()

		// make ball move
	    ballX += ballDX;
	    ballY += ballDY;

		// reverse direction if ball hits border of canvas
	    if(ballX + ballDX > canvas.width - ballRadius || ballX + ballDX < ballRadius) {
	        ballDX =- ballDX;
	    }
	    if(ballY + ballDY < ballRadius ) {
	        ballDY =- ballDY;
	    } 
		// check if the ball has hit the brick.
		for (var i = 0; i <= brickAmount; i++) {
			if(ballX + ballDX > bricks[i].brickPosX - ballRadius && 
				ballX + ballDX < bricks[i].brickPosX + brickWidth - ballRadius && 
				ballY + ballDY > bricks[i].brickPosY - ballRadius &&
			 	ballY + ballDY < bricks[i].brickPosY + brickHeight - ballRadius
			 	&& !bricks[i].brickHit){
				
				bricks[i].brickHit = true;
				score += 1; // punten omhoog als geraakt
			}
		}
	}

	function bounceBall(){
		// make the ball bounce on the paddle 
	    if ( ballY + ballDY > paddleposY - ballRadius 
	    	&& paddlePosX - ballRadius < ballX 
	    	&& ballX < paddlePosX + paddleWidth + ballRadius
	    	&& !gameOver){
	    	ballDY = -ballDY * 1.2;

	    }

	    // make ball drop out of the game next to paddle 
	    if (ballY + ballDY > paddleposY){
		    gameOver = true;
		}

	    // make ball stop & reset position
	    if(ballY + ballDY > canvas.height){
			ballX = canvas.width/2;
			ballY = canvas.height - 70;

			// reset paddle position
			paddlePosX = 425;
			paddleposY = 450;

			// reset ball direction
			ballX += ballDX;
	    	ballY += ballDY;

			for (var i = 0; i <= brickAmount; i++){
				bricks[i].brickHit = false;
			}
			score = 0;
			ballDY = -3;

			alert("Too bad..");
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
