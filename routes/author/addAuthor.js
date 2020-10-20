const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.post('/author', (req, res) => {
  const body = req.body
  const author = db.add('author', body)
  if (!author) {
    res.status(400).send('Wrong body')
  } else {
    res.send(author)
  }
  return
})


module.exports = app
