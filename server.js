// Dependencies

const routes = require("./controllers/burger.controller");
const expressHandlebars = require("express-handlebars");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static("public"));
server.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

server.use(routes);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});