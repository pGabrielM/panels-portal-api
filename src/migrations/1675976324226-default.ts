import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675976324226 implements MigrationInterface {
    name = 'default1675976324226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "panel_navbar" ("id" SERIAL NOT NULL, "name" text NOT NULL, "order" bigint NOT NULL, "created_by" text NOT NULL, "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), CONSTRAINT "PK_e44c3518c365647511a72832602" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "panel_navbar"`);
    }

}
