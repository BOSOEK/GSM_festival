var mysql = require('mysql');
var http = require('http');
var express = require('express');

var con = mysql.createConnection({
    host: "192.168.154.1",
    user : "client",
    password: "8604",
    database : "GSM"
});

//URL 인코딩 본문 구문 분석 (HTML 양식에서 전송 됨)
app.use(express.urlencoded({extended:false}));
//JSON 본문 구문 분석 (API 클라이언트에서 보낸대로)
app.use(express.json());

var app = express();
app.set('port', 3000);

var router = express.Router();

app.post('/process/signup', function(req, res) {
    var id = req.body.id;
    var pw = req.body.password;
    var name = req.body.name;
    var discord = req.body.discord;
    var github = req.body.githubAddress;

    if(!id || !pw || !grade || !name) {
        window.alert("정보를 입력하여주세요");
        return;
    }

    var sql = "INSERT INTO festival (id, pw, name, discord, github) values (?, ?, ?, ?, ?)";
    var params = [id, pw, grade, name, discord, github];

    con.query(sql, params, function(err, rows, fields) {
        if(err) throw err;
        console.log("회원가입 완료됨.");
    });

});

http.createServer(function(req, res) {
}).listen(8000);