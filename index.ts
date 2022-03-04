import express = require('express');

const {path, port} = require('./config.json')

const app = express();

app.use(require('morgan')('combined'))
app.use(require('helmet')())

app.get('/', (_req, res) => {
    res.send("Welcome to this super cool file server!")
})

//bind this path to the content dir
app.use('/content', express.static(path))

//Start listening
app.listen(port, () => {
    console.log(`Listening on port ${port} using dir ${path} `)
});