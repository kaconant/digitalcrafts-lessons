reverse = (string) => {
    console.log(string
        .split('')
        .reverse()
        .join(''))
}

reverse('hello')

/*
inside of Node in JS:

> reverse = function(string) {
... characterArray = string.split('')
... revArray = characterArray.reverse()
... revString = revArray.join('')
... console.log(revString)
... }
[Function: reverse]
> reverse('Hello')
olleH
undefined
*/