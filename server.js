/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require("express");
var mysql = require('mysql');
var bodyParser = require('body-parser');
var connection = require('./connection');
var user = require('./user');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

app.get("/user", function (req, res) {
    -
            user.getUser(req, res);
});



app.post("/v1/user", function (req, res) {
//app.post("/user", function (req, res) {
    //res.header(email, password)
    var id = req.body.id;
    var email = req.body.email;
    var fullname = req.body.fullname;
    var password = req.body.password;
    var token = req.body.token;


    user.setUser(req, res, id, fullname, email, password, token)
    console.log("user add" + id + fullname + email + password + token);

});

app.post("/v1/user/login", function (req, res) {

    var email = req.body.email;
    //var fullname = req.body.fullname;
    var password = req.body.password;



    if (user.getNamePassword(req, res, email, password) === true) {
        res.header({"status": 200});
        console.log("login" + email + password);
    }
    res.header({"status": 404});
    console.log("error login" + email + password);
});

app.listen(3000);
