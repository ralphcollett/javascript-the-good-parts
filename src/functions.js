// A function literal - expression that defines an unnamed function
// This is a closure as it has access to the outer context
var f = function(a, b) {
	return a + b;
};


// A function on an object is a method
var myObject = {
	counter: 0,
	increment: function(inc) {
		this.counter = this.counter + inc;
	}
};