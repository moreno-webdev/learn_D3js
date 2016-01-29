/*
 * D3 Transitions and Animation
 *
 */

var shape = d3.select('#shape').append('svg')
				.attr('width', 500)
				.attr('height', 500)
				.style('background', '#f4f4f4');

repeat();

function repeat() {

	shape.append('rect')
	.attr('x', 0)
	.attr('y', 0)
	.attr('width', 200)
	.attr('height', 200)
	.style('fill', 'red')
	.transition()
		.delay(2000)
		.duration(1000)
		.ease('elastic')
		.attr('x', 300)
		.style('fill', 'blue')
	.transition()		
		.attr('y', 300)
		.style('fill', 'green')
	.transition()
		.attr('x', 0)
		.style('fill', 'yellow')
	.transition()
		.attr('y', 0)
		.style('fill', 'red')
	.transition()
		.attr('width', 500)
		.attr('height', 500)
	.transition()
		.attr('width', 200)
		.attr('height', 200)
		.remove()
	.each('end', repeat);
}
