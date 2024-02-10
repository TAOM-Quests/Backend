import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Result } from 'src/schemas/result.model';

@Injectable()
export class ResultsService {
  constructor(@InjectModel(Result.name) private resultModel: Model<Result>) {}

  async create(resultToCreate: Model<Result>): Promise<Result> {
    return this.resultModel.create(resultToCreate);
  }
}
