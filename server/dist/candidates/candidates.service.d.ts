import { Repository } from 'typeorm';
import { Candidate } from '../entities/candidate.entity';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
export declare class CandidatesService {
    private candidatesRepository;
    constructor(candidatesRepository: Repository<Candidate>);
    findAll(): Promise<Candidate[]>;
    findOne(id: number): Promise<Candidate>;
    create(createCandidateDto: CreateCandidateDto): Promise<Candidate>;
    update(id: number, updateCandidateDto: UpdateCandidateDto): Promise<void>;
    remove(id: number): Promise<void>;
}
