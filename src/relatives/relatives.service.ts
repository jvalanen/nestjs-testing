import { Injectable } from '@nestjs/common';
import { CreateRelativeDto } from './dto/create-relative.dto';
import { UpdateRelativeDto } from './dto/update-relative.dto';

@Injectable()
export class RelativesService {
  create(createRelativeDto: CreateRelativeDto) {
    return 'This action adds a new relative';
  }

  findAll() {
    return `This action returns all relatives`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relative`;
  }

  update(id: number, updateRelativeDto: UpdateRelativeDto) {
    return `This action updates a #${id} relative`;
  }

  remove(id: number) {
    return `This action removes a #${id} relative`;
  }
}
