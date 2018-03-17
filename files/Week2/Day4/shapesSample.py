from turtle import *
from shapes import *
speed(10)

up()
goto(-200,-250)
down() 
drawRectangle(300,200)
goto(-100, -250)
drawRectangle(70, 100)
up()
goto(-170, -200)
down()
drawRectangle(35, 50)
up()
goto(0, -200)
down()
drawRectangle(35, 50)
up()
goto(-200,-50)
down()
drawTriangle(300)

mainloop()