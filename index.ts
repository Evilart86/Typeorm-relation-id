import "reflect-metadata";
import { createConnection } from "typeorm";
import { connectionConfig } from "./database/config";
import { Seat } from "./entities/seat.entity";
import { SeatSchema } from "./entities/seatSchema.entity";

createConnection(connectionConfig)
    .then(async (connection) => {
        console.log('Database is connected');
        const seatRepository = connection.getRepository(Seat);
        const seatSchemaRepository = connection.getRepository(SeatSchema);
        const seatSchema = await seatSchemaRepository.save(new SeatSchema("Theater"));
        let seat = await seatRepository.save(new Seat(seatSchema));

        //try to find and save entity with relations
        let foundSeat = await seatRepository.findOne(
            seat.id,
            { relations: ['seatSchema'] }
        );
        showSchema(foundSeat);
        let seatAfterSave = await seatRepository.save(foundSeat);
        //you can see that seatSchema exists
        showSchema(seatAfterSave);

        //try to find and save entity without relations
        foundSeat = await seatRepository.findOne(
            seat.id
        );
        showSchema(foundSeat);
        seatAfterSave = await seatRepository.save(foundSeat);
        //now you can see that we lost seatSchema
        showSchema(seatAfterSave);

    });

let showSchema  = (seat: Seat) => {
    console.log(seat.seatSchema);
    console.log(seat.seatSchemaId);
};