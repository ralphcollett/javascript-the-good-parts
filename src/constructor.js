var Quo = function (string) {
	this.status = string;
};

Quo.prototype.get_status = function
( ) {
	return this.status;
}

var myQuo = new Quo("confused");
myQuo.get_status()