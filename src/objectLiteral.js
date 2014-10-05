var person = {
	firstName: "Sally",
	surname: "McGrew",
	age: 67
};

for (value in person) {
	document.writeln(value);
	document.writeln(person[value]);
	document.writeln(typeof person[value]);
}

document.writeln(person.firstName);
person.surname = "NewSurname";
document.writeln(person.surname);