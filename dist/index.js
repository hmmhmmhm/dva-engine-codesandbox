"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = tslib_1.__importDefault(require("http"));
//create a server object:
http_1.default
    .createServer(function (req, res) {
    res.write("WOW22! Hello World!"); //write a response to the client
    res.end(); //end the response
})
    .listen(8080); //the server object listens on port 8080
