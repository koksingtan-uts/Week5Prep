// Initialize server components
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// Initialize server for processing json and cors 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Setup router root folder
app.use('/task', express.static(__dirname));
app.use('/api', require('./task/router'));

// Listens to port 3000
app.listen(3000, function () {
    console.log('Server is running');
});