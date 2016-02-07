// D3
var chartData = [10, 25, 20, 15, 30]
	height = 400,
	width = 400;

// Set Y Scale
var yScale = d3.scale.linear()
	.domain([0, d3.max(chartData)])
	.range([0, height]);

// Set X Scale
