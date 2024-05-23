import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
export declare class CandidatesController {
    private readonly candidatesService;
    constructor(candidatesService: CandidatesService);
    findAll(): Promise<import("../entities/candidate.entity").Candidate[]>;
    findOne(id: string): Promise<import("../entities/candidate.entity").Candidate>;
    create(createCandidateDto: CreateCandidateDto): Promise<import("../entities/candidate.entity").Candidate>;
    update(id: string, updateCandidateDto: UpdateCandidateDto): Promise<void>;
    remove(id: string): Promise<void>;
}
