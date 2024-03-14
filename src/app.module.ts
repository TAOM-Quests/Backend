import { Module,  Logger, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TestsModule } from './tests/tests.module';
import { ResultsModule } from './results/results.module';
import { CodeCompilerModule } from './code-compiler/code-compiler.module';
import { WinstonModule } from 'nest-winston';
import { LoggerMiddleware } from './helpers/middleware/logger';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.CONFIGURATION_MODE}.env`,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    WinstonModule.forRootAsync({
      useFactory: () => ({
      }),
      inject: [],
    }),
    ResultsModule,
    TestsModule,
    CodeCompilerModule,
  ],
  controllers: [],
  providers: [Logger, LoggerMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // Apply to all routes
  }
}
