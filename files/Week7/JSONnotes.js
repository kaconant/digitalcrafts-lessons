// JSON stands for JavaScript Object Notation
// JSON created for computers to talk to teach other
// JSON is different from JS, but they look identical 
// XML used to be the way to do this, but older. 
// key and value used in JSON
// JWB Token - characters for login and how long before they should log out 

// Storing data:
myObj = { 'name': "John", 'age': 31, 'city': "New York" };
myJSON = JSON.stringify(myObj); // focus word: stringify -- turns into JSON from JS
localStorage.setItem("testJSON", myJSON); // setting "testJSON" as the key, myJSON as the value.

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text); // focus word: parse -- converts from JSON into JS
document.getElementById("demo").innerHTML = obj.name;

// setItem - set for local database
// getItem - get from local database
// order is typically: stringify, setItem --> getItem, parse

// JavaScript version
myObj = { 'name': "John", 'age': 31, 'city': "New York" };

// JSON version
var myJSON = '{ "name":"John", "age":31, "city":"New York" }';