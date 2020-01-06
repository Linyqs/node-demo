// 1.事件驱动
// const EventEmitter = require("events").EventEmitter;
// const emitter = new EventEmitter();
// emitter.on("clock", function(time) {
//   console.log(`${time}的闹钟已设好`);
// });
// emitter.emit("clock", "7:30");
// const Koa = require("koa");
// const app = new Koa();
// app.on("koa", function() {
//   console.log("在 Koa 中使用 EventEmitter");
// });
// app.emit("koa");
let http = require("http");
let server = http.createServer();
server.on("request", function(req, res) {
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  res.end("hello" + req.url);
  console.log(req.socket.remoteAddress, req.socket.remotePort);
});
server.listen("3000", function() {
  console.log("服务器已启动");
});
