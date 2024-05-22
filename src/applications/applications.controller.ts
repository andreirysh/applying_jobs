import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { Application } from '../entities/application.entity';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get()
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationsService.findOne(+id);
  }

  @Post()
  create(@Body() application: Application) {
    return this.applicationsService.create(application);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() application: Application) {
    return this.applicationsService.update(+id, application);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationsService.remove(+id);
  }
}
