import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from 'src/schemas/test.schema';

@Injectable()
export class TestsService {
  constructor(@InjectModel(Test.name) private testModel: Model<Test>) {}

  async findByID(id: string): Promise<Test> {
    return this.testModel.findById(id).exec();
  }
}
