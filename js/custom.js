function game() {
	up = 0;
	setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec
	
	var padel_y_position = 15;
	var paper = Raphael('draw');

	var field = paper.rect(10, 10, 700, 700);
	field.attr({
		stroke: 'black',
		fill: 'white',
	});
	
	var padel = paper.rect(15, padel_y_position, 30, 100);
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
	
	function onTimerTick() {
		if ((up == 0) && (padel_y_position <= 620)){
			padel_y_position += 1;			
		}
		else if (padel_y_position > 650){
			padel_y_position = 600;	
		}
		else if (padel_y_position >= 30){
			padel_y_position -= 10;
			up = 0;
		}
		else {
			padel_y_position = 12;
			up = 0;
		}
		padel.animate({y: padel_y_position}, 1, 'linear');
	};
};



