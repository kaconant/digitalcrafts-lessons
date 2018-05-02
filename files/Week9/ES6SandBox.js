/*
EX:1 --- Point
Write a class called Point, which represents a point in two-dimensional space. 
A point has x and y properties, given as arguments to its constructor.

It also has a single method plus, which takes another point 
and returns the sum of the two points, 
that is, a new point whose x is the sum of the x properties 
of the two original points, and whose y is the sum of their y properties.

should return // → Point{x: 3, y: 3}
*/

class Point {
    constructor(x, y) {
   		this.x = x;
   		this.y = y;
   }
 plus (otherPoint) {
   		return `(x: ${this.x + otherPoint.x}, y: ${this.y + otherPoint.y})`
 }
}

console.log(new Point(1, 2).plus(new Point(2, 1)))

/*
EX:2 --- Speaker Upgrade
Rewrite these two object types to use the class keyword, 
instead of direct prototype manipulation. 
Speaker is a simple type that exposes a speak method which, 
when called, logs the given text along with the speaker's name. 
Shouter is a subtype of Speaker which shouts its text and makes it uppercase.

function Speaker(name, verb) {
  this.name = name
  this.verb = verb || "says"
}
Speaker.prototype.speak = function(text) {
  console.log(this.name + " " + this.verb + " '" + text + "'")
}

function Shouter(name) {
  Speaker.call(this, name, "shouts")
}
Shouter.prototype = Object.create(Speaker.prototype)
Shouter.prototype.speak = function(text) {
  Speaker.prototype.speak.call(this, text.toUpperCase())
}

new Shouter("Dr. Loudmouth").speak("hello there")
*/

class Speaker {
	constructor(name, verb) {
		this.name = name,
		this.verb = verb || 'says'
	}

	speak(text) {
		console.log(this.name + " " + this.verb + " '" + text + "'")
	}

}

class Shouter extends Speaker {
	constructor(name, verb) {
		super(name, 'shouts'); // if take out shouts, will just use says
	}

	speak(text) {
		super.speak(text.toUpperCase());
	}

}

new Shouter("Dr. Loudmouth").speak("hello there")