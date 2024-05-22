import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position } from '../entities/position.entity';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(Position)
    private positionsRepository: Repository<Position>,
  ) {}

  findAll(): Promise<Position[]> {
    return this.positionsRepository.find();
  }

  findOne(id: number): Promise<Position> {
    return this.positionsRepository.findOne({
      where: { id },
    });
  }

  create(position: Position): Promise<Position> {
    return this.positionsRepository.save(position);
  }

  async update(id: number, position: Position): Promise<void> {
    await this.positionsRepository.update(id, position);
  }

  async remove(id: number): Promise<void> {
    await this.positionsRepository.delete(id);
  }
}
