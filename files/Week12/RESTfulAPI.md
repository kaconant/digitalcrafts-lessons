# Methods

- CRUD (Create, Read, Update, Delete)
- HTTP Method (Post, Get, Put, Delete)

Request --> Response

# Example of typical order

GET /api/customers
GET /api/customers/1
PUT /api/customers/1
DELETE /api/customers/1
POST /api/customers

# Using express + joi (validation) + postman

const Joi = require('joi');
const express = require('express');
cont app = express();

app.use(express.json()); // adding middleware in pipeline

// examples of ways to request
// app.get()
// app.post()
// app.put()
// app.delete()

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

// could move this to another js file called courses.js
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const course = {
        id: courses.length + 1, // when work with database, id assigned by database
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course was not found');
    res.send(course);
});

app.put(]/api/courses/:id', (req, res) => {

    // look up course
    // if not existing, return 404

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course was not found');

    // otherwise, validate
    // if invalid, return 400

    const { error } = validateCourse(req.body); // result.error
    if (error) return res.status(400).send(error.details[0].message);

    // update course

    course.name = req.body.name;

    // return the udpated course to client

    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // look up the course
    // not exist, return 404

    const course = courses.find(c => c.id === parseInt(req.params.id));
        if (!course) res.status(404).send('The course was not found');

    // delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // return same course
    res.send(course);
});

function validateCourse(course) {
     const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
};

// proper way to set port
const port = process.env.PORT || 3000; 

app.listen(port, () => console.log(`Listening on port ${port}...`));

