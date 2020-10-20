const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/publisher', (req, res) => {
  const publisher = db.get('publisher', req.query)
  res.send(publisher)
})


module.exports = app
