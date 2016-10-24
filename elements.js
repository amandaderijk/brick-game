var Elements = (function (){
	return{
		drawElements : function(){
			Background.drawBg();
			Bricks.drawBricks();
			Paddle.drawPaddle();
			Ball.drawBall();
			Score.drawScore();
		}
	}
})();