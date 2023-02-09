import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675967014343 implements MigrationInterface {
    name = 'default1675967014343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "panels" ("id" SERIAL NOT NULL, "name" text NOT NULL, "link" text NOT NULL, "status" text NOT NULL, "order" bigint NOT NULL, "created_by" text NOT NULL, "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), CONSTRAINT "PK_28351db7a5287474802f65f837b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "panels"`);
    }

}
