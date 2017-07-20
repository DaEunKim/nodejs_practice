var login = function(req, res){
	console.log('user 모듈안에 있는 login 호출됨. ');
	
}
var adduser = function(req, res){
	console.log('user 모듈안에 있는 adduser 호출됨. ');
}
var listuser = function(req, res){
	console.log('user 모듈 안에 잇는 listuser 호출됨. ');
}

module.exports.login = login;
module.exports.adduser = adduser;
module.exports.listuser = listuser;