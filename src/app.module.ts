import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Relative } from 'db/entity/relative.entity';
import { databaseConfig } from 'db/ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Relative]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
