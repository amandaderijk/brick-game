var Bricks = (function (){
	return{
		drawBricks: function(){
			var brickPosX = Config.brickPosXStart, // 70
				brickPosY = Config.brickPosYStart;

			for (var i = 0; i <= Config.brickAmount; i++) {
				Config.game.beginPath();
				Config.game.fillStyle = Config.brickColor;
				Config.game.fillRect (brickPosX, brickPosY, Config.brickWidth, Config.brickHeight);
				Config.game.closePath();
				
				// push brick positions as an object into an array
				var brickColor = Config.brickColor;
				var brickHit = Config.brickHit;

				Config.bricks.push({brickPosX, brickPosY, brickColor, brickHit});
				// console.log(bricks);
				if (Config.bricks[i].brickHit){
					Config.game.beginPath();
					Config.game.fillStyle = Config.brickColorHit;
					Config.game.fillRect (brickPosX, brickPosY, Config.brickWidth, Config.brickHeight);
					Config.game.closePath();
				};			
				
				brickPosX += 175;

				// als binnen breedte = brickPosY + brick height + 50
				if (brickPosX + Config.brickWidth >= Config.canvas.width){
					brickPosY += 50;
					brickPosX = 157;
				}
			}
		}
	}
})();