//var someModel = require('./models/someModel');

module.exports = function(app){

	app.get('*', function(req,res){
		res.sendFile('/home/thembelani/webstyles_app/public/index.html');
		//res.sendFile("this is working");
	});
};
