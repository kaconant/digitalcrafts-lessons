Middleware allows you to 
.get (postman or on front end)
-- request, response
-- request, response
-- request, response
-- request, response
send response back to user

---

route handler:
app.get('/', req, res) => {
    console.log('first');
    req.message = 'hello';
}

*vs*

middleware:
app.use((req, res, next) => {
    console.log('first');
    req.message = 'hello'; // setting request here and altering data
    next(); // send this to next middleware component
});

---

you can also do it on one particular route as opposed to all routes such as:
app.use('/jimjam', (req, res, next) => {
    console.log('first');
    req.message = 'hello'; // setting request here and altering data
    next(); 
});

when defining middleware (ex: bodyParser) - has to be done before routes determined. 
*middleware is used after user sends something but before response goes back ot them.*

---

there is an express library for validation only called express-validator - validates form data.
ex: 

// for one validiation:
app.use('/new', check('first_name').is_required().with_message('first name is required'))

or

// for more than one validation:
app.use('/new', [
    check('first_name').is_required().with_message('first name is required'),
    check('last_name').is_required().with_message('last name is required'),
);

---

Making Static Webpages

app.use(express.static('public'));
-- add before app.use(bodyPart)