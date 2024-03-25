import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Group } from 'src/schemas/group.schema';
import { ISearch } from 'src/schemas/search.model';

@Controller('groups')
export class GroupsController {
  constructor(private _groupsService: GroupsService) {}

  @Get()
  getAll(): Promise<Group[]> {
    return this._groupsService.getAll();
  }

  @Get(':id')
  getByID(@Param('id') id: string): Promise<Group> {
    return this._groupsService.findByID(id);
  }

  @Post()
  getByParams(@Body() params: ISearch): Promise<Group[]> {
    return this._groupsService.getByParams(params);
  }
}
