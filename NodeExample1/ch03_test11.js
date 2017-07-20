var Users = [{name:'다은', age:25}, {name:'한울', age:26}];
console.log('push() 호출전 배열 요소의 수 : %d', Users.length);

Users.push({name:'상영', age:27});
console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);

Users.pop();
console.log('pop() 호출 후 배열 요소의 수 : %d', Users.length);
