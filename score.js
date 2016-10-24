var Score = (function (){
	return{
		drawScore : function(){
			Config.game.font="18px Verdana";
			Config.game.fillText ("score: " + Config.score, Config.canvas.width - 100, 25);
		}
	}
})();