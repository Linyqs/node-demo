"use strict";
let fs = require("fs");
// fs.readFile("./docs/sample1.txt", function(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// let data = fs.readFileSync("./docs/sample1.txt", "utf-8");
// console.log(data);
let data = "i am content";
let data2 = "\ni am content2";
// fs.writeFile("./docs/sample2.txt", data, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("everything is ok");
//   }
// });
// fs.appendFile("./docs/sample2.txt", data2, function(err) {
//   if (err) {
//     return console.log(err);
//   }
// });
fs.writeFileSync("./docs/sample2.txt", data);
fs.appendFileSync("./docs/sample2.txt", data2);

// let fread = fs.openSync("./docs/sample2.txt", "w");
// console.log(fread);
// fs.writeFileSync(fread, data2);
// fs.closeSync(fread);
