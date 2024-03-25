import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISearch } from 'src/schemas/search.model';
import { Department } from 'src/schemas/department.schema';

@Injectable()
export class DepartmentsService {
  constructor(@InjectModel(Department.name) private departmentModel: Model<Department>) {}

  async findByID(id: string): Promise<Department> {
    return this.departmentModel.findById(id).exec();
  }

  async findOneByParams(params: ISearch): Promise<Department> {
    return this.departmentModel.findOne(params).exec();
  }

  async getAll(): Promise<Department[]> {
    return this.departmentModel.find().exec();
  }

  async getByParams(params: ISearch): Promise<Department[]> {
    const dbParams: object = {};
    params.search
      .filter((param) => param.operator === 'eq')
      .forEach((param) => {
        dbParams[param.field] = param.value;
      });

    return this.departmentModel.find(dbParams).exec();
  }
}
