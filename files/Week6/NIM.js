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

console.log("Welcome to NIMS");
console.log("The winner grabs the last pebble - begin!");

// defining player and pebbles
var playerTurn = "Player 1";
var pebbles = ["o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o"];

function printBoard() {
    // making physical pile
    console.log(pebbles);
    console.log("********");
    };

function getUserMove() {
    // asking player to choose number
    var pebbleInfo = prompt(playerTurn + ": How many pebbles would you like to remove? 1, 2, or 3? ");
        return parseInt(pebbleInfo);
}

function makeMove() {
    // taking value of number
    var takePebble = getUserMove();
    // bam opperator 
    // taking value and checking to see if it works between 1-3
    if (takePebble == 1 || takePebble == 2 || takePebble ==3) {
        for (var i=1; i <= takePebble; i++) {
            pebbles.pop();
        }
        // changes player
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
while (checkPile() === false) {
    makeMove();
}
printBoard();