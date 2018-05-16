// local machine is always 127.0.0.1

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false})); // make our body available to us as a group of fields, and will turn into JSON if needs too
app.use(bodyParser.json());

app.get('/', (request, result) => { // '/' - root directory of app, send data back to the client ()
    result.send('Hey Builders!');
});

app.get('/contacts', (request, result) => { // almost always (request, result)
    fs.readFile('contacts.json', (err, data) => { // almost always (err, data)
        if (err) { return console.log(err)}
        result.send(JSON.parse(data));
    })
});

app.get('/contact/:id', (request, result) => {
    fs.readFile('contacts.json', (err, data) => { // almost always (err, data)
        if (err) { return console.log(err)}

        // set id to the number that was passed from the URL
        const id = Number(request.params.id) // parameter - this secton of the url, query - set in url (localhost:3000/contact/3 --- localhost:3000/contact?id=3)
       
        // filter the JSON data from our file into the result variable
        const response = JSON.parse(data).filter(entry => entry.id === id) // if using ===, must Number around const id
        
        // if the entry.id matches what comes up from the url, let it through. if not, then filter it out
        result.send(response);
    })
});

app.post('/new', (request, result) => {
    // result.send(request.body); // middleware - way of handling incoming data, does something in the middle and pushes out to function
    fs.readFile('contacts.json', (err, data) => { // almost always (err, data)
        if (err) { return console.log(err)}
        let contacts = JSON.parse(data);
        let newID = contacts.length + 1; // allows you to build on the other numbers, next object is the next number in line
        let newContact = {
            id: newID,
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            email: request.body.email,
        };
        contacts.push(newContact);
        fs.writeFile('contacts.json', JSON.stringify(contacts, null, '\n'), () => { // data, use null to placeholder, new line character
            result.send(newContact);
        });
    });
});


app.listen(3000, () => {
    console.log('Running on port 3000');
});

