const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
const mysql = require('mysql')

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'MBarbershop',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Register
app.post('/api/register', (req, res) => {
  const username = req.body.username
  const accountType = req.body.accountType
  const location = req.body.location

  const sqlInsert = `INSERT INTO Client (AccountType, Area, Email)
  VALUES (?, ?, ?);`

  db.query(sqlInsert, [accountType, location, username], (err, result) => {
    if (err) res.send(err)
    clientId = result
  })

  const clientIdQuery = `SELECT ClientId FROM Client 
  WHERE Email = ?
  ORDER BY 1 DESC
  LIMIT 1;`

  db.query(clientIdQuery, [username], (err, result) => {
    if (err) res.send(err)

    if (accountType == 2) {
      const displayName = req.body.displayName
      const pricePerKM = req.body.pricePerKM
      const bio = req.body.bio

      const barberInsert = `INSERT INTO ServiceProvider (DisplayName, ClientId, PricePerKM, Bio)
  VALUES (?, ?, ?, ?);`

      db.query(
        barberInsert,
        [displayName, result[0].ClientId, pricePerKM, bio],
        (err, result) => {
          if (err) res.send(err)
          res.send(result)
        }
      )
    } else if (accountType == 1) {
      const firstName = req.body.firstName
      const lastName = req.body.lastName

      const customerInsert = `INSERT INTO Customer (FirstName, LastName, ClientId)
  VALUES (?, ?, ?);`

      db.query(
        customerInsert,
        [firstName, lastName, result[0].ClientId],
        (err, result) => {
          if (err) res.send(err)
          res.send(result)
        }
      )
    }
  })
})

//Getting Notifications
app.get('/api/getNotifications', (req, res) => {
  const client = req.query.clientId

  const sqlInsert = `SELECT DISTINCT Notifications.*, FirstName, LastName, DisplayName FROM Notifications
  left join Customer on Customer.ClientId = Notifications.FromClient
  left join ServiceProvider on ServiceProvider.ClientId = Notifications.FromClient
  WHERE ToClient = ?;`

  db.query(sqlInsert, [client], (err, result) => {
    res.send(result)
  })
})

//Getting Images
app.get('/api/getImages', (req, res) => {
  const client = req.query.clientId

  const sqlInsert = `SELECT * From Images
  WHERE ClientId = ?;`

  db.query(sqlInsert, [client], (err, result) => {
    res.send(result)
  })
})

//Getting Notifications
app.get('/api/getServiceProviders', (req, res) => {
  const sqlInsert = `SELECT DISTINCT * FROM Client
  INNER JOIN Serviceprovider on ServiceProvider.ClientId = Client.ClientId
  WHERE Area LIKE '%, Ontario%' AND AccountType = 2`

  db.query(sqlInsert, (err, result) => {
    console.log(result)
    res.send(result)
  })
})

db.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message)
  }

  console.log('Connected to the MySQL server.')
})

app.get('/', (req, res) => {})

app.listen(3002, () => {
  console.log('running on port 3002')
})
