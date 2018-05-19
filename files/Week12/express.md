#Express Installation & Setup

To start with express you need: 
* Node.js
* NPM
-- npm init
-- npm install express --save

When creating Package.json file via npm init
* name: customerApp
* version: 1.0.0
* description: Simple customer management app
* main: app.js
* author: 
* license: MIT

--also you'll need body parser sooooo

include it like this, as it means you don't have to add a bunch of npm installs

"dependencies": {
    "express":"*",
    "body-parser":"*"
},

after dependencies updated, do npm install again.

your main file (in this case app.js) will start will a bunch of requires

-- path is a core module, don't have to install seperately
-- homepage = /

let express = require('express');
let bodyParser = require('body-parser');
let path = require('path'); 

let app = express();

let.get('/', function(req, res) {
    res.send('Hello World');
}); 

app.listen(3000, function() {
    console.log('Server started on Port 3000...)
})






#Middleware

#Routing

#Template Engine

#Forms and Input

#Models, ORM & Databases - MongoDB

#Express Generator