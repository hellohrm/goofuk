const express = require('express');

// Next initialize the application
const app = express();
//
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');//

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); //

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



// routing path
app.get('/', (req, res) => {
    res.send('Hello World!');
});


let routes = require('./api/routes'); //importing route
//const { debug } = require('util');
routes(app, {
    testsend: function (data) {
        debugger;
        //io.emit('chat message', data);
    }
})




const port = process.env.PORT ||3000;
// Start the server
app.listen(port, () => {
    console.log('Server started on port 3000');
});

