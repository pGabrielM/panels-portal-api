import { MigrationInterface, QueryRunner } from "typeorm";

export class default1676485968778 implements MigrationInterface {
    name = 'default1676485968778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel" ALTER COLUMN "sector_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel" ALTER COLUMN "category_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel" ALTER COLUMN "subcategory_id" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel" ALTER COLUMN "subcategory_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel" ALTER COLUMN "category_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel" ALTER COLUMN "sector_id" SET NOT NULL`);
    }

}
