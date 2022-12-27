import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelativeTable1672117523563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE relative (id SERIAL PRIMARY KEY, name VARCHAR)',
    );

    await queryRunner.query(
      "INSERT INTO relative (id, name) VALUES (1, 'Jouni')",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE relative');
  }
}
