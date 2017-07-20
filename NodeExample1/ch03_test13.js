var Users = [{name: 'daeun', age:25}, {name:'hanul', age:26}, {name:'young jae', age:22}];


Users.splice(1,0, {name:'gun', age:20});

console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users);

Users.splice(2,1);
console.log('splice()로 인덱스 2의 요소를 1개 삭제한 수');
console.dir(Users);
