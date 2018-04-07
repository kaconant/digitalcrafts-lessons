/* Positive Numbers:  Write a function which takes an array of numbers 
as input and returns a new array containing only the positive numbers 
in the given array. */

var arr = [-3, -2, -1, 0, 1, 2, 3, 4];

var newArray = arr.filter(function(element) {
    return element > 0;
});

console.log(newArray);

/* Even Numbers:  Write a function which takes an array of numbers 
as input and returns a new array containing only the even numbers 
in the given array. */

var arr = [0, 1, 2, 3, 4];

var newestArray = arr.filter(function(element) {
    return element % 2 === 0;
});

console.log(newestArray);

/* Square the Numbers: Write a function which takes an array 
of numbers as input and returns a new array containing result 
of squaring each of the numbers in the given array by two. 
xample: squareTheNumbers([1, 2, 3]) should give [1, 4, 9]. */

var arr = [0, 1, 2, 3, 4];

var newerArray = arr.map(function(element) {
    return element * element;
});

console.log(newerArray);

// Cities 1

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

var newestCities = cities.filter(function(city) {
    return city.temperature < 70.0
});

console.log(newestCities);

// Cities 2: Write a function which takes an array of city 
// objects like the above problem as input and returns an array 
// of the cities names.

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

var newestCities = cities.map(function(city) {
    return city.name;
});

console.log(newestCities);

// good job! 

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

var newPeople = people.forEach(function(element) {
    console.log("Good Job, " + element + "!")
});

// Sort an array:
// Given an array of strings such the array of names 
// given in the previous problem, sort them by alphabetically order.

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

var newPeople = people.sort(); 
console.log(newPeople);

// Sort an array, 2 :
// Sort the same array, but not by alphabetically order, 
// but by how long each name is, shortest name first.

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

var newestPeople = people.sort(function(num1, num2) {
    return num1.length - num2.length;
}); 
console.log(newestPeople);

// sort an erray, 3:

var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
];

var sumArray = arr.sort(function(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
});

console.log(sumArray);

// 3 times

function call3Times(fun) {
    fun();
    fun();
    fun();
}

// call3Times(fun);

// n times

// callNTimes(n, fun)

// sum an array

var sum = [0 , 1 , 2 , 3 ]

var newSum = sum.reduce(function(adding, currentValue) {
    return adding + currentValue;
}, 0);

console.log(newSum);

// acronym 

var words = ["Throw", "Back", "Thursday"];
var accWords = words.reduce(function(a, b) {
    return a[0] + b[0];
});
console.log(accWords);

// Bonus: .forEach 
// Implement your own custom forEach function which takes two arguments: 
// an array arr and a function fun. 
// It will call fun passing each item in arr to fun as the first argument. 

var forEach = function(arr, callback) {
    // loop over the input array
    // call the callback on each item of the array
    for (var i=0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach([1,2,3], function(item) {
    console.log(item);
});

// Bonus .Map
// Implement your own custom map function which takes two arguments: 
// an array arr and a function fun. It will return a new array, 
// with each of its results being the result of calling fun with each array element.

var map = function(arr, callback) {
    // return new array with new info
    // each new item has to be result of callback, passing in 1 item
    var newArray = [];
    
    for (var i=0; i < arr.length; i++) {
        var item = arr[i];
        var newItem = callback(item);
        // or var newItem = callback(arr[i]);
        newArray.push(newItem);
    } 

    return newArray;
}

var result = map([1, 2, 3], function(item) {
    return item * item;
});

console.log(result);