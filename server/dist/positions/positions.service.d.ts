import { Repository } from 'typeorm';
import { Position } from '../entities/position.entity';
import { UpdatePositionDto } from './dto/update-position.dto';
import { CreatePositionDto } from './dto/create-position.dto';
export declare class PositionsService {
    private positionsRepository;
    constructor(positionsRepository: Repository<Position>);
    findAll(): Promise<Position[]>;
    findOne(id: number): Promise<Position>;
    create(createPositionDto: CreatePositionDto): Promise<Position>;
    update(id: number, updatePositionDto: UpdatePositionDto): Promise<void>;
    remove(id: number): Promise<void>;
}
