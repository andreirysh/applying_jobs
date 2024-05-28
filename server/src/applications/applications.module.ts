import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { Application } from 'src/entities/application.entity';
import { Candidate } from 'src/entities/candidate.entity';
import { Position } from 'src/entities/position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Application, Candidate, Position])],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
