Express Static 
-- Look for the files on hardrive and put contents in response on browser
-- Chrome doesn't know, just uploads HTML / CSS / jQuery

Method name tells you want kind of request you are listening for:
-- get method tells the route that you want to listen for get but also respond to others with formatting like this

Ques:

# Handlebars?
Middleware that lets you do templating, explains how HTML format should be. hbs is extenstion for handlebars

# Template?
mostly just HTML + JS formatting
comments in handlebar {{! blah blah blah }}
{{#each members }} -- forEach loop formatting in hbs, ends with {{/each}}
{{#if member.address}} -- if formatting in hbs, ends with {{/if}}
{{#unless member.bookings}} -- inverse of if, ends with {{/unless}}
{{#with member}} -- vague, if you're feeling lazy?

Provide an object to pass information into a template

res.render = what you'll use in one of your route handlers instead of res.send or res.json // says that i want to render a template with this information inside of it

layout.hbs is skeleton of html

# Example of template

<!DOCTYPE html>
<html>
    <head>
        <title>{{title}}</title>
        <link rel="stylesheet" href=>
    </head>
    <body>
        {{{body}}}
    </body>
</html>

directory structure

-views
--layouts
---layouts.hbs
---layouts2.hbs
--partials
---sidebar.hbs
--errors.hbs

# Partials

specifically for partials:
let expressHbs = require('express-handlebars');

{{> sidebar}} -- syntax to include partials

------

# Express.js Generator

* Express Generator: comandline tool that will start your project for you, set up your different folders, config for template library, etc

* Start a project with express generator: 
express --view=hbs nameOfApp

* Specitify a template library: 
express --view=hbs nameOfApp --- the --view option

* Nodemon with a generated app
npm install --save-dev nodemon
to do a custom npm - go package.json and go under scripts and add "dev"

* extra notes:

// -g is a global node folder -- can put this anywhere
sudo npm install -g express-generator (super user)

express --view=hbs nameOfApp

bin folder - throw back name, where binary executables are installed 
-- www is in that folder = actually runs to start generated express app

cd superapp && npm install

next, DEBUG mode:
DEBUG=superapp:* npm start

npm install --save-dev nodemon

if you want to do a custom npm - go package.json and go under scripts and add "dev"

* homework: instead of using ajax, use handlebars

///

git init
git add .
git commit -m 
git remote add origin [copied web address]
git push --set-upstream origin master

///

bodyParser - when a browser sends data to server, there is no real way for the server to understand that format that it's in. you can look at header information and see the structure and type of info. 

bodyParser.json --> allows you to look at the data and request that is coming through and it will determine if its JSON data and transform it into something useful. same as json.parse. represent a javascript object in a string of text. 

bodyParser.urlencoded --> changes some of the characters to fit into a URL for browser

cookieParser - makes sure that the cookie data matches the URL. helps makes a cookie for your domain. look for that particular cookie property in header information. good for checking for authentication. 

debugger via chrome - allows you to check out the information from the server much like inspect does for the front end. 