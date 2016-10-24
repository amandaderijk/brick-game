var Paddle = (function (){
	return{
		// paddle draw
		drawPaddle : function (){
			Config.game.fillStyle = "darkblue";
			Config.game.fillRect (Config.paddlePosX, Config.paddleposY, Config.paddleWidth, Config.paddleHeight);
		}
	}
})();