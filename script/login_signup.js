var mysql = require('mysql');
var http = require('http');
var express = require('express');

var con = mysql.createConnection({
    host: "localhost",
    user : "root",
    password: "8604",
    database : "GSM"
});

var app = express();
app.set('port', 3000);

var router = express.Router();

app.post('/process/signup', function(req, res) {
    var id = req.body.id;
    var password = req.body.password;
    var grade = req.body.grade;
    var name = req.body.name;
    var discord = req.body.discord;
    var github = req.body.githubAddress;

    if(!id || !password || !grade || !name) {
        window.alert("정보를 입력하여주세요");
        return;
    }

    var sql = "INSERT INTO festival (id, pw, grade, name, discord, github) values (?, ?, ?, ?, ?, ?)";
    var params = [id, password, grade, name, discord, github];

    con.query(sql, params, function(err, rows, fields) {
        if(err) throw err;
        console.log("회원가입 완료됨.");
    });

});

http.createServer(function(req, res) {
}).listen(8000);