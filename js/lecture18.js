//var chartData = [250, 100, 750, 500, 440, 120, 310, 600],
var chartData = [],
	width = 500,
	height = 500,
	dataCount = 25,
	dataMax = 500;
	// barWidth = 40,
	// barOffset = 5;

// Create random array of ordinal dataCount items.
for (var i = 0; i < dataCount; i++) {
	chartData.push(Math.random() * dataMax);
}

// Set Y Scale
var y = d3.scale.linear()
			.domain([0, d3.max(chartData)])
			.range([0, height]);

// Set X scale
var x = d3.scale.ordinal()
			.domain(d3.range(0, dataCount))
			.rangeBands([0, width], 0.1, 0);

// Set Color scale
var  colors = d3.scale.linear()
				.domain([0, dataCount])
				.range(['#6ba6d8', '#1e405d']);

var chart = d3.select('#chart').append('svg')
				.attr('width', width)
				.attr('height', height)
				.style('background-color', '#f9f9f9')
				.selectAll('rect')
				.data(chartData)
				.enter().append('rect')
					.style('fill', function(data, idx) {
						return colors(idx);
					})
					.attr('width', x.rangeBand())
					.attr('height', function(data) {
						return y(data);
					})
					.attr('x', function(data, idx) {
						return x(idx);
					})
					.attr('y', function(data) {
						return height - y(data);
					});