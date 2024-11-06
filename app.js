const express = require('express'); //create server using the express module in nodejs
const app = express(); //create an instance of express 'app'
const port = 3000; //set environment variable 'port' to 3000, this is for localhost3000:

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded, middle ware

app.get('/', (req, res) => { //get action, retrieve file from server 
    res.sendFile(__dirname + '/index.html'); // to send HTML file on GET request
});

app.post('/submit-form', (req, res) => {  //post action, insert resource into the server, req will store incoming objects, res will be the response sent to the server ('Thanks!')
    const comments = req.body.comments; //  to access form data
    res.send(`Thanks!`);
});

app.listen(port, () => { //listening on specified port, in this case 3000
    console.log(`Server running on http://localhost:${port}`);
});