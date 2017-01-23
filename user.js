/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require("express");
var mysql = require('mysql');
var conn = require('./connection');

function getUser(req, res) {

    conn.connection.getConnection(function (err, connection) {
        if (err) {
            res.json({"code": 100, "status": "Error in connection database " + err.message + ""});
            res.send("faild");
            return;

        }
        //res.send("ok ");
        console.log('connected as id ' + connection.threadId);

        connection.query("SELECT * FROM user", function (err, rows) {

            if (!err) {
                res.json(rows);
            }
            //find mysql errpr msg when error happend.

            connection.release();
        });

        connection.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database" + err.message + ""});

            return;
        });
    });
}


function setUser(req, res, id, fullname, email, password, token) {

    conn.connection.getConnection(function (err, connection) {
        if (err) {
            res.json({"code": 100, "status": "Error in connection database " + err.message + ""});
            res.send("faild");
            return;

        }
        //res.send("ok ");
        console.log('connected as id ' + connection.threadId);

        connection.query("INSERT INTO `user`(`ID`,`fullName`,`email`,`password`,`authToken`) VALUES (?,?,?,?,?)", [id, fullname, email, password, token], function (err, rows) {

            if (!err) {
                //res.json(rows);
                console.log('ok ' + id + " " + fullname + " " + email + " " + password + " " + token);
                res.send("ok ");
            }
            //find mysql errpr msg when error happend.
            connection.release();
        });

        connection.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database" + err.message + ""});

            return;
        });
    });
}

function getNamePassword(req, res, email, password) {

    conn.connection.getConnection(function (err, connection) {
        if (err) {
            res.json({"code": 100, "status": "Error in connection database " + err.message + ""});
            res.send("faild");
            return;

        }
        //res.send("ok ");
        console.log('connected as id ' + connection.threadId);

        connection.query("SELECT * FROM user where email=?&password=? limit 1", [email, password], function (err, rows) {

            if (!err) {
                res.json(rows);
                console.log('login ');
                return true;
            }

            connection.release();
        });

        connection.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database" + err.message + ""});

            return false;
        });
    });
}



exports.getUser = getUser;
exports.setUser = setUser;
exports.getNamePassword = getNamePassword;