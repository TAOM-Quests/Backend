import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TestsModule } from './tests/tests.module';
import { ResultsModule } from './results/results.module';
import { CodeCompilerModule } from './code-compiler/code-compiler.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.CONFIGURATION_MODE}.env`,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    TestsModule,
    ResultsModule,
    CodeCompilerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
