// Variables
var string1 = "Hey, I’m a string!";
var string2 = 'Hey, me too!';
var string3 = 'Hey, don\'t forget me!'
var number = 42;
var float = 42.2;
var array = [1, 2, 3, 'four'];
var object = {
   key1: 'value1',
   key2: 'value2'
};
var boolean1 = true;
var boolean2 = false;

// Operators
var sum = 1 + 1;
var subtract = 1 - 1;
var multiply = 2 * 2;
var divide = 4 / 2;
var remainder = 7 % 3; // read as "7 mod 3", understood as "the remainder of 7 divided by 3"
var and = true && false; // evaluates to false
var or = true || false; // evaluates to true
var not = !true; // evaluates to false
sum++; // Will increment the value of sum by 1
sum--; // Will decrement the value of sum by 1
sum += 3; // Will increment the value of sum by 3
sum -= 3; // Will decrement the value of sum by 3
var concatenation = "I have" + " 10 toes"; // Will smush two strings together
var concatenation = "I have " + 10 + " fingers."; // Will turn '5' into a string and add it to the start/end of the string

// Conditionals
if (someCondition) {
  // Do something
} else if (anotherCondition) {
  // Do another thing
} else {
  // Whatever, do this thing, I don't care
}

// For loop
for (var i=0; i<10; i++) {
   console.log( 'hi' + i );
}

// While loop
while (array.length > 2) {
   array.pop();
}

// Functions
function myFunction(parameter) {
   return parameter + 1;
}
var anonymous = function() {
   return "I’m anonymous";
}

// Utility functions
console.log('hi'); // will log 'hi' to the terminal window (View -> Developer -> Developer Tools)
// alert('hi') // will display 'hi in a popup. 
// var input = prompt('type something'); // will display 'type something' in a popup with a textbox, the text in the textbox is saved to 'input'
array.pop(); // Will remove the last element of the array
array.push(variable); // Will add variable to the end of the array
array.length; // tells you how many elements are in an array
parseInt('42'); // Will take a string and attempt to turn it into an integer
parseFloat('42.001'); // Will take a string and attempt to turn it into a floating point number