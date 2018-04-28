// Part 1 - .then() chaining
// Given an array of urls:
// Use $.get() and a chain of .then() calls to fetch these URLs one by one. After each .get() is done, console log "data was fetched!"

var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
];


// ---------- Part 2 - Promise.all()
// Use Promise.all() to retreive all of the URLs above. After it's done, console log "all the data was fetched!"



// ----------- Part 3 - Resolve Reject
// Write a function called addNumbers(x, y) that returns a new Promise() that adds two numbers and resolves the answer. However, if the two inputs provided are not both numbers reject the promise. The API should work like the following:

addNumbers(x, y)
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
// To react to the dropping of toast, we have to provide callbacks for each possibility: dropping butter side up, or butter side down.

dropButteredToastOnFloor(()=>{
    alert('Whew, that was close!');
}, ()=>{
    alert('Well shucks, there goes my toast...');
});

// YOUR TASK- Write a function called dropToastPromisified(), make it return a new Promise(), and use the dropButteredToastOnFloor() function to call either resolve() or reject(). If done correctly, you should be able to run:

dropToastPromisified()
    .then(()=>{
        alert('Whew, that was close!');
    }).catch(()=>{
        alert('Well shucks, there goes my toast...');
    });