const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  let data = req.body;
  res.send('Data Received: ' + JSON.stringify(data));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})