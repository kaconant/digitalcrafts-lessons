/* Positive Numbers:  Write a function which takes an array of numbers 
as input and returns a new array containing only the positive numbers 
in the given array. */

var arr = [-3, -2, -1, 0, 1, 2, 3, 4];

function positiveNumbers(array) {
var newArray = arr.filter(function(element) {
    return element > 0;
});
}

console.log(newArray);

/* Even Numbers:  Write a function which takes an array of numbers 
as input and returns a new array containing only the even numbers 
in the given array. */

var arr = [0, 1, 2, 3, 4];

function evenNumbers(array) {
var newestArray = arr.filter(function(element) {
    return element % 2 === 0;
});
}

console.log(newestArray);

/* Square the Numbers: Write a function which takes an array 
of numbers as input and returns a new array containing result 
of squaring each of the numbers in the given array by two. 
xample: squareTheNumbers([1, 2, 3]) should give [1, 4, 9]. */

var arr = [0, 1, 2, 3, 4];

function squareNumbers(array) {
var newerArray = arr.map(function(element) {
    return element * element;
});
}

console.log(newerArray);

// Cities 1

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function cities1(array) {
    return cities.filter(function(city) {
        return city.temperature < 70.0
    });
}

/* function cities1(array) {
	return array.filter(function(item){
		return item.temperature < 70;
	});
}
*/

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

function cities2(array) {
    return cities.map(function(city) {
        return city.name;
    });
}

console.log(newestCities);

/*
function cities2(array) {
	return array.map(function(item){
		return item.name;
	});
}
*/

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

function goodJob(array) {
    array.forEach(function(element) {
        console.log("Good Job, " + element + "!")
});
}

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

function sort1(array) {
    people.sort(); 
}

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

function sort2(array) {
    people.sort(function(num1, num2) {
        return num1.length - num2.length;
    }); 
}
console.log(newestPeople);

// sort an array, 3:

var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
];

// if sum of a's number is less than the sum of b's numbre
// then a comes first. return neg number.
// if sum of b's number is less than the sum of a's numbre
// then b comes first. return pos number.
function sort3(array) {
    arr.sort(function(a, b) {
        var sum = function(acc, item) {
            return acc + item;
        }
    var aSum = a.reduce(sum, 0);
    var bSum = b.reduce(sum, 0);
    return aSum - bSum;
    });
}

console.log(arr);

// 3 times

function call3Times(fun) {
    fun();
    fun();
    fun();
}

call3Times(function) {
    console.log("Hello, world!");
}

// n times

function callNTimes(num, fun) {
    for (var i=0; i < num.length; i++) {
        fun();
    }
}

// sum an array

function sum(array) {
    return array.reduce(function(adding, currentValue) {
        return adding + currentValue;
    }, 0);
    
}

console.log(newSum);

// acronym 

function acronym(array) {
    return array.reduce(function(acc, currentVal) {
        return acc + currentVal[0];
    }, "");
}

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