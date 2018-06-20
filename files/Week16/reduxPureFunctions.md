# Example of Impure Function

let myObj = {
    foo = "bar"
}

let otherObj = myObj;
otherObj.foo = "not bar";

- This is not a great way to do it, as it's actually changing the original foo to say not bar in JS. Passed by reference.

# Pure vs Impure

- Pure: The output that it generates is solely based on input parameters 
- Inpure: Same input provides different output, as relies on information like variables or data that is outside of the function

- Pure: Does not mutates input or variablaes outside of their scope 
- Impure: Creates side effects to outside scope by mutating (often see by using the = )

- You need both pure and impure data for most applications. But Redux and React must work with pure functions. 

# History of State

- Must be able to have pure reducers to have confidence in the history of state

# Arrays in Mutation

- Arrays are easy to mutate
- Impure version: push, pop, splice, [1], 
- Pure version: concat (like push), slice (copy array), reduce, map, filter, [0]

# Objects in Mutation

- can't change keys, can't delete keys
- var copy = Object.assign({}, state); // treats 1st argument as scratchpad as it will be the only key value pairs that is maninpulated. by having the first object be empty allows you to have a work around that you can refer to.

# Spread Method to Avoid Impure
- Spread (...)

- Example 1 (array):

function copyArray(array) {
    let newArray = [
        ...array; // instead of manually putting in all of the original array information
    ]
}

- Example 2 (object):

var myObject = {
    foo: "bar",
    biz: "baz"
}

var newObject = {
    ...myObject
}
// OLD VERSION: Object.assign({}, myObject);

- Example 3 (deep level - the trick is that you need to be explicit all the way down and have specific keys):

var state = {
    homePage: {
        menuExpanded: true,
        visibleItems: [
            {

            }
        ]
    }
}

var stateCopy = {
    homePage: {
        ...state.homePage, 
        visibleItems: [...state.homePage.visibleItems]
    }
}

- Example 4 (Update an array)

function updateArray(array, someIndex) {
    let newArray = [
        ...array.slice(0, someIndex),
        100,
        ...arry.slice(someIndex + 1)
    ]
}