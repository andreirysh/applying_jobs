import { Repository } from 'typeorm';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from '../entities/application.entity';
export declare class ApplicationsService {
    private applicationsRepository;
    constructor(applicationsRepository: Repository<Application>);
    findAll(): Promise<Application[]>;
    findOne(id: number): Promise<Application>;
    create(createApplicationDto: CreateApplicationDto): Promise<Application>;
    update(id: number, updateApplicationDto: UpdateApplicationDto): Promise<Application>;
    remove(id: number): Promise<void>;
}
