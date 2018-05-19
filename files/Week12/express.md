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
-- has to restart the server in the terminal to get your browser to update
-- if you want to use middleware, you have to use app.use
-- main folder is typically called 'public' or 'client'

-------

let express = require('express');
let bodyParser = require('body-parser');
let path = require('path'); 

let app = express();

/********

let logger = function(req, res, next) {
    console.log('Logging...');
    next();
}

app.use(logger);

********/

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoed({extended:false}));

// Set Static Path -- Middleware
app.use(express.static(path.join(__dirname, 'public')));

/******
let person = {
    name: 'Jeff',
    age: 30
}

or

let people = [
    {
        name: 'Jeff',
        age: 30
    },
    {
        name: 'Sarah',
        age: 22
    }
    {
        name: 'Bill',
        age: 40
    }
]

app.get('/', function(req, res) {
    res.json(people);
}); 

******/
 
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Customers'
    });
}); 

app.listen(3000, function() {
    console.log('Server started on Port 3000...)
})

#Middleware / Routing

Most modules have their own middleware
Order of middleware important -- if move under route handler (app.get) -- it breaks

above referenced:
app.use(logger)

-- nodemon (re-activates the server for us)
npm install nodemon -g (globally install)

#Template Engine

go to command line,
npm install ejs --save
your package.json will add this as you --save

-- create a folder called views
<h6>Hello from eJS</h6>

if you wanna pull in the information from app.js do this on views folder, file index.js

<html>
    <head>
        <title> My Express App </title>
    </head>
    <body>
        <h6><%= title %></h6>
    </body>
</html>

-- Above Will show Customers on browser

Advanced version:
-- Create new folder called partials
-- footer.js + header.js

Add to header.js:
<html>
    <head>
        <title> My Express App </title>
    </head>

Add to footer.js:
    </body>
</html>

index.js will include:

<% include partials/header %>
    <h6><%= title %></h6>
    <% users.forEach(function() { %>

    <% }) %>
<% include partials/footer %>

34:51
https://www.youtube.com/watch?v=gnsO8-xJ8rs

#Forms and Input

#Models, ORM & Databases - MongoDB

#Express Generator