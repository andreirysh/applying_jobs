import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position } from '../entities/position.entity';
import { UpdatePositionDto } from './dto/update-position.dto';
import { CreatePositionDto } from './dto/create-position.dto';

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
      relations: ['applications'],
    });
  }

  async create(createPositionDto: CreatePositionDto): Promise<Position> {
    const newPosition = this.positionsRepository.create(createPositionDto);
    return this.positionsRepository.save(newPosition);
  }

  async update(
    id: number,
    updatePositionDto: UpdatePositionDto,
  ): Promise<void> {
    await this.positionsRepository.update(id, updatePositionDto);
  }

  async remove(id: number): Promise<void> {
    const position = await this.findOne(id);

    if (!position) {
      throw new BadRequestException(`Position with id ${id} not found`);
    }

    if (position.applications && position.applications.length > 0) {
      throw new BadRequestException('Cannot delete position with applications');
    }

    await this.positionsRepository.delete(id);
  }
}
