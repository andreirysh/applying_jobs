import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from '../entities/application.entity';
import { Candidate } from '../entities/candidate.entity';
import { Position } from '../entities/position.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,
    @InjectRepository(Position)
    private positionsRepository: Repository<Position>,
    @InjectRepository(Candidate)
    private candidatesRepository: Repository<Candidate>,
  ) {}

  async findAll(): Promise<Application[]> {
    return this.applicationsRepository.find();
  }

  async findOne(id: number): Promise<Application> {
    return this.applicationsRepository.findOne({
      where: { id },
      relations: ['position', 'candidate'],
    });
  }

  async create(
    createApplicationDto: CreateApplicationDto,
  ): Promise<Application> {
    const { positionId, candidateId, cv } = createApplicationDto;

    const position = await this.positionsRepository.findOne({
      where: { id: positionId },
    });
    const candidate = await this.candidatesRepository.findOne({
      where: { id: candidateId },
    });

    if (!position || !candidate) {
      throw new BadRequestException('Invalid positionId or candidateId');
    }

    const newApplication = this.applicationsRepository.create({
      position,
      candidate,
      cv,
    });

    return this.applicationsRepository.save(newApplication);
  }

  async update(
    id: number,
    updateApplicationDto: UpdateApplicationDto,
  ): Promise<Application> {
    await this.applicationsRepository.update(id, updateApplicationDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const application = await this.findOne(id);

    if (application.position || application.candidate) {
      throw new BadRequestException(
        'Cannot delete application with related position or candidate',
      );
    }

    await this.applicationsRepository.delete(id);
  }
}
