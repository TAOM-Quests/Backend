import { Controller, Param, Get } from '@nestjs/common';

@Controller('tests')
export class TestsController {
  @Get(':id')
  findByID(@Param() params: any) {}
}
