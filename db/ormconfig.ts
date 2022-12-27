import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nester',
  password: 'nester',
  database: 'nesting',
  entities: [__dirname + '/**/entity/**/*.entity.{js,ts}'],
  migrations: [__dirname + '/**/migrations/**/*.{js,ts}'],
  migrationsRun: true,
  synchronize: false,
};

export { databaseConfig };
