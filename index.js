const {odd, even} = require('./var');
const checkNuber = require('./func.js');

const os = require('os');
const path = require('path');
const fs = require('fs').promises;

console.log(checkNuber(10));

fs.readFile('./readme.txt')
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.log(err)
})

fs.writeFile('./readme.txt','읽었습니다.')
.then(()=>{
    return fs.readFile('./readme.txt')
})
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.log(err)
})