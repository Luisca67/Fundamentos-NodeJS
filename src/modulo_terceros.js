const isOdd = require('is-odd');

//No se usa esta forma porque el archivo de donde se saca el isOdd es .js y no .mjs
//Ademas, es mas sencillo de la otra forma porque solo es una funcion que se va a traer
// import isOdd from './../node_modules/is-odd/index.js';

console.log(isOdd('1'));