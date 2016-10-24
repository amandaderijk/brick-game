var MovePaddle = (function (){
	return{
		movePaddle : function(key){
			switch (key.keyCode) {
				case 37: //left arrow pressed
					if (Config.paddlePosX > 10){ // check if the paddle is still in the canvas
						Config.paddlePosX = Config.paddlePosX - 15; //moves the paddle to the left 

						Elements.drawElements();
					} else {
						Config.paddlePosX = Config.paddlePosX;
					}
					break;
				case 39: //right arrow pressed
					if (Config.paddlePosX < 840){ 
						Config.paddlePosX = Config.paddlePosX + 15;
						
						Elements.drawElements();
					} else {
						Config.paddlePosX = Config.paddlePosX;
					}
					break;
				case 32:  //space bar pressed
					clearInterval(Config.ballInterval); //resets the current interval to stop the ball from accelerating. 
					Config.ballInterval = setInterval(MoveBall.moveBall, 25);
					break;
			}
		}
	}
})();