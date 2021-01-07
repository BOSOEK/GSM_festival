const http = require('http');
const path = require('path');
const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.use(express.static(__dirname + '/Image'));
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/scripts'));

const db = mysql.createConnection( {
    host: '192.168.154.1',
    user: 'client',
    password: '33945',
    database: 'GSM'
});

db.connect(function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log("MYSQL Connected...");
    }
})



//페이지들 연결
app.get('/', function(req, res) {
    res.render("index");
});

app.get('/index', function(req,res) {
    res.render("index");
});

app.get('/login', function(req,res) {
    res.render("login");
});

app.get('/selfStudy', function(req,res) {
    res.render("selfStudy");
});

app.get('/facilities', function(req,res) {
    res.render("facilities");
});

app.get('/cafeteria', function(req,res) {
    res.render("cafeteria");
});

app.get('/signup', function(req,res) {
    res.render("signup");
});

app.get('/Petition', function(req,res) {
    res.render("Petition");
});

app.get('/log_index', function(req,res) {
    res.render("log_index");
});

var gclass, gname, gmajor;

//로그인 하기 버튼을 눌렀을 때
app.post('/process/login', function(req, res) {
    var id = req.body.id;
    var password = req.body.password;
    id *= 1;
    var sql = "select * from member where id = ? and pw = ?";
    
    db.query(sql, [id, password],function(err, result, field) {
        if(err) {
            console.log(err);
        }
        if(result.length > 0) {
            gclass = result[0].id;
            gname = result[0].name;
            gmajor = result[0].major;
            console.log(gclass + ", " + gname + ", " + gmajor)
            res.redirect('/log_index');
        }
    });

});