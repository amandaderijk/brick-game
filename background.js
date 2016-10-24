var Background = (function (){
	return{
		drawBg : function(){
			Config.game.fillStyle = "lightgray";
			Config.game.fillRect (0, 0, Config.canvas.width, Config.canvas.height);
		}
	}
})();