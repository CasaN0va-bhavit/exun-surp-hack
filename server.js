const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000,
    mongoose = require('mongoose')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, console.log("SERVER STARTED"))