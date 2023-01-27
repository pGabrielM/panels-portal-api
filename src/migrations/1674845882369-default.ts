import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674845882369 implements MigrationInterface {
    name = 'default1674845882369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "panels_links" ("id" SERIAL NOT NULL, "name" text NOT NULL, "link" text NOT NULL, "user" text NOT NULL, CONSTRAINT "UQ_b85218c7c2fd3b1f756066eb06e" UNIQUE ("link"), CONSTRAINT "PK_4624df4b502969b49e5eb37a543" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "panels_links"`);
    }

}
