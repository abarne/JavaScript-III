/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: When in the global scope, the value of “this” will be the window/console 
* 2. Implicit binding: when a function is called by a preceding dot, "this" is the object before that dot
* 3. new binding: when a constructor function is used, "this" refers to that instance of the object that is created by the constructor
* 4. explicit binding: when using call or apply methods, "this" is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello(hi) {
	console.log(this);
	return hi;
}

// Principle 2

// code example for Implicit Binding
const aboutMe = {
	name: 'Adam',
	sayHi: function() {
		return `Hello, my name is ${this.name}`;
	}
};

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
	this.greeting = 'Hello ';
	this.greeter = greeter;
	this.speak = function() {
		console.log(this.greeting + this.greeter);
		console.log(this);
	};
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding

function ghost() {
	console.log(this.boo);
}

let myGhost = {
	name: 'Casper',
	boo: 'booooo!'
};

ghost.call(myGhost); // invoking the function here
