var a = 1;
global.a = 2;
console.log(a);
console.log(global.a);
let outer = require("./outer.js");
