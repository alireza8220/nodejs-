const express = require('express');

const path = require('path');

const app = express();

const router = express.Router();

const mysql = require('mysql');


router.post('/save', (req, res) => {

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'alireza82',
    });
    con.connect((err) => {
        if (err) throw err;
        var s = req.body;
        console.log(s)
        console.log(s.psw)
        var sql = `INSERT INTO ali (name, lname) VALUES ('${s.uname}', '${s.psw}')`;
        con.query(sql, (err, result) => {
            if (err) throw err;
            console.log('added!');
            res.render('student.hbs', {
                titlepage: s.uname
            });
        })
    })
});























router.get('/singup/:name/:lname', (req, res) => {
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'alireza82',
    });
    con.connect((err) => {
        if (err) throw err;
        var sql = `INSERT INTO ali (name, lname) VALUES ('${req.params.name}', '${req.params.lname}')`;
        con.query(sql, (err, result) => {
            if (err) throw err;
            console.log('added!');
            res.json({
                mse: 'added',
                name: req.params.name,
                lname: req.params.lname
            })
        })
    })
});
router.get('/singin/:name', (req, res) => {
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'alireza82',
    });
    con.connect((err) => {
        if (err) throw err;
        var sql = `SELECT * FROM ali WHERE name = '${req.params.name}'`;
        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            console.log('read');
            res.json({ result })
        })
    })
});
module.exports = router;