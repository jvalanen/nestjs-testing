import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Relative } from 'db/entity/relative.entity';
import { Repository } from 'typeorm';
import { CreateRelativeDto } from './dto/create-relative.dto';
import { UpdateRelativeDto } from './dto/update-relative.dto';

@Injectable()
export class RelativesService {
  constructor(
    @InjectRepository(Relative)
    private relativeRepository: Repository<Relative>,
  ) {}

  async getRelative(): Promise<string | null> {
    const relative = await this.relativeRepository.findOneBy({ id: 1 });
    console.log('hmm', relative);
    if (relative) {
      return relative.name;
    }
    return null;
  }

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
