
const express = require('express');
// Next initialize the application
const app = express();

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

