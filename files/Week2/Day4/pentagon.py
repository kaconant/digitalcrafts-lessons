from turtle import *

def draw_pentagon(size = 100):
    for i in range(5):
        forward(size)
        left(72)

draw_pentagon()
mainloop()
