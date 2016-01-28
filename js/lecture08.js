var d3Module = (function() {

	var numbers = [10, 20, 30, 40, 50, 60, 70];

	function d3Init() {
/*
		d3.selectAll('.item')
			.data(numbers)
			.text(function(data) {
				return 'I am number ' + data;
			});

		d3.selectAll('.item')
			.data(numbers)
			.style('font-size', function(data) {
				return data + 'px'
			});
*/	
		var li = d3.select('ul').selectAll('li')
			.data(numbers)
			.text(function(data) {
				return 'I am number ' + data;
			});

		li.enter().append('li')
			.text(function(data) {
				return 'I am number ' + data;
			});

		li.exit().remove();
	}

	// Explicitly return public methods when this object is instantiated
	return  {
		init: d3Init
	}
})();

d3Module.init();