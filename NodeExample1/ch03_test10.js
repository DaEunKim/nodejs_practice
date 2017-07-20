var Users = [{name: 'daeun', age:25}, {name:'hanul', age:26}, {name:'young jae', age:22}];

console.log('배열 요소의 수: %d', Users.length);

for(var i = 0;i<Users.length;i++){
	console.log('배열의 요소 #'+i+' : %s', Users[i].name);
}


console.log('/nforEach 구문 사용하기');
Users.forEach(function(item, index){
	console.log('배열 요소 #'+index+': %s', item.name);
});


