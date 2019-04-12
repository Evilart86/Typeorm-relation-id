import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Seat } from "./seat.entity";

@Entity()
export class SeatSchema {
    constructor(name: string = '') {
        this.name = name;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Seat, seat => seat.seatSchema)
    seats: Seat[];
}