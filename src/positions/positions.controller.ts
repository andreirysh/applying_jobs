import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PositionsService } from './positions.service';
import { Position } from '../entities/position.entity';

@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  @Get()
  findAll() {
    return this.positionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionsService.findOne(+id);
  }

  @Post()
  create(@Body() position: Position) {
    return this.positionsService.create(position);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() position: Position) {
    return this.positionsService.update(+id, position);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionsService.remove(+id);
  }
}
