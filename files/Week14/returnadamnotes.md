- in node: require allows you access packages

# Navy Sailor Analogy
- what is a web server: serves any other computer on the internet. young navy sailor. 
- express package: outlines the whole program for navy sailor // var app = express(); -- new sailor
- app.js: the main training manual
- app.listen - new sailor listening to the radio
- anything between var app and app.listen - training program (app.get or app.post) AKA middleware
- example: app.get('/' -- go here) function(req, res, next) - allows you to carry on to the next app request
- res.render - allows that information to render
- between brackets in the app crud requests, writing node javascript again.
- servers talk over HTTP

#Express Generator
- if nothing is set up for a route, the next generated info from express generated is a app.use that handles errors
- bin / www, - it's the entry point, where everything kicks off
- public folder is where hard coded files is, html, css, vanilla javascript
- if you want your routes to continue onto the next CRUD, use next(); -- but really you should be chaining with promises by using .then functions.
- MVC Model
* Model (AKA database)
* Views (AKA Templates)
* Controller (AKA puts data into template)
