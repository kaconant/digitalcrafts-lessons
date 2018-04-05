console.log("Welcome to NIM");

/* 
State - keep track of each player, just a count of pebbles
Action - remove pebbles from board (1 , 2, or 3)
Action Item

*****
2 players
16 rocks in a pile between the two players
Remove 1, 2, 3 rocks
Winner takes last rock
*/

var piles = [
    {name: "A", pebbles: "ooooo"},
    {name: "B", pebbles: "oooooo"},
    {name: "C", pebbles: "ooooo"}
]

var playerTurn = "X";

function position(group) {
    console.log("Pile " + group.name + ": " + group.circles);
    }

function printBoard() {
    console.log("********");
    piles.forEach(position);
    }

function getUserMove() {
    return prompt("How many pebbles would you like to remove? 1, 2, or 3? : ");
    }

function makeMove() {
    
}