const url = require('url');

const urlName = 'https://ecampus.smu.ac.kr/course/view.php?id=94188';
//const { URL } = url;
const myURL = new URL(urlName);

console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('-------------------------------');
const parsedUrl = url.parse(urlName);
console.log('url.parse()', parsedUrl);
console.log('url.format()', url.format(parsedUrl));