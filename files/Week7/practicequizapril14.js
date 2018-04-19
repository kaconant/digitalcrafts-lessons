// QUESTION 1 *****************
var array = [{foo: "bar"}, {foo: [1, 2]}]; // foo:bar is first current item (first loop), foo: 1,2 is second current item (second loop)

array.forEach(function(currentItem) {
    console.log(currentItem.foo);
    console.log(currentItem.foo[0]);
})

// what 4 items will be logged in order?
//1: 
"bar"
//2: 
"b" // referencing the string "bar" like it's an array. would pull out b as it's the 0 position.
// 3: 
[1,2]
// 4: 
1 // referencing the second currentItem loop at position 0

// QUESTION 2 *****************
$("a").on("click", function(e) {
    e.preventDefault(); // given the following a tag, how do we prevent the website from navigating to another page? --- e.preventDefault();
});

// QUESTION 3 *****************
<div class="myDiv">inner text </div>

// Use jQuery to select the div
$(".myDiv")

// Use jQuery to get the text inside the div
$(".myDiv").html();

// Use jQuery to change the text inside the div to "hi"
$(".myDiv").html("hi");

// Use jQuery to create a new div that looks like the given div
$("<div class='myDiv'> inner text </div>");

// QUESTION 4 *****************
var object = {
a: {
    "1) data": [1, 2, 3],
    "2) data": true
},
b: [
    {
        name: "Adam"
    },
    {
        name: "Also Adam"
    }
],
c: 50
};

// Access 50?
object.c;

// Access "Also Adam"?
object.b[1].name;

// Access 3?
object.a["1) data"][2];

// Access true?
object.a["2) data"];