/*
----var:----
var is function scoped
let is block scoped 
-- blocks: function, if, for loop, switch, plain // {} = block

----const:----
const is like var but can't change the value of the variable 
-- perfect if you dont want the value to be changed

---without arrow functions:----
var times 2 = function times2(x) {
    return x * 2;
}
or
var add = function add(x, y) {
    return x + y;
}

with arrow function:
let times2 = x => x * 2;
or
let add = (x,y) => x + y;

using this with arrow function:
functions will mess with what this is pointing to
in ES6, the fat arrow function will do the .bind() in the background to make sure that
if you call this in a function it will get passed down.

can't use arrow functions with new. 

---template strings:---
using ` (backticks) instead of '(quotes) 

let subject = `world`;
let string = `Hello, ${subject}!`; // $ helps inject



*/



