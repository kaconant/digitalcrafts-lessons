# HTML, CSS, JS files -- view them in your browser:
* deploy these files (like netlify) -- it's a static website
* perfect for basic websites (portfolios, etc)

# Another variation:
* AJAX connects to API via AJAX additional requests (movie showtimes, restaurant reviews, etc). not managing that data, just talking to a server that does that for you.

# Next level:
* the browswer doesn't care about what's happening on a server
* on the server side, as long as it speaks HTTP you can make the browser happy
* if you can handle requests and send back responses - you are a web server
* the bigger the website, you need more resuable HTML to make it easier (such as using handlebars)
* instead of keeping data in static file, you'll introduce a database that dynamic data will be stored. won't keep info in one JSON file. 
* you'll use things like Postgres to help store in database
* node knows how to talk to database and knows how to grab static files from server and helps put it all together, via a response to the browswer
* other languages you might encounter instead of node: java, .net, php, python, ruby, etc -- every language has a library that helps do HTTP (sending a rec strings or pictures over the internet, back and forth)
* React is way fancier version of jQuery

# What does a project look like:
* gardening robot
* server size of cellphone (raspberry pi)
* JS, SQL (Sequelize), React + CSS + HTML
* Another app to talk to the backend - React Native (JS - special variation that runs on ios and andriod)
* Talked to a database via nodeJS 

# How to split it up between other folks: 
* Database (SQL)
* API (Express), Server Render (Log-in Page) -- work closely with database guy
* React 
* React Native

# API vs AJAX vs HTTP
* when using jQuery browswer side, "say": $.get, $.post, $.ajax
* server side, "hear": app.get, app.post
* doing a ajax request, "reply": res.json
* browswer needs to show a page, "reply": res.render
* say to hear to reply
