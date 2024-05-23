import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from '../entities/candidate.entity';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate)
    private candidatesRepository: Repository<Candidate>,
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
    await this.candidatesRepository.delete(id);
    return;
  }
}
