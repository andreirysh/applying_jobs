import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
export declare class ApplicationsController {
    private readonly applicationsService;
    constructor(applicationsService: ApplicationsService);
    findAll(): Promise<import("../entities/application.entity").Application[]>;
    findOne(id: string): Promise<import("../entities/application.entity").Application>;
    create(createApplicationDto: CreateApplicationDto): Promise<import("../entities/application.entity").Application>;
    update(id: string, updateApplicationDto: UpdateApplicationDto): Promise<import("../entities/application.entity").Application>;
    remove(id: string): Promise<void>;
}
