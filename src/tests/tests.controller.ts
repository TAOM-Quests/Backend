import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TestsService } from './tests.service';
import { Test } from 'src/schemas/test.schema';
import { ISearch } from 'src/schemas/search.model';

@Controller('tests')
export class TestsController {
  constructor(private _testsService: TestsService) {}

  @Get()
  getAll(): Promise<Test[]> {
    return this._testsService.getAll();
  }

  @Get()
  getByID(@Query('id') id: string): Promise<Test> {
    return this._testsService.findByID(id);
  }

  @Post()
  getByParams(@Body() params: ISearch): Promise<Test[]> {
    return this._testsService.getByParams(params);
  }
}
