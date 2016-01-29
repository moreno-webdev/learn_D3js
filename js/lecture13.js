d3.select('body')
	.append('svg')
	.attr('width', 500)
	.attr('height', 500)
	.style('background-color', '#cccccc')
	.append('rect')
	.attr('x', 100)
	.attr('y', 100)
	.attr('height', 300)
	.attr('width', 300)
	.style('fill', 'red');

d3.select('svg')
	.append('circle')
	.attr('cx', 250)
	.attr('cy', 250)
	.attr('r', 50)
	.attr('fill', 'yellow');

d3.select('svg')
	.append('line')
	.attr('x1', 220)
	.attr('y1', 210)
	.attr('x2', 280)
	.attr('y2', 290)
	.attr('stroke-width', 2)
	.attr('stroke', 'black');