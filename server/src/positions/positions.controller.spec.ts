import { Test, TestingModule } from '@nestjs/testing';
import { PositionsController } from './positions.controller';
import { PositionsService } from './positions.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { PositionStatus } from './dto/enums/create-positions-enum';

describe('PositionsController', () => {
  let controller: PositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PositionsController],
      providers: [
        {
          provide: PositionsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({}),
            create: jest.fn().mockResolvedValue({}),
            update: jest.fn().mockResolvedValue({}),
            remove: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    controller = module.get<PositionsController>(PositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll should return an array of positions', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('findOne should return a single position', async () => {
    expect(await controller.findOne('1')).toEqual({});
  });

  it('create should return the created position', async () => {
    const dto: CreatePositionDto = {
      title: 'Test',
      status: PositionStatus.Open,
    };
    expect(await controller.create(dto)).toEqual({});
  });

  it('update should return the updated position', async () => {
    const dto: CreatePositionDto = {
      title: 'Test',
      status: PositionStatus.Open,
    };
    expect(await controller.update('1', dto)).toEqual({});
  });

  it('remove should return void', async () => {
    expect(await controller.remove('1')).toBeUndefined();
  });
});
