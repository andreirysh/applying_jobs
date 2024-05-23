import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from '../entities/application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,
  ) {}

  findAll(): Promise<Application[]> {
    return this.applicationsRepository.find();
  }

  findOne(id: number): Promise<Application> {
    return this.applicationsRepository.findOne({ where: { id } });
  }

  async create(
    createApplicationDto: CreateApplicationDto,
  ): Promise<Application> {
    const newApplication =
      this.applicationsRepository.create(createApplicationDto);
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
    const applications = await this.applicationsRepository.find({
      where: { position: { id } },
    });

    if (applications.length === 0) {
      throw new NotFoundException(
        'Cannot delete position. There are no applications associated with it.',
      );
    }
    await this.applicationsRepository.delete(id);
  }
}
