var d3Module = (function() {

	var colors = ['red', 'blue', 'green', 'yellow', 'orange'];

	var styles = [
		{
			'bgColor': 'red',
			'color': 'white',
			'width': 25
		},
		{
			'bgColor': 'blue',
			'color': 'white',
			'width': 8
		},
		{
			'bgColor': 'green',
			'color': 'white',
			'width': 30
		},
		{
			'bgColor': 'yellow',
			'color': 'gray',
			'width': 12
		},
		{
			'bgColor': 'orange',
			'color': 'white',
			'width': 25
		},
	]

	function d3Init() {
/*
		var li = d3.selectAll('.item')
					.data(colors)
					.style('color', 'grey')
					.style('background-color', function(colors) {
						return colors;
					});

		d3.selectAll('.item')
			.data(colors)
			.style({
				'font-size': '24px',
				'list-style': 'none',
				'margin': '5px',
				'padding': '10px',
				'background-color': function(colors) {
					return colors;
				}
			});
*/
		var li = d3.selectAll('.item')
					.data(styles)
					.style({
						'font-size': '24px',
						'list-style': 'none',
						'margin': '5px',
						'padding': '10px',
						'background-color': function(styles) {
							return styles.bgColor;
						},
						'color': function(styles) {
							return styles.color;
						},
						'width': function(styles) {
							return styles.width + '%';
						}
					});

	}

	// Explicitly return public methods when this object is instantiated
	return {
		init: d3Init
	};

})();

d3Module.init();