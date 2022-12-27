import { Module } from '@nestjs/common';
import { RelativesService } from './relatives.service';
import { RelativesController } from './relatives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Relative } from 'db/entity/relative.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Relative])],
  controllers: [RelativesController],
  providers: [RelativesService],
})
export class RelativesModule {}
