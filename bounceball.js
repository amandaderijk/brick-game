var BounceBall = (function (){
	return{
		bounceBall : function(){
			// make the ball bounce on the paddle 
		    if ( Config.ballY + Config.ballDY > Config.paddleposY - Config.ballRadius 
		    	&& Config.paddlePosX - Config.ballRadius < Config.ballX 
		    	&& Config.ballX < Config.paddlePosX + Config.paddleWidth + Config.ballRadius
		    	&& !Config.gameOver){
		    	Config.ballDY = -Config.ballDY * 1.2;

		    }

		    // make ball drop out of the game next to paddle 
		    if (Config.ballY + Config.ballDY > Config.paddleposY){
			    Config.gameOver = true;
			}

		    // make ball stop & reset position
		    if(Config.ballY + Config.ballDY > Config.canvas.height){
				Config.ballX = Config.canvas.width/2;
				Config.ballY = Config.canvas.height - 70;

				// reset paddle position
				Config.paddlePosX = 425;
				Config.paddleposY = 450;

				// reset ball direction
				Config.ballX += Config.ballDX;
		    	Config.ballY += Config.ballDY;

				for (var i = 0; i <= Config.brickAmount; i++){
					Config.bricks[i].brickHit = false;
				}
				Config.score = 0;
				Config.ballDY = -3;

				alert("Too bad..");
				clearInterval(Config.ballInterval);
				Config.ballInterval = 0;
				drawElements();
			}
		}
	}
})();