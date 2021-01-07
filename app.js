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
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/scripts'));

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

app.get('/facilitiesafter', function(req,res) {
    res.render("facillties");
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

app.get('/selfStudyafter', function(req,res) {
    res.render("seifStudy");
});

app.get('/Petitionafter', function(req,res) {
    res.render("Petltion");
});

//노트북 대여 버튼을 눌렀을 때
app.get('/notebook', function(req, res) {
    var sql = "INSERT INTO notebook(class, name) VALUES(?, ?)";
    var param = [gclass, gname];
    db.query(sql, param, function(err, rows, fields) {
        if(err) {
            console.log(err);
        }
    });
    res.redirect('/selfStudyafter');
});

//노트북 대여 취소을 눌렀을 때
app.get('/notebookafter', function(req, res) {
    var sql = "DELETE FROM notebook WHERE class = ? and name = ?";
    var param = [gclass, gname];
    db.query(sql, param, function(err, rows, fields) {
        if(err) {
            console.log(err);
        }
        console.log("앙 성공띠");
    });
    res.redirect('/selfStudy');
});


//회원가입하기 버튼을 눌렀을 때
app.post('/process/signup', function(req, res) {
    var {id, password, name, major} = req.body;
    id *= 1;
    var sql = "INSERT INTO member(id, pw, name, major) VALUES(?, ?, ?, ?)";
    var params = [id, password, name, major];
    db.query(sql, params, function(err, rows, fields) {
        if(err) {
            console.log(err);
        } else {
            gclass = id;
            gname = name;
            res.redirect('/login');
        }
    });
});


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
            gclass *= 1;
            gname = result[0].name;
            gmajor = result[0].major;
            res.redirect('/log_index');
        }
    });

});

var gclass, gname, gmajor;

http.createServer(app).listen(9996, '172.30.1.58', function() {
    console.log("서버가 시작됨");
});