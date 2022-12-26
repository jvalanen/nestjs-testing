import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Relative } from 'db/entity/relative.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Relative)
    private relativeRepository: Repository<Relative>,
  ) {}

  async getRelative(): Promise<string | null> {
    const relative = await this.relativeRepository.findOneBy({ id: 1 });
    if (relative) {
      return relative.name;
    }
    return null;
  }
}
