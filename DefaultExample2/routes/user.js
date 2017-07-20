var login = function(req, res){
	console.log('user 모듈안에 있는 login 호출됨. ');
	
}
var adduser = function(req, res){
	console.log('user 모듈안에 있는 adduser 호출됨. ');
}
var listuser = function(req, res){
	console.log('user 모듈 안에 잇는 listuser 호출됨. ');
}

var database;
var UserSchema;
var UserModel;

var init = function(db, schema, model){
	console.log('init 호출됨. ');
	
	database = db;
	UserSchema = schema;
	UserModel = model;
}

module.exports.init = init;
module.exports.login = login;
module.exports.adduser = adduser;
module.exports.listuser = listuser;

