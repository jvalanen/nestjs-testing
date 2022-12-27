import { Module } from '@nestjs/common';
import { RelativesService } from './relatives.service';
import { RelativesController } from './relatives.controller';

@Module({
  controllers: [RelativesController],
  providers: [RelativesService]
})
export class RelativesModule {}
