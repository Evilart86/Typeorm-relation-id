"use strict";
exports.__esModule = true;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var config_1 = require("./database/config");
typeorm_1.createConnection(config_1.connectionConfig)
    .then(function (connection) {
    console.log('connected');
});
