/* for (a, b, c)
a = initializer // var i = 0
b = condition // i < item
c = iterator // i++

every function always has a return value.

// console.log is a behavior
// return manipulates the function

/* ex 2: function hello(name) {
    if (name === undefined) {
        name = "world";
    }
    return "Hello, " + name + "!";
    }

console.log(hello());
alert(hello()); 

function printNumbers(i, j) {
    for(var i=0; i <= j; i++) { 
    document.write(i); 
    }
}
printNumbers(2,5); */


console.log("script loaded");

function hello(name) {
    console.log( "Hello, " + name + "!");
    }

hello("Mustache");

// tip calculator

function tipAmount (tipAmount, serviceType) {
    // tipAmount is an interger/float value for a bill
    // serviceType is a string, either "bad" "fair" or "good"
    // if serviceType is bad, return 10% of tipAmount
    // if serviceType is fair, return 15% of tipAmount
    // if serviceType is good, return 20% of tipAmount

    if (serviceType === "bad") {
        return 0.1 * tipAmount;
    } else if (serviceType === "fair") {
        return 0.15 * tipAmount;
    } else if (serviceType === "good") {
        return 0.2 * tipAmount;
    }
    // Must return the tip amount based off tipAmount and serviceType
}

var tip = tipAmount(100, "fair");

console.log(tip);

// tip caulcuator 2

function totalAmount (tipAmount, serviceType) {
    // tipAmount is an interger/float value for a bill
    // serviceType is a string, either "bad" "fair" or "good"
    // if serviceType is bad, return 10% of tipAmount
    // if serviceType is fair, return 15% of tipAmount
    // if serviceType is good, return 20% of tipAmount

    if (serviceType === "bad") {
        return (0.1 * tipAmount) + tipAmount;
    } else if (serviceType === "fair") {
        return (0.15 * tipAmount) + tipAmount;
    } else if (serviceType === "good") {
        return (0.2 * tipAmount) + tipAmount;
    }
    // Must return the tip amount based off tipAmount and serviceType
}

var tip = totalAmount(100, "good");

console.log(tip);

// factor a Number
// Write a function factors which is given a number 
// and returns an array containing all its factors. 

function factors(number) {
    var array = [];

    // we need to loop through all numbers from 0 to "number"
    // and check to see if they are a factor

    for (var i=0; i <= number; i++) {
        if (number % i === 0) {
            array.push(i)
        }
    }
    return array;
}

console.log(factors(10));

// leetspeak
// Write a function leetspeak which is given a string,
// and returns the leetspeak equivalent of the string. 
// To convert text to its leetspeak version, 
// make the following substitutions

// Tic Tac Toe
// Write a function ticTacToe which takes a two-dimensional array of size 3x3. 
// Each cell in the two dimensional array can be one of 'O', 'X', or null. 
// The ticTacToe function will determine the winner by
// returning 'O' if O makes a row returning 'X' if 
// X makes a row return null if neither makes a row


var testBoard = [   ["X", null, "0"], 
                    ["X", null, "X"],
                    ["O", null, "O"]   ]; 

function ticTacToe(board) {
    
    var row1 = board[0]; // ["X", null, "0"]
    var row2 = board[1]; // ["X", null, "X"]
    var row3 = board[2]; // ["O", null, "O"]
    var col1 = [ board[0][0], board[1][0], board[2][0] ];  // ["X", "X", "O"]
    var col2 = [ board[0][1], board[1][1], board[2][1] ];  // [null, null, null]
    var col3 = [ board[0][2], board[1][2], board[2][2] ];  // ["0", "X", "O"]
    var diag1 = [ board[0][0], board[1][1], board[2][2] ]; // ["X", null, "O"]
    var diag2 = [ board[0][2], board[1][1], board[2][0] ]; // ["0", null, "O"]
    
    var winConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    for (var i=0; i < winConditions.length; i++) {

        var winConditions = winConditions[i];
        
    }
    

    var string = "" + winConditions[0] + winConditions[1] + winConditions[2];

    if (string == "XXX") {
        else if (string === "000");
    }

    if ("x wins") {
        return "X wins!";
    } else if ("O wins") {
        return "O wins!"; 
    } else { 
        return "Life is cruel"
        }
    }
    
console.log(ticTacToe(testBoard));            