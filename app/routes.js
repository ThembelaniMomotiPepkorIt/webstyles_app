var Employee = require('./model/employee');
var path    = require('path');
var publicDir = path.join(__dirname,'public');

module.exports = function(app){

	app.get('/employees', function(req, res){
		/*Employee.find(function(err, emplyees){
			if(err){
				res.send(err);
			}
			res.json(employees);
		});*/
		res.send('This is a sample');
	});
	
	
	app.get('*', function(req,res){
		res.sendFile('/home/thembelani/webstyles_app/public/index.html');
		//res.sendFile("this is working");
	});

};