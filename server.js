//Modules ============================================================
var express	= require('express');
var bodyParser = require('body-parser');
var methodOverride  =require('method-override');
var app = express();

//Configurations =====================================================

var port = process.env.PORT ||3000;

//Connecting to database
//mongoose.connect(db.url);

//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as JSON
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//parse application/x-www-form-urlencoded
//Applicable ot POST method
app.use(bodyParser.urlencoded({entended:true}));

//Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname+'/public'));



//Routes====================================================================

require('./app/routes')(app);

//Start App==========================================================================
app.listen(3000);

//Inform User==========================================================================
console.log('Server is running...');

//Expose App==========================================================================
exports = module.exports = app;