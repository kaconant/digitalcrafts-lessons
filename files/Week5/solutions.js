/* 
Example 1 - How to do specific Function...
function averageOpen() {
    var sum = 0;
    var days = Object.keys(stocks);
    for (var i = 0; i < days.length; i++) {
        var currentDay = days[i];
        var statsForAGivenDay = stocks[currentDay]; // as it's not a key value pair, it's an object inside a variable
        // var statsForAGivenDay = stocks[days[i]]; combo of code above
        var openValue = parseFloat(statsForAGivenDay["1. open"]); // for this object, lets extract and grab this key // parseFloat = turns into number from string // can also use Number
        sum = sum + openValue;
    }
    // divide sum by number of days
    var average = sum / days.length;
    return average;
}
console.log(averageOpen());

Example 2 - How to do specific Function that will work for all...
// use your parameters to manipulate for multiple fuctions
var average = function(valueOfInterest) { 
    var sum = 0;
    var days = Object.keys(stocks);

    for(var i = 0; i < days.length; i++) {
        var currentDay = days[i];
        var statsForAGivenDay = stocks[currentDay];
        var value = parseFloat(statsForAGivenDay[valueOfInterest]);
        sum = sum + value;
    }
    var average = sum / days.length;
    return average;
}

console.log(average("1. open"));
console.log(average("2. high"));

Example 3 - How do to function that will work for all with forEach function
var average = function(valueOfInterest) { 
    var sum = 0;
    var days = Object.keys(stocks);

    }
    days.forEach(function(currentDay) {
        var statsForAGivenDay = stocks[currentDay];
        var value = parseFloat(statsForAGivenDay[valueOfInterest]);
        sum = sum + value;
    });

    var average = sum / days.length;
    return average;
}

console.log(average("1. open"));
console.log(average("2. high"));

/*
Map vs forEach --> map will build you a new array


// forEach function
function forEach(callback) {
    for (var i = 0; i < this.length; i++) {
        var currentThing = this[i];
        callback(currentThing);
    }
}
*/
// Write a function that products an array of objects that includes the date open and close.

function arrayOfObjects() {
    var days = Object.keys(stocks);
    var array = [];

    days.forEach(function(currentDay){
        var statsForAGivenDay = stocks[currentDay];
        var currentDateOpenClose = {
            date: currentDay,
            open: statsForAGivenDay["1. open"],
            close: statsForAGivenDay["4. close"] 
        };
    array.push(currentDateOpenClose);
    });
    return array;
}

console.log(arrayOfObjects());