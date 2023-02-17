import { MigrationInterface, QueryRunner } from "typeorm";

export class default1676657198562 implements MigrationInterface {
    name = 'default1676657198562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_sector" RENAME COLUMN "name" TO "sector_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_sector" RENAME COLUMN "sector_name" TO "name"`);
    }

}
