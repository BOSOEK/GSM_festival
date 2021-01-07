
const mysql = require('mysql');

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

var sql = "select * from notebook";
    
db.query(sql, function(err, result, field) {
    if(err) {
        console.log(err);
    }
    if(result.length > 0) {
        console.log("tlqkf");
        for(var i = 0; i < result.length; i++) {
            if(result[i].class / 1000 == 1) {
                var $elem = $('.one-template').clone().removeAttr('id');
                $elem.find('.gclass').html(result[i].class);
                $elem.find('.gname').html(result[i].name);
                $('#one-list').append($elem);
            }
            if(result[i].class / 1000 == 2) {
                var $elem = $('.two-template').clone().removeAttr('id');
                $elem.find('.gclass').html(result[i].class);
                $elem.find('.gname').html(result[i].name);
                $('#two-list').append($elem);
            }
            if(result[i].class / 1000 == 3) {
                var $elem = $('.tree-template').clone().removeAttr('id');
                $elem.find('.gclass').html(result[i].class);
                $elem.find('.gname').html(result[i].name);
                $('#tree-list').append($elem);
            }
        }
    }
});