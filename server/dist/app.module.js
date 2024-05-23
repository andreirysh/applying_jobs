"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const positions_module_1 = require("./positions/positions.module");
const candidates_module_1 = require("./candidates/candidates.module");
const applications_module_1 = require("./applications/applications.module");
const position_entity_1 = require("./entities/position.entity");
const candidate_entity_1 = require("./entities/candidate.entity");
const application_entity_1 = require("./entities/application.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'RAzs2525252525',
                database: 'job_app',
                entities: [position_entity_1.Position, candidate_entity_1.Candidate, application_entity_1.Application],
                synchronize: true,
            }),
            positions_module_1.PositionsModule,
            candidates_module_1.CandidatesModule,
            applications_module_1.ApplicationsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map