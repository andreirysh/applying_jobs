import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionsController } from './positions.controller'; // Импорт контроллера PositionsController
import { PositionsService } from './positions.service'; // Импорт сервиса PositionsService
import { Position } from 'src/entities/position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Position])],
  controllers: [PositionsController],
  providers: [PositionsService],
})
export class PositionsModule {}
