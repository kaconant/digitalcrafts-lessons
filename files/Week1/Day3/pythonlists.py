# Sum the Numbers - Given a list of numbers, print their sum. When I say given something, just make something up and store it in a variable.
a = [1, 2, 3]
b = sum(a)
print "The answer is %d" % b

# Largest Number - Given a list of numbers, print the largest of the numbers.
answer = max(1, 2, 3)
print "The answer is %d" % answer

# Smallest Number - Given a list of numbers, print the smallest of the numbers.

answer = min(1, 2, 3)
print "The answer is %d" % answer

# Even Numbers - Given a list of numbers, print each number in the list that is even.
lowerLimit = int(raw_input("Enter the lower limit : "))
upperLimit = int(raw_input("Enter the upper limit : "))
for i in range(lowerLimit, upperLimit + 1):
    if (i%2 == 0):  
        print "The even numbers are %s" % i

#ooor 

lowerLimit = int(input("Enter the lower limit : "))
upperLimit = int(input("Enter the upper limit : "))
numberList = list()
for i in range(lowerLimit, upperLimit + 1):
    if (i % 2 == 0):  
        numberList.append(str(i))
print "The even numbers are %s" % numberList

# Positive Numbers - Given a list of numbers, print each number in the list that is greater than zero.
x = [8744, -5324, -3246, 2543, 3454, 3421, -3256, 1321, 3225 , -8937, 7323, -3232]
for index in x:
    if index > 0:
        print index

# Positive Numbers II - Given a list of numbers, create a new list which contains every number in the given list which is positive.
x = [8744, -5324, -3246, 2543, 3454, 3421, -3256, 1321, 3225 , -8937, 7323, -3232]
def positiveNumbers(list):
    num = []
    for index in list:
        if index > 0:
            num.append(index)
    return num
print positiveNumbers(x)

# Multiply a list - Given a list of numbers, and a single factor (also a number), create a new list consisting of each of the numbers in the first list multiplied by the factor. Print this list using console.log(list); 
y = 2
x = [8744, -5324, -3246, 2543, 3454, 3421, -3256, 1321, 3225 , -8937, 7323, -3232]
def multiply(list, factor):
    num = []
    for index in list:
        num.append(index * factor)
    return num
print multiply(x, y)

# Multiply Vector - Given two lists of numbers of the same length, create a new list by multiplying the pairs of numbers in corresponding positions in the two lists. Example:
y = [2, 4, 8]
x = [3, 6, 9]
def multiply(list1, list2):
    num = []
    for index in range(len(list1)):
        num.append(list1[index] * list2[index])
    return num
print multiply(x, y)

#Matrix Addition
y = [[2, 4,], 
    [8, 3]]
x = [[3, 6,], 
    [9, 5]]
def matAdd(list1, list2):
    num = []
    for i in range(len(list1)):
        for j in range(len(list1[0])):
            num.append(list1[i][j] + list2[i][j])
    return num
print matAdd(x, y)