/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require("express");
var mysql = require('mysql');


var conn = mysql.createPool({
    connectionLimit: 1000, //important
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alqamus',
    debug: false
});
exports.connection = conn;