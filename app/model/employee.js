var mongoose = require('mongoose');

module.exports = mongoose.model('Employee', {
	name : String,
	surname : String,
	title : String,
	team : String,
	telephone : {
		work : String,
		home : String
	},
	email : {
		work : String,
		home : String
	}


});