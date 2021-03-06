var express = require("./gloo/express");
var config = require("./config");

var app = express();
require("./gloo/routes")(app);

app.listen(config.port);
// Not using debug because it's always nice to know stuff's started running.
console.log("Server running on port: " + config.port);
