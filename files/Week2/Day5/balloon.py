# -*- coding: utf-8 -*-
# Exercise 2: Make your own class
# Create a class Vehicle. A Vehicle object will have 3 attributes:
# make
# model
# year
# A vehicle is created thus:

# car = Vehicle('Nissan', 'Leaf', 2015)
# And you can access it’s attributes individually like so:

# >>> print car.make
# Nissan
# >>> print car.model
# Leaf
# >>> print car.year
# 2015

class Vehicle(object):
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

car = Vehicle('Nissan', 'Leaf', 2015)
print car.make
print car.model
print car.year

############# different example

class Balloon(object):
    def __init__(self, color, size, shape):
        self.color = color
        self.size = size
        self.shape = shape
        self.inflated = False
        self.working = True

    def inflate(self):
        if self.working:
            self.inflated = True
        else:
            print "You exploded this balloon, idiot!"

    def explode(self):
        self.inflated = False
        self.working = False
        print "BANG!" 

    def paint(self, color):

class bigBalloon(Balloon):
    def __init__(self, color, shape):
        super(Balloon, self).__init__(color, 'Big', shape)

biggerBalloon = Balloon('red', 'big', 'round')
smallBalloon = Balloon('blue', 'small', 'square')
newBalloon = bigBalloon('green', 'round')