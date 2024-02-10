import { Body, Controller, Post } from '@nestjs/common';
import { ResultsService } from './results.service';
import { Result } from 'src/schemas/result.model';
import { Model } from 'mongoose';

@Controller('results')
export class ResultsController {
  constructor(private _resultsService: ResultsService) {}

  @Post('create')
  create(@Body() resultToCreate: Model<Result>): Promise<Result> {
    return this._resultsService.create(resultToCreate);
  }
}
