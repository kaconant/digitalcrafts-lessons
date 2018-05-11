fs = require('fs');

watcher = fs.watch(
    './intro-to-node.md', // path
    { encoding: 'buffer'}, // options
    (eventType, filename) => { // function
        if (filename) {
            console.log(filename + ' changed.');
        }
    }
);

/*

What would you watch a file 
-- looking for an event
-- like a promise, but more of a listener
-- calls a callback


*/