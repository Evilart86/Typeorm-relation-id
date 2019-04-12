"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var seatSchema_entity_1 = require("./seatSchema.entity");
var Seat = /** @class */ (function () {
    function Seat(seatSchema) {
        if (seatSchema === void 0) { seatSchema = null; }
        this.seatSchema = seatSchema;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Seat.prototype, "id");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], Seat.prototype, "seatSchemaId");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return seatSchema_entity_1.SeatSchema; }, function (schema) { return schema.seats; }, {
            onDelete: 'CASCADE',
            nullable: true
        })
    ], Seat.prototype, "seatSchema");
    Seat = __decorate([
        typeorm_1.Entity()
    ], Seat);
    return Seat;
}());
exports.Seat = Seat;
