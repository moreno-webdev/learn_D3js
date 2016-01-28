var chartData = [250, 100, 750, 500, 440, 120, 310, 600],
	width = 500,
	height = 500,
	barWidth = 40,
	barOffset = 5;

// Set Y Scale
var y = d3.scale.linear()
			.domain([0, d3.max(chartData)])
			.range([0, height]);

var chart = d3.select('#chart').append('svg')
				.attr('width', width)
				.attr('height', height)
				.style('background-color', '#f9f9f9')
				.selectAll('rect')
				.data(chartData)
				.enter().append('rect')
					.style('fill', 'steelblue')
					.attr('width', barWidth)
					.attr('height', function(data) {
						return y(data);
					})
					.attr('x', function(data, idx) {
						return idx * (barWidth + barOffset);
					})
					.attr('y', function(data) {
						return height - y(data);
					});