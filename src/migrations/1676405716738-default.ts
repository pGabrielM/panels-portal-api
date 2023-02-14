import { MigrationInterface, QueryRunner } from "typeorm";

export class default1676405716738 implements MigrationInterface {
    name = 'default1676405716738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "panel_subcategory" ("subcategory_id" SERIAL NOT NULL, "name" text NOT NULL, "order" bigint NOT NULL, "category_id" bigint NOT NULL, "status" text NOT NULL, CONSTRAINT "PK_aee12e209fc3cf751f290dd2ca6" PRIMARY KEY ("subcategory_id"))`);
        await queryRunner.query(`CREATE TABLE "panel_category" ("category_id" SERIAL NOT NULL, "name" text NOT NULL, "order" bigint NOT NULL, "sector_id" bigint NOT NULL, "status" text NOT NULL, CONSTRAINT "PK_7c8eea9d719c15919fb84a2dcfa" PRIMARY KEY ("category_id"))`);
        await queryRunner.query(`CREATE TABLE "panel" ("panel_id" SERIAL NOT NULL, "panel_name" text NOT NULL, "panel_link" text NOT NULL, "order" bigint NOT NULL, "sector_id" bigint NOT NULL, "category_id" bigint NOT NULL, "subcategory_id" bigint NOT NULL, "status" text NOT NULL, "created_by" text NOT NULL, "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), CONSTRAINT "PK_e94606acde364a9f424fbc3ca09" PRIMARY KEY ("panel_id"))`);
        await queryRunner.query(`CREATE TABLE "panel_sector" ("sector_id" SERIAL NOT NULL, "name" text NOT NULL, "order" bigint NOT NULL, "status" text NOT NULL, CONSTRAINT "PK_8a23403a76811769606e4be76c2" PRIMARY KEY ("sector_id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "username" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "panel_sector"`);
        await queryRunner.query(`DROP TABLE "panel"`);
        await queryRunner.query(`DROP TABLE "panel_category"`);
        await queryRunner.query(`DROP TABLE "panel_subcategory"`);
    }

}
