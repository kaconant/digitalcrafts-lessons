/*
when manipulating module packages, looks like this:

var aCat = require('./cat);

*OR*

const aCat = require('./cat') -- better as you can't mess with it
*/

const fs = require('fs');

const print = (what) => { 
    return 'HEY: ' + what
};

// or const print = (what) => what === '';

const watcher = fs.watch('README.md', () => {
    print('Ouch');
});

module.exports = {watcher, print};

// will pull these functions in other file ---> const watch = require('./nodejsnotes') ... watch.watcher()

/*

----notes about nodejs----

https://www.npmjs.com/
packages --> allow you to do something in node that someone else has already written
example: http requests, 
can determine the best one off by starting with popularity

o.o.o
1st is major update - could break how people use this
2nd is small update - no breaking changes

making a package in terminal in the folder you want to store this:
npm init -- this will help you create your package (called package.json)
npm install *package name from online here* -- this will create node modules file + package-lock.json file (ex: npm install readaline)


try --
catch -- 


---- 

javascript loop
adding commands for the JS system to process

callstack + listening:

1. rl.questions() - call back in there 
2. http.get()
3. response.on(data)
4. response.on(end)
5. console.log(outputData)
*/