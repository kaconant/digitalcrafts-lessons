console.log("Callback Practice");

var add = function(num1, num2) {
    return num1 + num2;
}

var subtract = function(num1, num2) {
    return num1 - num2;
}

/* var calculate = function(num1, num2, operation) {
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "subtract")
        return num1 - num2;
} -- long version */

var calc = function(num1, num2, operation) {
    return operation(num1, num2); // operation is callback function in this case
}

calculate(1,2,function(num1, num2) {
    return "" + 1 + 2;
});

var array = [1,2,3];

var newArray = array.map(function(currentValue, index, array){
    return currentValue * 3;
});

console.log(array);
console.log(newArray);


/* forEach: it's just loops through the items in an object/array, 
with single-step increments, and does nothing apart from that.
map: It loops through the items in an obj/array, alongside, 
it allows the user to work on the individual indexed items 
and RETURNS a new array which has the expected output. 
i.e it takes the input array to project a new array with the expected output. */