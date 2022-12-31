import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RelativesModule } from 'src/relatives/relatives.module';
import { databaseConfig } from 'db/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(databaseConfig), RelativesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    app.close();
  });

  it('/relatives (GET)', () => {
    return request(app.getHttpServer())
      .get('/relatives')
      .expect(200)
      .expect('Jouni!');
  });
});
