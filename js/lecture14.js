var chartData = [150, 300, 230, 500, 440, 120,  310],
	width = 500,
	height = 500,
	barWidth = 40,
	barOffset = 5;

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
						return data;
					})
					.attr('x', function(data, idx) {
						return idx * (barWidth + barOffset);
					})
					.attr('y', function(data) {
						return height - data;
					});