// All of this mentioned below is from https://www.npmjs.com/package/mysql2 
// Just to get something down on paper for the .js text needed for get requests for the HTML

// get client
const mysql = require('mysql2');

// establish database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
});

// simple query
connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields) {
        console.log(results);
        console.log(fields); 
    }
)

// with placeholder
connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?'
    ['Page', 45],
    function(err, results) {
        console.log(results);
    }
);