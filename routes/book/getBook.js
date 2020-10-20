const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/book', (req, res) => {
  const book = db.get('book', req.query)
  res.send(book)
})


module.exports = app
