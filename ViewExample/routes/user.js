var login = function(req, res){
	console.log('user(user2.js) 모듈안에 있는 login 호출됨. ');
	
	var paramId = req.body.id || req.query.id;
	var paramPassword = req.body.password || req.query.password;
	
	console.log('요청 파라미터 : ', paramId + ', ' +paramPassword );
	
	var database = req.app.get('database');
	
	if(database.db){
		authUser(database, paramId, paramPassword, function(err, docs){
			if(err){
				console.log('사용자 로그인 중 에러 발생 : ' +  err.stack);
				
				res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
				res.write('<h2>사용자 로그인 중 에러 발생</h2>');
				res.write('<p>'+err.stack+'<\p>');
				res.end();
				
				return;
			}
			
			if(docs){
				console.dir(docs);
				
				var username = docs[0].name;
				
				res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
				
				var context = {userid:paramId, username:username};
				req.app.render('login_success', context, function(err, html){
					if(err){
						console.error('뷰 렌더링 중 오류 발생 : '+err.stack);
						res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
						res.write('<h2>뷰 렌더링 중 오류 발생</h2>');
						res.write('<p>'+err.stack + '</p>');
						res.end();
						
						return;
						
					}
					console.log('rendered : ', html);
					res.end(html);
				});
				
				res.write('<h1>로그인 성공</h1>');
				res.write('<div><p>사용자 아이디 : ' + paramId + '</p></div>');
				res.write('<div><p>사용자 dlfma : ' + username + '</p></div>');
				res.write("<br><br><a href='/public/login.html'> 다시 로그인 하기 </a>");
				res.end();
			}
		})
	}
	
	
	
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

