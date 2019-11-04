var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host:'remotemysql.com',
    port:'3306',
    user:'6ysP6ApzDG',
    password:'a39UbC9DoK',
    database: '6ysP6ApzDG'

});

var server = app.listen(4545, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start");
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

app.get('/aluno', function(req, res){
    con.query('select * from aluno', function(error, rows, fields){
        if(error) console.log(error)
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});