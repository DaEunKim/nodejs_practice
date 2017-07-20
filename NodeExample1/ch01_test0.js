console.log('Hi~');
console.log('이름 : %s',  'Hanul');
console.log('나이 : %d',  '26');
console.log('여친 : %s', 'Daeun');

var result = 0;
console.time('duration_sum');

for(var i = 1;i<=1000;i++){
	result += i;
}
console.timeEnd('duration_sum');
console.log('1 to 1000 sum : %d', result);
