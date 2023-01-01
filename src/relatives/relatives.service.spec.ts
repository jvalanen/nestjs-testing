import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
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

  it('should return value from database', async () => {
    const relative = await service.getRelative();
    expect(relative).toEqual('Jouni');
  });
});

describe('RelativesService', () => {
  let service: RelativesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RelativesService,
        {
          provide: getRepositoryToken(Relative),
          useValue: {
            findOneBy: jest.fn().mockResolvedValue({ id: 1, name: 'juuni' }),
          },
        },
      ],
    }).compile();

    service = module.get<RelativesService>(RelativesService);
  });

  it('should return mocked value', async () => {
    const relative = await service.getRelative();
    expect(relative).toEqual('juuni');
  });
});
