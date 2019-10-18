"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const leagues_controller_1 = require("./leagues.controller");
const leagues_service_1 = require("./leagues.service");
const leagues_providers_1 = require("./leagues.providers");
const database_module_1 = require("../database/database.module");
const stages_providers_1 = require("../stages/stages.providers");
const races_providers_1 = require("../races/races.providers");
let LeaguesModule = class LeaguesModule {
};
LeaguesModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [leagues_controller_1.LeaguesController],
        providers: [
            leagues_service_1.LeaguesService,
            ...leagues_providers_1.leaguesProviders,
            ...stages_providers_1.stagesProviders,
            ...races_providers_1.racesProviders
        ]
    })
], LeaguesModule);
exports.LeaguesModule = LeaguesModule;
//# sourceMappingURL=leagues.module.js.map