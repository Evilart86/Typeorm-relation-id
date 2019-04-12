import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1555071769707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "seat_schema" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_225d42efef6aa377f0d53939d5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "seat" ("id" SERIAL NOT NULL, "seatSchemaId" integer, CONSTRAINT "PK_4e72ae40c3fbd7711ccb380ac17" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "seat" ADD CONSTRAINT "FK_83b89ffa912f5af03a4dd7b11b4" FOREIGN KEY ("seatSchemaId") REFERENCES "seat_schema"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "seat" DROP CONSTRAINT "FK_83b89ffa912f5af03a4dd7b11b4"`);
        await queryRunner.query(`DROP TABLE "seat"`);
        await queryRunner.query(`DROP TABLE "seat_schema"`);
    }

}
