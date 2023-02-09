import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675977471862 implements MigrationInterface {
    name = 'default1675977471862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "panel" ("id" SERIAL NOT NULL, "panel_name" text NOT NULL, "link" text NOT NULL, "status" text NOT NULL, "order" bigint NOT NULL, "created_by" text NOT NULL, "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), CONSTRAINT "PK_bbd5674b69f7448974aa41ab347" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "panel_navbar" ("id" SERIAL NOT NULL, "name" text NOT NULL, "order" bigint NOT NULL, "created_by" text NOT NULL, "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), CONSTRAINT "PK_e44c3518c365647511a72832602" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "username" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "panel_navbar"`);
        await queryRunner.query(`DROP TABLE "panel"`);
    }

}
