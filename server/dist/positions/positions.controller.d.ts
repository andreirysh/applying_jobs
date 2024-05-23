import { PositionsService } from './positions.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
export declare class PositionsController {
    private readonly positionsService;
    constructor(positionsService: PositionsService);
    findAll(): Promise<import("../entities/position.entity").Position[]>;
    findOne(id: string): Promise<import("../entities/position.entity").Position>;
    create(createPositionDto: CreatePositionDto): Promise<import("../entities/position.entity").Position>;
    update(id: string, updatePositionDto: UpdatePositionDto): Promise<void>;
    remove(id: string): void;
}
