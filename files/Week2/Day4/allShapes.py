from turtle import *
from shapes import draw_square
from shapes import draw_pentagon
from shapes import draw_hexigon
from shapes import draw_circle
from shapes import draw_star
from shapes import draw_triangle

coord_list = [
    (-100, 100, 100),
    (100, 100, 200),
    (100, -100, 120),
    (-100, -100, 250)
]
for coord in coord_list:
    up()
    home()
    x, y, size = coord
    setheading(270)
    forward(x)
    setheading(0)
    forward(y)
    down()
    draw_circle(size)