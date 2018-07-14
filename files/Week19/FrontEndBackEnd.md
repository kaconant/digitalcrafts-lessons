
## Node Server

# Routes
Get /users/:id
Post /guests

# Public
- index.html
- scripts.css

# If you want adam.com:
- jQuery - $.get('/users')
- translate to GET adam.com/users
- JSON object returns { users: []}

## Create-React-App Server

- To write back-end code, you have to have 2 servers running on your computer with front-end/back-end
- Example: React Server + Express Server
- React: Index.html, Script.js : 3000
- Express: Get / Post : 3001
- Ports must have different numbers 
- React can't accept GET requests

## Bridge the gap

- Proxying, helps connect the servers
- Set up in package.json -> Proxy: 'localhost:3001'
- Very specific to local development
- When time to deploy full application, on Create React App Server - npm run build (will bundle all of your front-end code) - put them into AWS or Heroku
- Express also needs to be put onto AWS or Heroku
- Coordinate your paths between React and Node
- S3 Deploy - command line tool

# Lifecycle Methods of React

- constructor - defines super and state

- componentDidMount - helps attach component
    axios.get('/users').then({data}=>{
        this.setState({users: data.users});
    }) // make sure to import axios

- componentDidUpdate - view the state over time
    console.loge(this.state);

- componentWillUnmount 
    $.modal('hide');

# Axios

- import axios from 'axios'
- add to front of jQuery