import random

def insultsTime():
    insult = str(random.randint(1,3))
    if insult == "1":
        print "Looks like someone really needs to try again"
    elif insult == "2":
        print "Dude, you've got a 50-50 shot at this..."
    elif insult == "3":
        print "Help me, help you."
    else:
        print "Hit me baby one more time..."

def triangle(triangleHeight):
    height = triangleHeight
    base = height * 2 - 1
    for row in range(1, height + 1):
        spaces = height - row
        print " " * spaces + "*" * (row * 2 - 1)

def square(squareHeight):
    for number in range(squareHeight):
       print "*" * squareHeight

def box(boxHeight, boxWidth):
    for row in range(boxHeight):
        if row in[0] or row in[(boxHeight-1)]:
           print("* " * (boxWidth))
        else:
           print("*"+"  "*(boxWidth-2)+" *")

def printMenu():
    userShape = raw_input("Choose 1 for triangle, choose 2 for square, or choose 3 for box. ")
    if userShape == "1":
        triangleHeight = int(raw_input("How tall do you want your triangle? "))
        triangle(triangleHeight)
        menuAgain()
    elif userShape == "2":
        squareHeight = int(raw_input("How tall do you want your square? "))
        square(squareHeight)
        menuAgain()
    elif userShape == "3":
        boxHeight = int(raw_input("How tall do you want your box? "))
        boxWidth = int(raw_input("How wide do you want your box? "))
        box(boxHeight,boxWidth)
        menuAgain()
    else:
        print 'No, you dummy! Try again...'
        printMenu()

def menuAgain():
    playAgain = raw_input("Play again? (yes / no) ").lower()
    if playAgain == "yes":
        printMenu()
    elif playAgain == "no":
        print "Goodbye!"
    else:
        insultsTime()
        menuAgain()
        
printMenu()