"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const races_controller_1 = require("./races.controller");
const races_service_1 = require("./races.service");
const races_providers_1 = require("./races.providers");
const database_module_1 = require("../database/database.module");
const leagues_providers_1 = require("../leagues/leagues.providers");
let RacesModule = class RacesModule {
};
RacesModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [races_controller_1.RacesController],
        providers: [
            races_service_1.RacesService,
            ...races_providers_1.racesProviders,
            ...leagues_providers_1.leaguesProviders
        ]
    })
], RacesModule);
exports.RacesModule = RacesModule;
//# sourceMappingURL=races.module.js.map