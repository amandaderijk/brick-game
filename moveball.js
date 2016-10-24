var MoveBall = (function (){
	return{
		moveBall : function () {
			Config.game.clearRect(0, 0, Config.canvas.width, Config.canvas.height);
			Elements.drawElements();
			BounceBall.bounceBall()

			// make ball move
		    Config.ballX += Config.ballDX;
		    Config.ballY += Config.ballDY;

			// reverse direction if ball hits border of canvas
		    if(Config.ballX + Config.ballDX > Config.canvas.width - Config.ballRadius 
		    	|| Config.ballX + Config.ballDX < Config.ballRadius) {
		        Config.ballDX =- Config.ballDX;
		    }
		    if(Config.ballY + Config.ballDY < Config.ballRadius ) {
		        Config.ballDY =- Config.ballDY;
		    } 
			// check if the ball has hit the brick.
			for (var i = 0; i <= Config.brickAmount; i++) {
				if(Config.ballX + Config.ballDX > Config.bricks[i].brickPosX - Config.ballRadius && 
					Config.ballX + Config.ballDX < Config.bricks[i].brickPosX + Config.brickWidth - Config.ballRadius && 
					Config.ballY + Config.ballDY > Config.bricks[i].brickPosY - Config.ballRadius &&
				 	Config.ballY + Config.ballDY < Config.bricks[i].brickPosY + Config.brickHeight - Config.ballRadius
				 	&& !Config.bricks[i].brickHit){
					
					Config.bricks[i].brickHit = true;
					Config.score += 1; // punten omhoog als geraakt
				}
			}
		}
	}
})();