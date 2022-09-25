const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const mysql = require("mysql");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "MBarbershop",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Register
app.post("/api/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlInsert =
  `INSERT INTO Client (Username, AccountType, Area, Email)
  VALUES (?,?, 'Trinidad', 'arielle@gmail.com');`;
  
  db.query(sqlInsert, [username, password], (err, result) => {
    console.log(result);
  });
});

//Getting Notifications
app.get("/api/getNotifications", (req, res) => {
  const client = req.query.clientId;

  const sqlInsert =
  `SELECT DISTINCT Notifications.*, FirstName, LastName, DisplayName FROM Notifications
  left join Customer on Customer.ClientId = Notifications.FromClient
  left join ServiceProvider on ServiceProvider.ClientId = Notifications.FromClient
  WHERE ToClient = ?;`;

  db.query(sqlInsert, [client], (err, result) => {
    res.send(result);
  });
});

//Getting Notifications
app.get("/api/getNotifications", (req, res) => {
  const client = req.query.clientId;

  const sqlInsert =
  `SELECT DISTINCT Notifications.*, FirstName, LastName, DisplayName FROM Notifications
  left join Customer on Customer.ClientId = Notifications.FromClient
  left join ServiceProvider on ServiceProvider.ClientId = Notifications.FromClient
  WHERE ToClient = ?;`;

  db.query(sqlInsert, [client], (err, result) => {
    res.send(result);
  });
});

//Getting Images
app.get("/api/getImages", (req, res) => {
  const client = req.query.clientId;

  const sqlInsert =
  `SELECT * From Images
  WHERE ClientId = ?;`;

  db.query(sqlInsert, [client], (err, result) => {
    res.send(result);
  });
});

//Getting Notifications
app.get("/api/getServiceProviders", (req, res) => {

  const sqlInsert =
  `SELECT DISTINCT * FROM Client
  INNER JOIN Serviceprovider on ServiceProvider.ClientId = Client.ClientId
  WHERE Area LIKE '%, Ontario%' AND AccountType = 2`;

  db.query(sqlInsert, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

app.get("/", (req, res) => {});

app.listen(3002, () => {
  console.log("running on port 3002");
});
