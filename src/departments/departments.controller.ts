import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { Department } from 'src/schemas/department.schema';
import { ISearch } from 'src/schemas/search.model';

@Controller('departments')
export class DepartmentsController {
  constructor(private _departmentsService: DepartmentsService) {}

  @Get()
  getAll(): Promise<Department[]> {
    return this._departmentsService.getAll();
  }

  @Get(':id')
  getByID(@Param('id') id: string): Promise<Department> {
    return this._departmentsService.findByID(id);
  }

  @Post()
  getByParams(@Body() params: ISearch): Promise<Department[]> {
    return this._departmentsService.getByParams(params);
  }
}
