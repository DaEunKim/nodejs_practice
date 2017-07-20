var url = require('url');

var curlURL = url.parse('https://www.naver.com/');

var curStr = url.format(curlURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curlURL);

var querystring = require('querystring');
var param = querystring.parse(curlURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));