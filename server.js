//Modules ============================================================
var express	= require('express');
var bodyParser = require('body-parser');
var methodOverride  =require('method-override');
var mongoose = require('mongoose');
var path = require('path');
var publicDir = path.join(__dirname,'public');

var app = express();

//Configurations =====================================================

var port = process.env.PORT ||3000;

var database = require('./config/database.js')
//Connecting to database
mongoose.connect(database.url);

//parse application/jsons
app.use(bodyParser.json());

//parse application/vnd.api+json as JSON
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//parse application/x-www-form-urlencoded
//Applicable ot POST method
app.use(bodyParser.urlencoded({entended:true}));

//Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static files location //public/img will be /imgs
app.use(express.static(publicDir));



//Routes====================================================================

require('./app/routes')(app);

//Start App==========================================================================
app.listen(3000);

//Inform User==========================================================================
console.log('Server is running...');

//Expose App==========================================================================
exports = module.exports = app;