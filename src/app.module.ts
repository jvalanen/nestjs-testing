import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Relative } from 'db/entity/relative.entity';
import { databaseConfig } from 'db/ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenealogyService } from './genealogy/genealogy.service';
import { FamilyTreeModule } from './family-tree/family-tree.module';
import { RelativesModule } from './relatives/relatives.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Relative]),
    FamilyTreeModule,
    RelativesModule,
  ],
  controllers: [AppController],
  providers: [AppService, GenealogyService],
})
export class AppModule {}
