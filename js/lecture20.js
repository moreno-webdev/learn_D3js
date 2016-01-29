/*
 * Lecture 20: Working with Events
 *
 */

var barColor = '',
	chartData = [],
	width = 500,
	height = 500,
	dataCount = 25,
	dataMax = 500;

// Set Tooltip
var tooltip = d3.select('body').append('div')
				.style('position','absolute')
				.style('background','#ccc')
				.style('opacity','0')
				.style('padding','5px 15px')
				.style('border','1px solid #000')
				.style('border-radius','10px');

// Create random array of ordinal dataCount items.
for (var i = 0; i < dataCount; i++) {
	chartData.push(Math.round(Math.random() * dataMax));
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

chart.on('click', function(data) {
	alert(data);
})
.on('mouseover', function(data) {
	barColor = this.style.fill;
	tooltip.style('opacity', 1)
			.style('left', (d3.event.pageX) + 'px')
			.style('top', (d3.event.pageY) + 'px')
			.html(data);

	d3.select(this)
		.style('opacity', 0.8)
		.style('fill', '#1f9f3d');
})
.on('mouseout', function() {
	d3.select(this)
		.style('opacity', 1)
		.style('fill', barColor);
});