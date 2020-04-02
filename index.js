const express = require('express');
const app = express();
var bodyParser = require('body-parser')

var mainRoutes = require('./router/main')
app.use(mainRoutes);
// app.use(express.static((__dirname, 'www')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

var port = process.env.PORT || 3000;
app.listen(port);