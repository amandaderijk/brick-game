var Ball = (function (){
	return{
		drawBall : function(){
	    	Config.game.beginPath();
			Config.game.arc(Config.ballX, Config.ballY, Config.ballRadius, 0, 2*Math.PI);
			Config.game.fillStyle = "black";
			Config.game.fill();
			Config.game.closePath();
		}
	}
})();