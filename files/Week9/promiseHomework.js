// Why use promises? 
// Per Adam:
// Checks if error from server (api) is bad! if good, send data back 
// if bad, catch error and don't let it mess up code

// ------------ Part 1 - .then() chaining. Given an array of urls:, Use $.get() and a chain of .then() calls to fetch these URLs one by one. 
// After each .get() is done, console log "data was fetched!"

var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
];

let getDogImage = $.get('https://dog.ceo/api/breed/beagle/images/random');

getDogImage
    .then(function(value) {
        console.log('Data was fetched! It has a value of')
        console.log(value)
        return $.get('https://dog.ceo/api/breed/chow/images/random');
    })
    .then(function(value) {
        console.log('Data was fetched! It has a value of')
        console.log(value)
        return $.get('https://dog.ceo/api/breed/akita/images/random');
    })
    .then(function(value) {
        console.log('Data was fetched! It has a value of')
        console.log(value)
        return $.get('https://dog.ceo/api/breed/dingo/images/random');
    })
    .then(function(value) {
        console.log('Data was fetched! It has a value of')
        console.log(value)
        return $.get('https://dog.ceo/api/breed/eskimo/images/random');
    })
    .then(function(value) {
        console.log('Data was fetched! It has a value of')
        console.log(value)
    })
    .catch(function(error) {
        console.log(error)
    });

// ---------- Part 2 - Promise.all()
// Use Promise.all() to retreive all of the URLs above. After it's done, console log "all the data was fetched!"

Promise.all([$.get('https://dog.ceo/api/breed/beagle/images/random'), $.get('https://dog.ceo/api/breed/chow/images/random'), $.get('https://dog.ceo/api/breed/akita/images/random'), $.get('https://dog.ceo/api/breed/dingo/images/random') ,$.get('https://dog.ceo/api/breed/eskimo/images/random')])
    .then((values) => {
        console.log('Data was fetched! It has a value of')
        console.log(values[0]);
        console.log('Data was fetched! It has a value of')
        console.log(values[1]);
        console.log('Data was fetched! It has a value of')
        console.log(values[2]);
        console.log('Data was fetched! It has a value of')
        console.log(values[3]);
        console.log('Data was fetched! It has a value of')
        console.log(values[4]);
    });

/* per Chris -- both work: 

var urls = [
'https://dog.ceo/api/breed/beagle/images/random',
'https://dog.ceo/api/breed/chow/images/random',
'https://dog.ceo/api/breed/akita/images/random',
'https://dog.ceo/api/breed/dingo/images/random',
'https://dog.ceo/api/breed/eskimo/images/random'
];

var a = $.get(urls[0]);
var b = $.get(urls[1]);
var c = $.get(urls[2]);
var d = $.get(urls[3]);
var e = $.get(urls[4]);

Promise.all([a,b,c,d,e]).then(function(data){console.log('data was fetched.')});
*/

// ----------- Part 3 - Resolve Reject
// Write a function called addNumbers(x, y) that returns a new Promise() that adds two numbers and resolves the answer. 
// However, if the two inputs provided are not both numbers reject the promise. 

function addNumbers(x, y) { 
    return new Promise(function(resolve,reject) {
        if (isNaN(x) || isNaN(y)) { 
            reject(new Error('This input is not a number'));     
        } else {
            resolve(x + y); 
        }
    });
};

// adam provided following code: 

addNumbers(3 , 7) // "x" -- > will cause the reject to happen
    .then(function (answer) {
    console.log(answer);
    })
    .catch(function (error) {
    console.log(error);
    });

// ------------ Part 4 - Promisify (challenge question!)
// The function below uses callbacks to report the result of dropping buttered toast on the floor.

let dropButteredToastOnFloor = (success, failure) => {
let drop = Math.random();
if (drop < 0.5) {
    console.log("Landed butter-side up!");
    success();
} else {
    console.log("Landed butter-side down...");
    failure();
}
}
// To react to the dropping of toast, we have to provide callbacks for each possibility: 
// dropping butter side up, or butter side down.

dropButteredToastOnFloor(()=>{
    alert('Whew, that was close!');
}, ()=>{
    alert('Well shucks, there goes my toast...');
});

// YOUR TASK- Write a function called dropToastPromisified(), make it return a new Promise(), 
// and use the dropButteredToastOnFloor() function to call either resolve() or reject(). 

function dropToastPromisified() { 
    return new Promise(function(resolve, reject) {
        if (drop < 0.5) {
            alert('Whew, that was close!');
            resolve();
        } else {
            alert('Well shucks, there goes my toast...');
            reject();
        }
    });
};

// If done correctly, you should be able to run:

dropToastPromisified()
    .then(()=>{
        alert('Whew, that was close!');
    }).catch(()=>{
        alert('Well shucks, there goes my toast...');
    });