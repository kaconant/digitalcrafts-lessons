console.log("Welcome to NIM!");

// STATE

var isPlayerOneTurn = true; // 1
var pebbles = 16; // 2

// ACTIONS

function takeTurn() { // 6
    var numPebblesToRemove = parseInt(prompt("How many pebbles do you want to take?")) // 7

    if (numPebblesToRemove > 0 && numPebblesToRemove < 4) { // 8
        pebbles -= numPebblesToRemove; // 10
        isPlayerOneTurn = !isPlayerOneTurn; // 11
    } else { // 9
        console.log("Enter a valid amount"); // 9
    }
}

function printBoard() { // 15
    var playerText = "One"; // 16
    if (!isPlayerOneTurn) { // 17
        playerText = "Two"; // 18
    }
    console.log("There are " + pebbles + " pebbles left"); // 13
    console.log("It's Player " + playerText + " 's turn!") // 14
}

// IMPLEMENT

while (pebbles > 0) { // 4
    printBoard(); // 12
    takeTurn(); // 5
}

console.log("Game Over! Player " + playerText + " has lost."); // 3

/* New Tricks
DeBolean's Law

if (!(userEnteredUsername && userEnteredPassword)) {
    // if user did not enter username and password
}

/* usually seem in node.js
try {
    throw - makes you see !
    // code ...
} catch {
    // backup code ...
} */