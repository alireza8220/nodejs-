var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "alireza82"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    var sel = ""
    con.query(sel, (err, result) => {
        if (err) throw err;
        console.log(result);
    })
});