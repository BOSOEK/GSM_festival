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
app.use(serverStatic(path.join('public', __dirname, 'public')));

var router = express.Router();

router.route('/process/signup').post(
    function(req, res) {
        console.log('/process/signup 호출됨');
        var paramId = req.body.id || req.query.id;
        var paramPW = req.body.password || req.query.password;
        var paramName = req.body.name || req.query.name;
        var paramClass = req.body.class || req.query.class;
        var paramDis = req.body.discord || req.query.discord;
        var paramGit = req.body.githubAddress || req.query.githubAddress;

        addUser(paramId, paramPW, paramName, paramClass, paramDis, paramGit, function(err, result) {
            
        })
    }
)

var addUser = function(id, password, name, clas, discord, github, callback) {
    console.log('addUser 호출');

    con.connect(function(err) {
        if(err) {
            //오류뜨면 연결해제
            con.end(function(err) {});
        }
        var sql = "INSERT INTO festival (id, password, name, class, discord, github) VALUES (" + id + ", " + password + ", " + name + ", " + clas + ", " + discord + ", " + github + ")";
        con.query(sql, function(err, result) {
            if(err) {
                con.end(function(err) {});
            }
            console.log('insert 성공');
        })
    });
}
/*
con.connect(function(err) {
    if(err) throw err;
    var sql = "CREATE TABLE festival (id VARCHAR(100), password VARCHAR(100), name VARCHAR(100), class VARCHAR(10) PRIMARY KEY, discord VARCHAR(70), github VARCHAR(70))";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Table created!");
    });
});*/