var Person = {};

Person['age'] = 20;
Person['name'] = 'daeun';
Person.add = function(a, b){
	return a+b;
};

Person['add'] = oper;
console.log('더하기 : %d', Person.add(10,10));