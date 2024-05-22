import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from '../entities/application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,
  ) {}

  findAll(): Promise<Application[]> {
    return this.applicationsRepository.find({
      relations: ['position', 'candidate'],
    });
  }

  findOne(id: number): Promise<Application> {
    return this.applicationsRepository.findOne({
      where: { id },
      relations: ['position', 'candidate'],
    });
  }

  create(application: Application): Promise<Application> {
    return this.applicationsRepository.save(application);
  }

  async update(id: number, application: Application): Promise<void> {
    await this.applicationsRepository.update(id, application);
  }

  async remove(id: number): Promise<void> {
    await this.applicationsRepository.delete(id);
  }
}
