
# Basics 101: 

- Javascript needs a host to run it
- Without backend, chrome does that for you as it's a broswer
- Google Chrome - access the dom (HTML, local storage) - document is given to element by google chrome
- Node file.js -- option = true // needs the word prcess
- require --> points you to javascript

# Node: 

- node: allows you to use other people's code via npm packages
- server: a computer that's listening to messages from other computers (500 error messages)

# How to think of Node:

- Hand Radio Navy Guy - He is Node

- Create --> Post
- Read --> Get
- Update --> Put
- Delete --> Delete
- also HTTP: Patch is update and add new fields

- Node --- instructions ---> Response
- API call --- request for instructions (Postman) --> Request

- For JSON you will have to check and see if you need to parse or stringify

- Follow require statements -- execute this code

- Can organize routes (.get, .put) --> in route folder
- Database Folder
- HTML Folder
- Bin Folder (starting the site) -- Index
- App.JS is typically the "training program" 

- sudo !! -- makes the previous request happen

- middleware - stuff on the inside of your app.use // packages

# Most Important lines from express-generator that helps organize your server:

- app.use(express.static(path.join(__dirname, 'public'))); -- whenever you visit, it will show you the website

// __dirname = directory
// path.join = creating new file path
// path.join(__dirname, 'public')) - want current directory public 
// express.static - takes that path.join as an argument, saying that have files I want to for people to see when visit my site (css, html) -- allow for it to be served
// public is all of the adam code

- app.use('/', indexRouter);
- app.use('/users', usersRouter);

// whenever a request comes to /, do whatever is in index
// whenever a request comes to /users, go whatever is in users

- bin folder - starting the server 
- app.js - training lessons
- routes - individual code
- public - website you wanna serve 

# Meat of Application:

app.get('/dogs', function(req, res, next) {
    res.json(dogsArray); // also same as res.send('something")
});

- next is a function that's given to you that allows you to add additional reactions to your get request. very express specific syntax.

- next, then, catch helps you control the flow of your code

- pg.query('SELECT * FROM dogs', function(data) 
    res.jsons(data);
    );

# SQL vs Mongo:

- SQL: instead of having tables and rows
- Thoughts: neat, tidy, strict rules - once values defined, have to continue with those, no nested information, no arrays - only strings, have to create another table that you can join to that table if you want to nest. not a JSON object, when query you have to go back and forth.

- Mongo: one big javascript object that lives in memory. key value pairs, objects, arrays
- Thoughts: not as organized, but you can manipulate the information easier as you're not caught in a pattern. can still have requirements for what can be uploaded to your database. JSON object so there is no back and forth. 

# Website to create free mongo database: 

- Mlab.com

