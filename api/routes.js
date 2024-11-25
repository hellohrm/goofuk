'use strict';
module.exports = function (app, c$b) {

    var autho2;


    app.route('/tok').get( function(req, res){

        if (!autho2) autho2 = require('./autho2.js');

        autho2.tokens().then(function (token) {

            console.log(token);

            res.setHeader('Content-Type', 'application/json');

            res.write(JSON.stringify(token));

            res.end();


        });



    });


    app.route('/bubblefcm').post(function (req, res) {
        //
        console.log("post")
        //
        if (!autho2) autho2 = require('./autho2.js');
        //
        //tha cho no tu post
        autho2.tokens().then(function (token) {
            //
            autho2.postFCM(req, token.access_token);
            //
            //
            //response luon,, vi mac ke ket qua. !!!!
            res.setHeader('Content-Type', 'application/json');
            //
            res.write(JSON.stringify({ 'msg': 'Hello World!' }));
            //
            res.end();
            //
        });
        //
    }).get(function (req, res) {
        console.log("get")

        c$b.testsend(`Buffer.from(req.query.dat, 'base64').toString('utf-8')`);

        res.setHeader('Content-Type', "text/plain");

        res.write("OK");

        res.end();
    });

    // todoList Routes
    app.route('/iclock/cdata').post(function (req, res) {
        var post_body = req.body;
        var hostcofig = { 'err': {} };
        hostcofig['api'] = { 'master': 'http://localhost:3000' };
        hostcofig['database'] = { 'host': 'localhost', 'name': 'somedb', 'user': 'someuser', 'pass': 'somepass' };
        hostcofig['cacheexpire'] = { 'config': 1 * 60 };
        //
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(hostcofig));

        res.end();
    }).get(function (req, res) {
        // todoList Routes
        //hostINFO = require('./phphost.json');
        res.setHeader('Content-Type', "text/plain");
        res.write("404 Not Found\n");
        res.end();
        //var path = require("path") //assuming express is installed 
        //res.sendFile(path.join(__dirname + '/../public/index.html'));
        //res.render(path.join(__dirname + '/../views/pages/index.ejs'));
        //res.send("O);
        //res.end;
    });

};
