import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
