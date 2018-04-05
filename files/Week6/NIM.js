/* 
building game logic:
State - keep track of each player, just a count of pebbles
Action - remove pebbles from board (1 , 2, or 3)
Action Item

*****
game rules:
2 players
16 rocks in a pile between the two players
Remove 1, 2, 3 rocks
Winner takes last rock
*/

console.log("Welcome to NIM");

// defining player and pebbles
var playerTurn = "Player 1";
var pebbles = ["o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o"];

function printBoard() {
    // making pile physically
    console.log(pebbles);
    console.log("********");
    };

function getUserMove() {
    // set up move
    var pebbleInfo = prompt(playerTurn + ": How many pebbles would you like to remove? 1, 2, or 3? ");
    if (pebbleInfo === "") {
        return false;
    }
    else {
        return parseInt(pebbleInfo);
    }
}

function makeMove() {
    // do move
    var takePebble = getUserMove();
    // bam opperator 
    if (checkPile() === false) {
        for (var i=0; i <= takePebble; i++) {
            pebbles.pop();
        }
        if (playerTurn === "Player 1") {
            playerTurn = "Player 2";
        } else {
            playerTurn = "Player 1";
        }
    }
    printBoard();
}

function checkPile() {
    // see if pebbles are left
    if (pebbles.length <= 3) {
        alert(playerTurn + ", you've won!")
        return true;
    }; 
    return false;
}

//call game
while (checkPile() === false && typeof getUserMove() === "number") {
    makeMove();
}