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
const common_1 = require("@nestjs/common");
const races_service_1 = require("./races.service");
const roles_guargs_1 = require("../shared/roles.guargs");
const create_race_dto_1 = require("./dto/create-race.dto");
const update_race_dto_1 = require("./dto/update-race.dto");
const swagger_1 = require("@nestjs/swagger");
let RacesController = class RacesController {
    constructor(racesService) {
        this.racesService = racesService;
    }
    async findAll() {
        return this.racesService.findAll();
    }
    async create(createRace) {
        return await this.racesService.create(createRace);
    }
    async getRaceById(raceId) {
        return await this.racesService.getById(raceId);
    }
    async updateRaceById(raceId, updateRace) {
        return await this.racesService.updateById(raceId, updateRace);
    }
    async deleteRaceById(raceId) {
        return await this.racesService.deleteById(raceId);
    }
    async getRaceWithStage(seasonLeague) {
        return await this.racesService.getStage(seasonLeague);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RacesController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    swagger_1.ApiCreatedResponse({ description: 'The record has been successfully created.', type: create_race_dto_1.CreateRaceDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_race_dto_1.CreateRaceDto]),
    __metadata("design:returntype", Promise)
], RacesController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiImplicitParam({ name: 'id' }),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RacesController.prototype, "getRaceById", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiImplicitParam({ name: 'id' }),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    swagger_1.ApiCreatedResponse({ description: 'The record has been successfully updated.', type: update_race_dto_1.UpdateRaceDto }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_race_dto_1.UpdateRaceDto]),
    __metadata("design:returntype", Promise)
], RacesController.prototype, "updateRaceById", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiImplicitParam({ name: 'id' }),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RacesController.prototype, "deleteRaceById", null);
__decorate([
    common_1.Get('league/:seasonLeague'),
    swagger_1.ApiImplicitParam({ name: 'season', enum: ['Winter', 'Spring', "Autumn", "Summer"] }),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param('seasonLeague')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RacesController.prototype, "getRaceWithStage", null);
RacesController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiUseTags('races'),
    common_1.Controller('races'),
    __metadata("design:paramtypes", [races_service_1.RacesService])
], RacesController);
exports.RacesController = RacesController;
//# sourceMappingURL=races.controller.js.map