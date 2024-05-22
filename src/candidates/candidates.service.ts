import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from '../entities/candidate.entity';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate)
    private candidatesRepository: Repository<Candidate>,
  ) {}

  findAll(): Promise<Candidate[]> {
    return this.candidatesRepository.find({ relations: ['applications'] });
  }

  findOne(id: number): Promise<Candidate> {
    return this.candidatesRepository.findOne({
      where: { id },
      relations: ['applications'],
    });
  }

  create(candidate: Candidate): Promise<Candidate> {
    return this.candidatesRepository.save(candidate);
  }

  async update(id: number, candidate: Candidate): Promise<void> {
    await this.candidatesRepository.update(id, candidate);
  }

  async remove(id: number): Promise<void> {
    await this.candidatesRepository.delete(id);
  }
}
