import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipes';
import {
  ENVIRONMENT,
  ENVS_ALLOW_DOCS,
  SERVER_PORT,
  URL_PREFIX,
} from './constants';
import { configSwagger } from './docs';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  // global nest setup
  app.useGlobalPipes(new ValidationPipe());

  // Starts listening to shutdown hooks
  app.enableShutdownHooks();

  // config
  app.setGlobalPrefix(URL_PREFIX);

  // swagger
  ENVS_ALLOW_DOCS.includes(ENVIRONMENT) && configSwagger(app);

  await app.listen(SERVER_PORT);
  console.log(`Application is running on ${SERVER_PORT}`);
}
bootstrap();
