import { Body, Controller, Post, Logger, Request } from '@nestjs/common';
import { ResultsService } from './results.service';
import { Result } from 'src/schemas/result.model';
import { Model } from 'mongoose';

@Controller('results')
export class ResultsController {
  constructor(private _resultsService: ResultsService, private readonly logger: Logger) {}

  @Post('create')
  create(@Body() resultToCreate: Model<Result>, @Request() req: Request): Promise<Result> {
    return this._resultsService.create(resultToCreate);
  }
}
