const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const addAuthor = require('./routes/author/addAuthor')
const getAuthor = require('./routes/author/getAuthor')
const addPublisher = require('./routes/publisher/addPublisher')
const getPublisher = require('./routes/publisher/getPublisher')
const addBook = require('./routes/book/addBook')
const getBook = require('./routes/book/getBook')

const app = express()
app.use(express.json())

app.use(rootRoute)
app.use(addAuthor)
app.use(getAuthor)
app.use(addPublisher)
app.use(getPublisher)
app.use(addBook)
app.use(getBook)

const port = 3000
app.listen(port, () => {
  console.log(`App is running in http://localhost:${port}`);
})
