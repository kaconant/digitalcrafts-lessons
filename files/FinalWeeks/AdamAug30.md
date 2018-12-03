# Whiteboarding and Interview Prep

* Why? Demonstrates how you actually problem solve and also how good you are at communicating technical concepts.

## Basics

### Data Structures

* Linked Lists
* Binary Trees
* Tries
* Stacks
* Querues
* Vectors / ArrayLists
* Hash Tables

### Algorithms

* Breadth First Search
* Depth First Search
* Binary Search
* Merge Sort
* Quick Sort
* Tree Insert / Find 

### Concepts

* Bit Manipulation
* Singleton Design Pattern
* Factory Design Pattern
* Memory (Stack vs Heap)
* Recursion
* Big-O Time

## Strategies for Success

* Ask clarifying questions about the problem 
* Talk out loud as you're thinking even if it's just speculation
* Think of weird edge cases they may break your code
* If the interviewer thinks that there is a bug, don't rush to just randomly change lines. Just try to debug in your head to find the bug.
* Think of the algorithm and write it out in pseudo code
* Borrow solutions from easier problems 

### Problem 1

* Imagine you get an array of numbers that are sorted from least to greatest. Write a function that takes in a specific number and then responds with what index in that array it should go. 

var array = [1,2,3]

function level0(array, numToFind) {
  for (var i=0, i < array.length, i++) {
    if (array[i] === numToFind) {
      return(i);
    } 
      return "not found"
  }
}

* What Big-O category does this fall into? O(n)

* What if the interviewer was like "Hey, can you do O(log n)"? (Take the array and look for a number. If not, take the middle of the left or the middle of the right)

var array = [1, 2, 3, 4, 9, 11, 21, 30]

function level1(array, numToFind) {
  var arrayToDivide = array;

  while(length(arrayToDivide) > 0) {
    var middleIndex = arrayToDivide.length / 2 ;
    var middleNum = arrayToDivide[middleIndex];

    if (middleNum = numToFind) {
      return middleIndex + offset
    } else if (middleNum < numToFind {
      arrayToDivide[middle -> [end]]
    } else { 
      arrayToDivide = arrayToDivide[0] -> [middle]
    }

  }
}

* This example does have bugs but it shows understanding (dividing by 2 in array of 2 would break)

* What if the array wasn't sorted in order but half way, such as [4, 8, 9, 0, 1, 2]?

* When you are reviewing your subsections, the left side is greater than the right side - tells us that the change happens in the middle of the bracket. 


### Problem 2

* Write an algorithm that will take in a string and return something that tells me how many times each letter shows up? 

ex: 'Hello, my name is Krissy.'

let countChars(c) {
  let charArray = {}

  for (let i = 0; i < c.length; i++) {

    if (charArray[c[i]]) {
      charArray[c[i]] ++
    } else {
      charArray[c[i]] = 1
    }
    
  } 
  return charArray;
}