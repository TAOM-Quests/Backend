import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.CONFIGURATION_MODE}.env`,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    TestsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
