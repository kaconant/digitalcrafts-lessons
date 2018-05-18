// local machine is always 127.0.0.1

const express = require('express');
const util = require('util');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false})); // make our body available to us as a group of fields, and will turn into JSON if needs too
app.use(bodyParser.json());

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


app.get('/', (request, result) => { // '/' - root directory of app, send data back to the client ()
    readFile('blog-data.json')
        .then((data) => {
            response.json(JSON.parse(data));
        })
});

app.get('/contact/:id', (request, result) => {
        // set id to the number that was passed from the URL
        const id = Number(request.params.id) // parameter - this secton of the url, query - set in url (localhost:3000/contact/3 --- localhost:3000/contact?id=3)
       
        readFile('blog-data.json')
            .then((data) => {
                const blogData = JSON.parse(data)
                if (blogData[id]) {
                    response.json(blogData[id]);
                } else {
                    response.json({})
                }
            });
    });

app.post('/', (request, result) => {
    // result.send(request.body); // middleware - way of handling incoming data, does something in the middle and pushes out to function
    fs.readFile('blog-data.json')
        .then((data) => {
            return JSON.parse(data);
        }) 
        .then((data) => {
            const id = Object.keys(data).length + 1;
            while (data[id]) {
                id++; // add one if id is already in system 
            }
        const newEntry = {
            id, 
            ...request.body // take everything on request.body
        };
        data[id] = newEntry;

        return writeFile('data.json', JSON.stringify(data, null, '\t'))
            .then(() => {
                return newEntry;
            });
        })
        .then((newEntry) => { // returning data 
            response.json(newEntry);
        })
        .catch((err) => {
            response.status(500).send(err);
        });
    });
    

app.listen(3000, () => {
    console.log('Running on port 3000');
});

