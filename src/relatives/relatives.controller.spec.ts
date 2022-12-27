import { Test, TestingModule } from '@nestjs/testing';
import { RelativesController } from './relatives.controller';
import { RelativesService } from './relatives.service';

describe('RelativesController', () => {
  let controller: RelativesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelativesController],
      providers: [RelativesService],
    }).compile();

    controller = module.get<RelativesController>(RelativesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
