import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RelativesService } from './relatives.service';
import { CreateRelativeDto } from './dto/create-relative.dto';
import { UpdateRelativeDto } from './dto/update-relative.dto';

@Controller('relatives')
export class RelativesController {
  constructor(private readonly relativesService: RelativesService) {}

  @Post()
  create(@Body() createRelativeDto: CreateRelativeDto) {
    return this.relativesService.create(createRelativeDto);
  }

  @Get()
  findAll() {
    return this.relativesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relativesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRelativeDto: UpdateRelativeDto,
  ) {
    return this.relativesService.update(+id, updateRelativeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relativesService.remove(+id);
  }
}
