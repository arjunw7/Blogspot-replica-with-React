var express = require('express');
var path = require('path');

var app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'))
})

app.listen('8080', function() {
    console.log("App running on post 8080")
})