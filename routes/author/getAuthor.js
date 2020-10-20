const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/author', (req, res) => {
  const author = db.get('author', req.query)
  res.send(author)
})


module.exports = app
