import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { Candidate } from '../entities/candidate.entity';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  findAll() {
    return this.candidatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidatesService.findOne(+id);
  }

  @Post()
  create(@Body() candidate: Candidate) {
    return this.candidatesService.create(candidate);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() candidate: Candidate) {
    return this.candidatesService.update(+id, candidate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidatesService.remove(+id);
  }
}
