var require = function(path){
	var exports = {
		getUser :function(){
			return {id:'test01', name:'한울'};
		},
		group : {id:'group01', name:'남친'}
	}
	return exports;
}

var user = require('./user1');

function showUser(){
	return user.getUser().name + ', ' + user.group.name;
}

console.log('사용자 정보 : %s ', showUser());