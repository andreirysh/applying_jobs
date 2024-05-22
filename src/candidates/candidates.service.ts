import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCandidateDto } from './dto/create-candidate.dto'; // Импортируем DTO для создания
import { UpdateCandidateDto } from './dto/update-candidate.dto'; // Импортируем DTO для обновления
import { Candidate } from 'src/entities/candidate.entity';

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
    return this.candidatesRepository.findOne({ where: { id } });
  }

  async create(createCandidateDto: CreateCandidateDto): Promise<Candidate> {
    const newCandidate = this.candidatesRepository.create(createCandidateDto);
    return this.candidatesRepository.save(newCandidate);
  }

  async update(
    id: number,
    updateCandidateDto: UpdateCandidateDto,
  ): Promise<Candidate> {
    await this.candidatesRepository.update(id, updateCandidateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.candidatesRepository.delete(id);
  }
}
