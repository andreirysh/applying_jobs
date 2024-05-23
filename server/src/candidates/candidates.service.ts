import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from '../entities/candidate.entity';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { ApplicationsService } from 'src/applications/applications.service';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate)
    private candidatesRepository: Repository<Candidate>,
    private readonly applicationsService: ApplicationsService,
  ) {}

  findAll(): Promise<Candidate[]> {
    return this.candidatesRepository.find();
  }

  findOne(id: number): Promise<Candidate> {
    return this.candidatesRepository.findOne({
      where: { id },
    });
  }

  create(createCandidateDto: CreateCandidateDto): Promise<Candidate> {
    const candidate = this.candidatesRepository.create(createCandidateDto);
    return this.candidatesRepository.save(candidate);
  }

  async update(
    id: number,
    updateCandidateDto: UpdateCandidateDto,
  ): Promise<void> {
    await this.candidatesRepository.update(id, updateCandidateDto);
  }

  async remove(id: number): Promise<void> {
    const candidate = await this.findOne(id);
    if (!candidate) {
      throw new NotFoundException('Candidate not found');
    }

    const applications = await this.applicationsService.findAll();
    const associatedApplications = applications.filter(
      (app) => app.candidate.id === id,
    );

    if (associatedApplications.length > 0) {
      throw new Error(
        'Cannot delete candidate. There are applications associated with them.',
      );
    }
    await this.candidatesRepository.delete(id);
  }
}
