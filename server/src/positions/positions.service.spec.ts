import { Test, TestingModule } from '@nestjs/testing';
import { PositionsService } from './positions.service';
import { Position } from '../entities/position.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const mockPositionRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('PositionsService', () => {
  let service: PositionsService;
  let repository: Repository<Position>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PositionsService,
        {
          provide: getRepositoryToken(Position),
          useFactory: mockPositionRepository,
        },
      ],
    }).compile();

    service = module.get<PositionsService>(PositionsService);
    repository = module.get<Repository<Position>>(getRepositoryToken(Position));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return an array of positions', async () => {
    const result = [new Position()];
    jest.spyOn(repository, 'find').mockResolvedValue(result);

    expect(await service.findAll()).toBe(result);
  });

  it('findOne should return a single position', async () => {
    const result = new Position();
    jest.spyOn(repository, 'findOne').mockResolvedValue(result);

    expect(await service.findOne(1)).toBe(result);
  });
});
