from turtle import *

def draw_pentagon(size = 100):
    color("orange", "black")
    begin_fill()
    for _ in range(5):
        forward(size)
        left(72)
    end_fill()

def draw_hexigon(size = 100):
    color("white", "purple")
    begin_fill()
    for _ in range(6):
        forward(size)
        left(60)
    end_fill()

def draw_circle(size = 100):
    color("orange", "black")
    begin_fill()
    forward(50)
    width(1)
    circle(size)
    end_fill()

def draw_star(size = 100):
    color("yellow", "green")
    begin_fill()
    for _ in range(5):
        forward(size)
        right(144)
    end_fill()

def draw_square(size = 100):
    color("red", "blue")
    begin_fill()
    for _ in range(4):
        forward(size)
        left(90)
    end_fill()

def draw_triangle(size = 100):
    color("green", "yellow")
    begin_fill()
    for _ in range(3):
        forward(size)
        left(240)
    end_fill()

draw_pentagon()
draw_hexigon()
draw_star()
draw_square()
draw_triangle()
draw_circle()
