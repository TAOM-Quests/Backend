import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISearch } from 'src/schemas/search.model';
import { Group } from 'src/schemas/group.schema';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group.name) private groupModel: Model<Group>) {}

  async findByID(id: string): Promise<Group> {
    return this.groupModel.findById(id).exec();
  }

  async findOneByParams(params: ISearch): Promise<Group> {
    return this.groupModel.findOne(params).exec();
  }

  async getAll(): Promise<Group[]> {
    return this.groupModel.find().exec();
  }

  async getByParams(params: ISearch): Promise<Group[]> {
    const dbParams: object = {};
    params.search
      .filter((param) => param.operator === 'eq')
      .forEach((param) => {
        dbParams[param.field] = param.value;
      });

    return this.groupModel.find(dbParams).exec();
  }
}
