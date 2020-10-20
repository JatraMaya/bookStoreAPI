const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.post('/publisher', (req, res) => {
  const body = req.body
  const publisher = db.add('publisher', body)
  if (!publisher) {
    res.status(400).send('Wrong body')
  } else {
    res.send(publisher)
  }
  return
})


module.exports = app
