import { Test, TestingModule } from '@nestjs/testing';
import { FamilyTreeModule } from './family-tree.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

describe('FamilyTreeController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, FamilyTreeModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/family-tree')
      .expect(200)
      .expect('Hello World!');
  });
});
