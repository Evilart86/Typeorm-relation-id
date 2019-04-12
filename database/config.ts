import { SeatSchema } from "../entities/seatSchema.entity";
import { Seat } from "../entities/seat.entity";

const entities = [
    Seat,
    SeatSchema
];

export const connectionConfig: any = {
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