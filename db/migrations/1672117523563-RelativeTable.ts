import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelativeTable1672117523563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE relative (id integer PRIMARY KEY, name VARCHAR)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE relative');
  }
}

// INSERT INTO relative (id, name) VALUES (1, 'Jouni');
