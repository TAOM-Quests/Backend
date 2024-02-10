import { Module } from '@nestjs/common';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Result, ResultSchema } from 'src/schemas/result.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Result.name, schema: ResultSchema }])],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}
