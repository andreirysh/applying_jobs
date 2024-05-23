import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationsService } from './applications.service';
import { Application } from '../entities/application.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const mockApplicationRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('ApplicationsService', () => {
  let service: ApplicationsService;
  let repository: Repository<Application>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApplicationsService,
        {
          provide: getRepositoryToken(Application),
          useFactory: mockApplicationRepository,
        },
      ],
    }).compile();

    service = module.get<ApplicationsService>(ApplicationsService);
    repository = module.get<Repository<Application>>(
      getRepositoryToken(Application),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return an array of applications', async () => {
    const result = [new Application()];
    jest.spyOn(repository, 'find').mockResolvedValue(result);

    expect(await service.findAll()).toBe(result);
  });

  it('findOne should return a single application', async () => {
    const result = new Application();
    jest.spyOn(repository, 'findOne').mockResolvedValue(result);

    expect(await service.findOne(1)).toBe(result);
  });
});
