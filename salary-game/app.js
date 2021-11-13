var express = require("express");
var app = express();
app.use(express.static("public")).listen(8080);
console.log('Sever is running at http://127.0.0.1:8080/');