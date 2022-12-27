import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RelativesModule } from 'src/relatives/relatives.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RelativesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/relatives (GET)', () => {
    return request(app.getHttpServer())
      .get('/relatives')
      .expect(200)
      .expect('Hello World!');
  });
});
