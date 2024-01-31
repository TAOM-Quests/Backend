import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISearch } from 'src/schemas/search.model';
import { Test } from 'src/schemas/test.schema';

@Injectable()
export class TestsService {
  constructor(@InjectModel(Test.name) private testModel: Model<Test>) {}

  async findByID(id: string): Promise<Test> {
    return this.testModel.findById(id).exec();
  }

  async findOneByParams(params: ISearch): Promise<Test> {
    return this.testModel.findOne(params).exec();
  }

  async getAll(): Promise<Test[]> {
    return this.testModel.find().exec();
  }

  async getByParams(params: ISearch): Promise<Test[]> {
    return this.testModel.find(params).exec();
  }
}
