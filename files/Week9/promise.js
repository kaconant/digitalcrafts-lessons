/*

Promise factory --> spit out an object that happens to be a promise 
new Promise(function(call back function))

when created: // like .done in jQuery
in pending state

when resolved: // like .always in jQuery
in fulfilled state

when rejected: // like .fail in jQuery
in rejected state

------ ex 1: bad // all of this is the pyramid of death bc of how nestled it is ---------

    $.get('cats.com', function(cats) {
        $.get('dogs.com', function(dogs) {
            $.get('mice.com', function(mice)   
                console.log(cats);
                console.log(dogs);  
                console.log(mice);

            },  function(error) {
                console.log('couldn"t get mice: ' + error);
            })

        },  function(error) {
            console.log('couldn"t get dogs: ' + error);
        })

    },  function(error) {
        console.log('couldn"t get cats: ' + error);
    })
});

------ skeleton code for multiple promise examples: ------ 

let promise = new Promise(function(resolve, reject){
});

promise.then(function(value) {
    console.log('The promise was resolved. It has a value of' + value)
});

----- ex: 2 // resolve -------

let promise = new Promise(function(resolve, reject){
    // we need to execute code. if all was good, call resolve()
    // if something went bad, call reject()

    let sum = 2 + 2;
    resolve(sum);
});

promise.then(function(value) {
    console.log('The promise was resolved. It has a value of' + value)
});

----- ex: 3 // reject -------

let promise = new Promise(function(resolve, reject){
    // we need to execute code. if all was good, call resolve()
    // if something went bad, call reject()

    reject(new Error('Error: I automatically reject for demo purpose'))
});

promise.then(function(value) {
    console.log('The promise was resolved. It has a value of' + value)
}).catch(function(error){
    console.log(error);
});

----- ex: 4 // using AJAX // do this so they happen at once -------

let getDogImage = new Promise(function(resolve, reject){
    $.ajax({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random',
        success: function(data) {
            resolve(data);
        },
        error: function(err) {
            reject(err);
    });
});

let getAnotherDogImage = new Promise(function(resolve, reject){
    $.ajax({   
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random',
        success: function(data) {
            resolve(data);
        },
        error: function(err) {
            reject(err);
    });
});

Promise.all([getDogImage, getAnotherDogImage]).then(function(value) {      // if only one image, just reference that once by getDogImage.then(funciton(value))
    console.log('The promise was resolved. It has a value of' + value)
    console.log(value)
}).catch(function(error){
    console.log(error);
});

----- ex: 4 // using AJAX by chanining promises // do this so it happens one at a time -------

let getDogImage = new Promise(function(resolve, reject){
    $.ajax({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random',
        success: function(data) {
            resolve(data);
        },
        error: function(err) {
            reject(err)
        }
    });
});

getDogImage.then(function(value) {     
    console.log('The promise was resolved. It has a value of' + value)
    console.log(value)
    return new Promise(function(resolve, reject){
        $.ajax({   
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/image/random',
            success: function(data) {
                resolve(data);
            },
            error: function(err) {
                reject(err)
            }
        });
    });

    }).then(function(value) {
        console.log('the second promise was resolved! it has a value of' + );
        console.log(value);
    }).catch(function(error){
        console.log(error);
});

----- ex: 5 // LOL, jQuery makes it hella easier  -------

let getDogImage = $.get(https://dog.ceo/api/breeds/image/random');
});

getDogImage.then(function(value){     
    console.log('The promise was resolved. It has a value of' + value)
    console.log(value)
    return $.get('https://dog.ceo/api/breeds/image/random');

}).then(function(value){
    console.log('the second promise was resolved! it has a value of' + );
    console.log(value);
    
}).catch(function(error){
    console.log(error);
});

*/