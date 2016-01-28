// Color heading red
d3.select('h1')
	.text('Selected')
	.style('color', 'red');

// Color even list items green
d3.selectAll('.item:nth-child(2n)')
	.style('color', 'green');

// Append bolded text with unique color to odd list items
d3.selectAll('.item:nth-child(odd)')
	.append('strong').html(' - Selected')
	.style('color', '#E9AB17');

// Add new list item into third position with class 'item'
d3.select('#items')
	.insert('li', ':nth-child(3n)')
	.classed('item', true)
	.html('This is a new item');

// Remove heading
/*
d3.select('h1').remove();
*/

// Overwrite with class 'heading' to H1
/*
d3.select('h1')
	.attr('class', 'heading');
*/

// Add additional class 'heading' to H1
d3.select('h1')
	.classed('heading', true);