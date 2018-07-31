## Proxy

# Why not send API requests via React?
- React App needs data, so we find an Open Weather API
- But you need an API key - /api/?apikey=blahblahblah
- However, if you are paying per request for an api key, someone could steal your key by inspecting and then charge you if you are requesting via React
- To resolve, you don't send the request directly to an API

# Use Express to make backend API
- Let Express solve it 
- aka api/weather/30305
- API key is sent with Express request and returned, but then client side doesn't have it which is good.

# NodeMailer 
- npm install nodemailer
- const nodemailer = require('nodemailer')
- use transporter function
- Mailtrap website: will catch all your emails
- command / p will allow you to jump to any file in your project

mail.js
transporter.sendMail({
from: `"${req.body.fromName}" <${req.body.fromEmail}>`
to: req.body.toEmail
subject: `Hey ${req.body.toName}, check this out`
template: 'notification'
context: {
    ...req.body
}
// easy way to do the following, but folks could be sneaky

    fromName: req.body.fromName,
    fromEmail: req.body.fromEmail,
    toName: req.body.toName,
    toEmail: req.body.toEmail,
    content: req.body.content
}
},
ERROR STUFFS
)

Template: // notification.hbs
<h1>Welcome! Hello there {{toName}}</h1>
<h3>{{fromName}} has sent you something. Check it out!</h3>
<p>{{content}}</p>