import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675452888107 implements MigrationInterface {
    name = 'default1675452888107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "panels_links" ("id" SERIAL NOT NULL, "panel_name" text NOT NULL, "panel_link" text NOT NULL, "created_by_user" text NOT NULL, CONSTRAINT "UQ_3d7f808dde821dab531755bdf46" UNIQUE ("panel_link"), CONSTRAINT "PK_4624df4b502969b49e5eb37a543" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "panels_links"`);
    }

}
