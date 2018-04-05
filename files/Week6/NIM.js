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

var piles = [
    // defining 3 piles
    {name: "A", pebbles: "ooooo"},
    {name: "B", pebbles: "oooooo"},
    {name: "C", pebbles: "ooooo"},
    
]
// defining player
var playerTurn = "Player 1";

function printBoard() {
    // making pile physically
    console.log("********");
    piles.forEach(function (pebble) {
        console.log("Pile " + pebble.name + ": " + pebble.pebbles);
    });
    }

function getUserMove() {
    // set up move
    var pebbleInfo = parseInt(prompt(playerTurn + ": How many pebbles would you like to remove? 1, 2, or 3? "));
    return pebbleInfo;    
}

function makeMove() {
    // do move
    var takePebble = getUserMove();
    if 
}

function checkPile() {
    // see if pebbles are left
    var winConditions = 1;
    for (var i=0; i < piles.length; i++)
}

//call game
checkPile();