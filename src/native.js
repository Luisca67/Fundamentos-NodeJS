const fs = require('fs'); //fs = file system

const data = fs.readFileSync('prueba.txt', 'utf8')
console.log('File Content: ', data);