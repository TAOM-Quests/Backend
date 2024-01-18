import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.CONFIGURATION_MODE}.env`,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
