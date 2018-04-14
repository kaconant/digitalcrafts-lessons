// question 1 ***************
// pass by value = has 2 different locations (primitives: booleans, strings, numbers) -- global scope
// pass by reference = has the same location (in functions, objects) -- local scope (messes with global scope)

// question 2 ***************
var a = 1; 
function myFunction() {
    var a = 3;
    console.log(a);
}
console.log(a); // = 1
myFunction(); // = 3

// question 3 ***************
var people = [
    {name: "Sharon", age: 29},
    {name: "Kyle", age: 21},
    {name: "Nicole", age: 22}
];

var myFunction = function(inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i].name); // == loop will go thru 3 times, and will look at the name property. can also be people[i].name
    }
};

myFunction(people);

// question 4 ***************
var object = {
    "1) data" : "correct"
};
// how do you access correct?
// object["1) data"];
// don't use --> object.1) data --> the space confuses JS --> if just word data, could have used the .

// question 5 ***************
// to get anything on the dom with jQuery, have to use $ -- have to pass in string that looks like css selector
    // to empty h1 tag --> $("h1").empty()
    // get text inside of p with class of "para" --> $(".para").text();
    // add a new p tag with the text hi to paragraph wrapper --> $("#paragraph-warpper").append("<p>hi</p>");

// question 6 **************
var array = [0,1,2,3];

for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
};

// how to make forEach instead of for loop
//      array.forEach(function(currentItem)) {
//          console.log(currentItem);
//      });
// can't be console.log(array[i]) bc [i] no longer exists