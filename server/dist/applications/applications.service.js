"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const application_entity_1 = require("../entities/application.entity");
let ApplicationsService = class ApplicationsService {
    constructor(applicationsRepository) {
        this.applicationsRepository = applicationsRepository;
    }
    findAll() {
        return this.applicationsRepository.find();
    }
    findOne(id) {
        return this.applicationsRepository.findOne({ where: { id } });
    }
    async create(createApplicationDto) {
        const newApplication = this.applicationsRepository.create(createApplicationDto);
        return this.applicationsRepository.save(newApplication);
    }
    async update(id, updateApplicationDto) {
        await this.applicationsRepository.update(id, updateApplicationDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.applicationsRepository.delete(id);
    }
};
exports.ApplicationsService = ApplicationsService;
exports.ApplicationsService = ApplicationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(application_entity_1.Application)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ApplicationsService);
//# sourceMappingURL=applications.service.js.map