/* for any game:

1. State - like variables --> defining the board
2. Action - like functions --> marking the board
3. Actually doing the Actions --> actually marking the board

*/

console.log("Welcome to Tic Tac Toe");

var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

var playerTurn = "X";

function positionState(row, column) {
    // row is a number between 0 - 2
    // column is a number between 0 - 2
    return board[row][column];
}

function printBoard() {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log("************");
}

function setValue(row, column) {
    board[row][column] = playerTurn;
    printBoard();
}

function playerAction() {
    var rowChoice = parseInt(prompt("Enter a row: "));
    var columnChoice = parseInt(prompt("Enter a column: "));
    if (positionState(rowChoice, columnChoice) === null) {
        setValue(rowChoice, columnChoice);
        if (playerTurn === "X") {
            playerTurn = "O"
        } else {
            playerTurn = "X"
        }
    }
}

function checkVictory() {
    var row1 = board[0]; // ["X", null, "O"]
    var row2 = board[1]; // ["X", null, "X"]
    var row3 = board[2]; // ["O", null, "O"]
    var col1 = [ board[0][0], board[1][0], board[2][0] ];  // ["X", "X", "O"]
    var col2 = [ board[0][1], board[1][1], board[2][1] ];  // [null, null, null]
    var col3 = [ board[0][2], board[1][2], board[2][2] ];  // ["O", "X", "O"]
    var diag1 = [ board[0][0], board[1][1], board[2][2] ]; // ["X", null, "O"]
    var diag2 = [ board[0][2], board[1][1], board[2][0] ]; // ["O", null, "O"]

    var winConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    for (var i=0; i<winConditions.length ; i++) {
        var winCondition = winConditions[i]; // ["X", null, "O"]
        var string = winCondition[0] + winCondition[1] + winCondition[2]; 
        if (string == "XXX") {
            return "X wins";
        } else if (string == "OOO") {
            return "O wins";
        }
    }
    return "No one wins" 
}

while (checkVictory() == "No one wins") {
    playerAction();
}
