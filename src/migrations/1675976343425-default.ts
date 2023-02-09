import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675976343425 implements MigrationInterface {
    name = 'default1675976343425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "panel" ("id" SERIAL NOT NULL, "name" text NOT NULL, "link" text NOT NULL, "status" text NOT NULL, "order" bigint NOT NULL, "created_by" text NOT NULL, "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), CONSTRAINT "PK_bbd5674b69f7448974aa41ab347" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "panel"`);
    }

}
