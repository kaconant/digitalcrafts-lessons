How Routes work?

The players:
- User 
- Route Controller
- Members Section 
- Middleware Authetnication
- App

Example:
1. User passed a get request to the app

2. app sent to home route contorller

3. Home route returned a response to the user with the home view on it

4. User passed a Get request to the app

5. Failed without authenticator

6. user sends Post request to authetnication middleware

7. sent to login controller - sent to user

----
How Do I Start A Full Stack Project?

1. Server Side Rendering (SSR)
- No API
- Better for SEO
- A server does work
- With server-side rendering, your initial request loads the page, layout, CSS, JavaScript and content. 
- Every page load is a new request
- Routes goes to controller goes to models goes back to controller(app.get is an example) goes to views goes to client

2. Client Side Rendering (CSR)
- Bad SEO
- Client does work
- For subsequent updates to the page, the client-side rendering approach repeats the steps it used to get the initial content. Namely, JavaScript is used to get some JSON data and templating is used to create the HTML.
- Build an API (JSON responses)
- Routes goes to controller goes to models goes to controller returns JSON data that goes to the app bundle
- User requests page - the App bundle requests the routes

----
How Do I Start An App from Start to Finish?

Planning Stage:

1. Working out functionality - single minded proposition (3 second elevator pitch)

Login, Logout - Authentication
UserID

2. CSR or SSR? 

3. Individual Jobs

4. Wireframes - visual guide (whiteboard examples)

Setting up:

5. GitHub and getting everyone linked in

6. Project file on one person's computer: npm init - package JSON file

7. Express generator - work out npm scripts (nodemon)

8. Build out database and sequelize

Where will it live:

9. AWS? or Netlify?-(No SSR)

https://github.com/kimmvsrnglim/travel-troll-project

-----

Lachlan Example Project:

- Views
- Config
- Bin
- Models -- users model first created
- Routes
- Seeders

-----

Migrations:

- Useful for production websites: change to the structure of database to where it should be in a safe manner, without starting from scratch and losing all their users
