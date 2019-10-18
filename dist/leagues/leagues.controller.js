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
const leagues_service_1 = require("./leagues.service");
const roles_guargs_1 = require("../shared/roles.guargs");
const create_league_dto_1 = require("./dto/create-league.dto");
const update_league_dto_1 = require("./dto/update-league.dto");
const swagger_1 = require("@nestjs/swagger");
let LeaguesController = class LeaguesController {
    constructor(leaguesService) {
        this.leaguesService = leaguesService;
    }
    async findAll() {
        return this.leaguesService.findAll();
    }
    async create(createLeague) {
        return await this.leaguesService.create(createLeague);
    }
    async getSLeagueyId(leagueId) {
        return await this.leaguesService.getById(leagueId);
    }
    async updateLeagueById(leagueId, updateLeague) {
        return await this.leaguesService.updateById(leagueId, updateLeague);
    }
    async deleteLeagueById(leagueId) {
        return await this.leaguesService.deleteById(leagueId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeaguesController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    swagger_1.ApiCreatedResponse({ description: 'The record has been successfully create.', type: create_league_dto_1.CreateLeagueDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_league_dto_1.CreateLeagueDto]),
    __metadata("design:returntype", Promise)
], LeaguesController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiImplicitParam({ name: 'id' }),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeaguesController.prototype, "getSLeagueyId", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiImplicitParam({ name: 'id' }),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    swagger_1.ApiCreatedResponse({ description: 'The record has been successfully create.', type: update_league_dto_1.UpdateLeagueDto }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_league_dto_1.UpdateLeagueDto]),
    __metadata("design:returntype", Promise)
], LeaguesController.prototype, "updateLeagueById", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiImplicitParam({ name: 'id' }),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeaguesController.prototype, "deleteLeagueById", null);
LeaguesController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiUseTags('leagues'),
    common_1.Controller('leagues'),
    __metadata("design:paramtypes", [leagues_service_1.LeaguesService])
], LeaguesController);
exports.LeaguesController = LeaguesController;
//# sourceMappingURL=leagues.controller.js.map