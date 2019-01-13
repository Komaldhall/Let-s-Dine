var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json()); 
mongoose.connect('mongodb://localhost/restaurants');
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
    console.log("on port 8000");
})