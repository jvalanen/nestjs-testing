import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Relative } from './entity/relative.entity';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nester',
  password: 'nester',
  database: 'nesting',
  entities: [Relative],
  synchronize: false,
};

export { databaseConfig };
