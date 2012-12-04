function game() {

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
	});
	
	var start = padel.click(function() {
		padel.animate({y: 600}, 10000, 'linear');
	});
	
	var pushup = ball.click(function(){
		padel.stop(start);
		//alert(padel.status(start));
		if (padel_y_position >= 15){
		alert(padel_y_position);
			padel_y_position = padel_y_position - 15;
		}
		else {
			padel_y_position = 15;
		}
		padel.animate({y: padel_y_position}, 1000, 'linear');
	});
	padel.resume(start);
};