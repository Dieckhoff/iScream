function game() {
	var paper = Raphael('draw');	
	setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec --> game loop
	
	//GLOBAL VARS:	
	up = 0;	
	var padel_y = 15;
	var ball_x = 500;	//needs to be random later
	var ball_y = 600;	//needs to be random later
	
	//ELEMENTS:
	var field = paper.rect(10, 10, 700, 700);
	field.attr({
		stroke: 'black',
		fill: 'white',
	});
	
	var padel = paper.rect(15, padel_y, 30, 100);
	padel.attr({
		fill: 'blue',
		cursor: 'pointer',
		opacity: 0.6,
		stroke: 'steelblue',
	});
	
	var ball = paper.circle(65, 70, 15);
	ball.attr({
		fill: 'grey',
		opacity: 0.7,
		stroke: 'none',
		cursor: 'pointer',
	});
	
	var pushup = field.click(function(){
		up = 1;
	});
	
	var ball_move = (function(ball){
		//TODO
		
	})(ball);
	
	function onTimerTick() {
	//GAME LOOP
		if ((up == 0) && (padel_y <= 620)){
			padel_y += 1;			
		}
		else if (padel_y > 650){
			padel_y = 600;	
		}
		else if (padel_y >= 30){
			padel_y -= 10;
			up = 0;
		}
		else {
			padel_y = 12;
			up = 0;
		}
		padel.animate({y: padel_y}, 1, 'linear');
		
		//ball move:
		var dx = -1;
		var dy = 1;
		if ((ball_x >= 690) || (ball_x <= 10)){
			alert("rechts"+dx+ball_x);
			dx *= -1;
			ball_x += dx;
		}
		if ((ball_y >= 690) || (ball_y <= 10)){
			alert("oben"+dy+ball_y);
			dy *= -1;
			ball_y += dy;
		}
		ball_x += dx;
		ball_y += dy;
		ball.animate({cx: ball_x, cy: ball_y}, 1, 'linear');
	};
};



