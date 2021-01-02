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

//회원가입하기 버튼을 눌렀을 때
app.post('/process/signup', function(req, res) {
    var {id, password, name, discord, github} = req.body;

    id *= 1;
    var checkId = id;
    if(checkId/1000 > 3 || cheekId/1000 < 1) {
        return;
    }
    checkId = id%1000;
    if(checkId/100>4 || checkId < 1) {
        return;
    }
    checkId = id%100;
    if(checkId/10>2 || checkId<0) {
        
        return;
    } 

    

    
});

//app.use('/', require('./script/pages.js'));

http.createServer(app).listen(9996, '172.30.1.58', function() {
    console.log("서버가 시작됨");
});