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

// print name

console.log("script loaded");

function hello(name) {
    console.log( "Hello, " + name + "!");
    }

hello("Mustache");

// second hello


function hello(name){
    if(name) {
    console.log('Hello '+ name);
    } else{
    console.log('Hello, World!')
    }
}
hello('');
hello('Mustache');

// madlib

function madlib(name, subject) {
    return (name + 's favorite subject in school is '+ subject + '.');
}

madlib('Krissy', 'math');

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

// print numbers
// Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line:

// print 1
function printNumbers(start, end) {
    var i = start;
    while(i <= end){
        console.log(i);
        i++;
    }
}

//print 2
function printNumbersfor(start,end){
    for(var i=0;i<=end;i++){
        console.log(i);
    }
}
printNumbersfor(1,10);

//Sum of numbers
// Write a function sumNumbers which is given an array of numbers 
// and returns the sum of the numbers.

function sum(foo) {
    var result = 0;
    for(x in foo){
        result += Number(foo[x]);
    } 
    console.log(result);
}
sum([2,3,4]);

// Just the positives
// Write a function positiveNumbers which is given an array of numbers 
// and returns a new array containing only the positive numbers within the given array.

function SumPositive(numbers) {
    var positives = [];
    var sum = 0;

    for(var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
        positives.push(numbers[i]);
        } else {
        sum += numbers[i];
        }
    }

    console.log(SumPositive([1, 3, 4, 5, -7, -8]));
    return sum;
}

// Factor

function factor(num){
    for(var i = 1; i <= num; i++){
        if(num % i == 0){
        console.log(i);
    }
}
}
factor(100);

// Leetspeak

function leetspeak(theWords) {
    var leet = {"a": 4, "e": 3, "g": 6, "i": 1, "o": 0, "s": 5, "t": 7 };
    var lowerCase = theWords.toLowerCase();
    for (x in lowerCase){
    for (y in leet){
        if (lowerCase[x] == y){
            lowerCase = lowerCase.replace(lowerCase[x], leet[y])
        }
    }
}
console.log(lowerCase);
}
leetspeak('I am so cool - right?');


// Rock Paper Scissors
// Write a function rockPaperScissors which takes the throw of player 1 
// and the throw of player 2. A throw can have the values of 'rock', 'paper', 
// or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if 
// player 2 wins, and 'draw' if there is no winner.

function rockPaperScissors(player1, player2) {
    if (player1 === player2){
        console.log('draw');
        return;
    }
    if(player1 === 'rock' ){
        if(player2 === 'paper'){
            console.log('player 2');
            return;
            }else{
                console.log('player 1');
                return;
            }
        }
    if(player1 === 'paper' ){
        if(player2 === 'scissors'){
            console.log('player 2');
            return;
            }else{
                console.log('player 1');
                return;
            }
        }
    if(player1 === 'scissors' ){
        if(player2 === 'rock'){
            console.log('player 2');
            return;
            }else{
                console.log('player 1');
                return;
            }
        }
    }


rockPaperScissors('rock', 'scissors')



// Tic Tac Toe
// Write a function ticTacToe which takes a two-dimensional array of size 3x3. 
// Each cell in the two dimensional array can be one of 'O', 'X', or null. 
// The ticTacToe function will determine the winner by
// returning 'O' if O makes a row returning 'X' if 
// X makes a row return null if neither makes a row

console.log('script loaded');

var testBoard = [   
    ["X", null, "0"], 
    ["X", null, "X"],
    ["O", null, "O"]   
]; 

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

        var winConditions = winConditions[i]; // ["X", null, "O"]

        var string = "" + winConditions[0] + winConditions[1] + winConditions[2];

        if (string == "XXX") {
            return "X wins!";
        } else if (string === "000") {
            return "O wins!"; 
        } 
    }
        return "Life is cruel"
    }
    
console.log(ticTacToe(testBoard));            

/* for any game:

1. State - like variables --> defining the board
2. Action - like functions --> marking the board
3. Actually doing the Actions --> actually marking the board

var board = [
    []
    []
    []
];

var whoseTurn = "X"


*/