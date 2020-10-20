const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.post('/book', (req, res) => {
  const body = req.body
  const book = db.add('book', body)
  if (!book) {
    res.status(400).send('Wrong body')
  } else {
    res.send(book)
  }
  return
})


module.exports = app
