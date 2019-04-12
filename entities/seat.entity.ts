import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SeatSchema } from "./seatSchema.entity";

@Entity()
export class Seat {
    constructor(seatSchema: SeatSchema = null) {
        this.seatSchema = seatSchema;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    seatSchemaId: number;

    @ManyToOne(type => SeatSchema, schema => schema.seats, {
        onDelete: 'CASCADE',
        nullable: true
    })
    seatSchema: SeatSchema;
}
