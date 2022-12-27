import { Module } from '@nestjs/common';
import { FamilyTreeService } from './family-tree.service';
import { FamilyTreeController } from './family-tree.controller';

@Module({
  providers: [FamilyTreeService],
  controllers: [FamilyTreeController]
})
export class FamilyTreeModule {}
