const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
const mysql = require("mysql")

let db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'MBarbershop',
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })) 

app.post("/api/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO Client (Username, Password, AccountType) VALUES (?,?, 1);"
    db.query(sqlInsert, [ username, password ], (err, result) => {
        console.log(result)
    })
})

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

app.get("/", (req, res) => {
    
})

app.listen(3002, () => {
    console.log("running on port 3002")
})