import { MigrationInterface, QueryRunner } from "typeorm";

export class default1676480492355 implements MigrationInterface {
    name = 'default1676480492355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_subcategory" RENAME COLUMN "name" TO "subcategory_name"`);
        await queryRunner.query(`ALTER TABLE "panel_category" RENAME COLUMN "name" TO "category_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_category" RENAME COLUMN "category_name" TO "name"`);
        await queryRunner.query(`ALTER TABLE "panel_subcategory" RENAME COLUMN "subcategory_name" TO "name"`);
    }

}
