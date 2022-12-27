import { Controller, Get } from '@nestjs/common';

@Controller('family-tree')
export class FamilyTreeController {
  @Get()
  showFamilyTree() {
    return 'jee';
  }
}
