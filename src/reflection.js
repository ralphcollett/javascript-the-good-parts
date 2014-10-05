var flight = {
	number: 123,
	status: "DELAYED"
};

typeof flight.number; // number
typeof flight.status; // string
typeof flight.manifest; // undefined
typeof flight.toString; // function
typeof flight.constructor; // function

flight.hasOwnProperty('number'); // true
flight.hasOwnProperty('constructor'); // false as on prototype