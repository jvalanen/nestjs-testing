import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Relative } from 'db/entity/relative.entity';
import { databaseConfig } from 'db/ormconfig';
import { RelativesService } from './relatives.service';

describe('RelativesService', () => {
  let service: RelativesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(databaseConfig),
        TypeOrmModule.forFeature([Relative]),
      ],
      providers: [RelativesService],
    }).compile();

    service = module.get<RelativesService>(RelativesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
