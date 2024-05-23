import { Test, TestingModule } from '@nestjs/testing';
import { CandidatesService } from './candidates.service';
import { Candidate } from '../entities/candidate.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const mockCandidateRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('CandidatesService', () => {
  let service: CandidatesService;
  let repository: Repository<Candidate>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CandidatesService,
        {
          provide: getRepositoryToken(Candidate),
          useFactory: mockCandidateRepository,
        },
      ],
    }).compile();

    service = module.get<CandidatesService>(CandidatesService);
    repository = module.get<Repository<Candidate>>(
      getRepositoryToken(Candidate),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return an array of candidates', async () => {
    const result = [new Candidate()];
    jest.spyOn(repository, 'find').mockResolvedValue(result);

    expect(await service.findAll()).toBe(result);
  });

  it('findOne should return a single candidate', async () => {
    const result = new Candidate();
    jest.spyOn(repository, 'findOne').mockResolvedValue(result);

    expect(await service.findOne(1)).toBe(result);
  });
});
