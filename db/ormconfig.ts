import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nester',
  password: 'nester',
  database: 'nesting',
  entities: [],
  synchronize: false,
};

export { databaseConfig };
