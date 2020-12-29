const http = require('http');
const path = require('path');
const mysql = require('mysql');
const express = require('express');
const router = express.Router();

const app = express();

app.use(express.static(__dirname + '/Image'));
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/script'));

const db = mysql.createConnection( {
    host: '192.168.154.1',
    user: 'client',
    password: '33945',
    database: 'GSM'
});

//URL 인코딩 본문 구문 분석 (HTML 양식에서 전송 됨)
app.use(express.urlencoded({extended:false}));
//JSON 본문 구문 분석 (API 클라이언트에서 보낸대로)
app.use(express.json());

app.set('view engine', 'hbs');

db.connect(function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log("MYSQL Connected...");
    }
})

app.get('/', function(req, res) {
    res.status(200).sendFile(__dirname + "/html/index.html");
});

//app.use('/', require('./script/pages.js'));

app.listen(9996, function() {
    console.log("Server Started!");
});