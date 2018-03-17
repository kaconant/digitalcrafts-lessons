#Using a for loop and the range function, print out the numbers between 1 and 10 inclusive, one on a line.
for number in range(1, 11):
    print number

#Same as the previous problem, except you will prompt the user for the number to start on and the number to end on. n-m
number1 = int(raw_input("Start from: "))
number2 = int(raw_input("End on: "))
for number in range(number1, number2 + 1):
    print number

#Print odd numbers // 2 in example 1 below allow us to skip every other
for number in range(1, 11, 2):
    print number
#or
for number in range(1, 11):
    if number % 2:
        print "odd: %d" % number 
    else: 
        print "even: %d" % number 
#or
for number in range(1, 11):
    if number % 2:
        print number

# Print a 5x5 square
n = 5
for number in range(5):
    print "*" * n  

# Ask how big? Print 10x10 (only same dimensions)

n = int(raw_input("How big is the sqaure? "))
for number in range(n):
    print "*" * n

# Print an empty box 
width = int(raw_input("How wide is the box? "))
height = int(raw_input("How tall is the box? "))

for row in range(height):
    if row in[0] or row in[(height-1)]:
        print("* " * (width))
    else:
        print("*"+"  "*(width-2)+" *")

#print a triangle
height = 4
base = height * 2 - 1

for row in range(1, height + 1):
    spaces = height - row
    print " " * spaces + "*" * (row * 2 - 1)

# multiplication table 

n = 10
for number1 in range(1, n + 1):
    for number2 in range(1, n + 1):
        result = number1 + number2
        print "%d x %d = %d" % (number1, number2, result)