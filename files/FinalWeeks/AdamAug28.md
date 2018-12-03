# Computer Science Notes

## Transistors

* Transistors are your computer's atoms : doors in your circuitry that allow/prevent current to pass through.

* Transistors (open or closed) = Bits (1 or 0)

* Transistors are used to make "gates" (aka "logic") - electrons flowing means true, electrons not flowing means false.

* AND gate = A and B must be on for the input to go to output (stacked back to back)

* OR gate = A or B must be on for the input to go to the output (side by side option)

* XOR gate

* Transistors + Gates make up registers (aka "memory") - one transistor can save one bit. 

## Binary Numbers and Evolving Languages

* 1001: the most right spot equals 2^0 and moves left. (& anything to the power of 0 is 1). so decimal is 8 + 0 + 0 + 1 = 9.

* 1101: 8 + 4 + 0 + 1 = 13 OR -5 (two's complement) OR 4 values of a pixel (rgba: 1 Red, 1 Green, 0 Blue, 1 Alpha)

* Processors interpret 32-bit or 64 bit numbers as instructions

* Programs are just sets of instructions - a program that adds two parameters 

* Assembly came around to make programs easier to write (ex: Add R1, R2, R3 // Sub R1, R2, R3)

* Compiled Programming Langauges made things even easier (ex int8 result = op1 + op2). languages like c++

* Javascript is the current top level 

## Processors

* Multi-threading - MultiCore Processor, such as 8 Core Processor (8 computers in laptop but they all share the same memory). Each processor is running it's own thread in execution (instructions). Thread locks happen when two threads get into a weird situation when they are both waiting for each other. 

* Computer Engineering - Designing circuits to help instructions execute quickly, design a new set of instructions, hardware

* Computer Science - Involved in software

## Complexity

* One way to measure the efficiency of your code is by asking how much time does algorithm take to arrive at a solution?

* NP Hard Problems - too hard for our computers to solve

## Big-O Notation 

- O(1) = Instant // Demanding they tell you
- O(log n) = Fast // Asking one person if number is less than 50? than 25? (aka Binary Search - Slicing)
- O(n) = Average // Only asking one person if their number 1? 2? 3? 4? 
- O(n log n) = Ok // Asking ten people about ten numbers
- O(n^2) = Slow // Asking each person if their number is 1? 2? 3? 
- O(2^n) = Get out...

### example of O(n):

var array = [0, 2, 3, 6, 1, 5];

function myAlgo(array) {
  for (var i=0; i < array.length; i++) {
    console.log(array[i])
  }
}

myAlgo();

### example of O(n^2):

var array = [0, 2, 3, 6, 1, 5];

function myAlgo(array) {
  for (var i=0; i < array.length; i++) {
    for (var j=0; j < array.length; j++) {
      console.log(array[j])
    }
  }
}

myAlgo();

### example of 0(log n):

var array = [0, 2, 3, 6, 1, 5];

function myAlgo(array) {

  var i = 0;

  while (i < array.length) {

    console.log(array[i]);

    if (if ==  0) {
      i = 1;
    } else {
      i = i * 2;
    }

  }
}

myAlgo();

* log algos show as they are clumped heavy in the beginning and then peter off

## Recursion

* Recursion is a strategy for writing algorithms. A recursive algo will call itself as part of the routine. 

### example of recursion:

function sumUp(n) {
  if (n == 1) {
    return 1; <---base case
  } else {
    return n + sumUp(n-1) <---recursive case
  }
}

### example of non-recursion:

function sumUp(n) {
  
  var acc = 0;

  for (var i = 1; i <= n; i++) {
    acc = acc + 1
  }
}

## Towers of Hanoi

