import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.CONFIGURATION_MODE}.env`
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
