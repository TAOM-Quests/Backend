import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import { createLogger } from 'winston';
import * as winston from 'winston'
import { LoggerMiddleware } from './helpers/middleware/logger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const instance = createLogger({
    levels: winston.config.npm.levels,
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance,
    }),
  });

  app.setGlobalPrefix('api');
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });
  await app.listen(process.env.PORT, () =>
    console.log(
      `Server run on ${process.env.PORT} in ${process.env.CONFIGURATION_MODE} mode`,
    ),
  );
}
bootstrap();
