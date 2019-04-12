"use strict";
exports.__esModule = true;
var seatSchema_entity_1 = require("../entities/seatSchema.entity");
var seat_entity_1 = require("../entities/seat.entity");
var entities = [
    seat_entity_1.Seat,
    seatSchema_entity_1.SeatSchema
];
exports.connectionConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'typeormRelationId',
    entities: entities,
    synchronize: false,
    migrationsRun: true,
    logging: false
};
