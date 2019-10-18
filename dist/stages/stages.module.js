"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const stages_controller_1 = require("./stages.controller");
const stages_service_1 = require("./stages.service");
const stages_providers_1 = require("./stages.providers");
const database_module_1 = require("../database/database.module");
const races_providers_1 = require("../races/races.providers");
let StagesModule = class StagesModule {
};
StagesModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [stages_controller_1.StagesController],
        providers: [
            stages_service_1.StagesService,
            ...stages_providers_1.stagesProviders,
            ...races_providers_1.racesProviders
        ]
    })
], StagesModule);
exports.StagesModule = StagesModule;
//# sourceMappingURL=stages.module.js.map