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
const stages_service_1 = require("./stages.service");
const roles_guargs_1 = require("../shared/roles.guargs");
let StagesController = class StagesController {
    constructor(stagesService) {
        this.stagesService = stagesService;
    }
    async findAll() {
        return this.stagesService.findAll();
    }
    async create(createStage) {
        return await this.stagesService.create(createStage);
    }
    async getStageById(stageId) {
        return await this.stagesService.getById(stageId);
    }
    async updateStageById(stageId, updateStage) {
        return await this.stagesService.updateById(stageId, updateStage);
    }
    async deleteStageById(stageId) {
        return await this.stagesService.deleteById(stageId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StagesController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StagesController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StagesController.prototype, "getStageById", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StagesController.prototype, "updateStageById", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StagesController.prototype, "deleteStageById", null);
StagesController = __decorate([
    common_1.Controller('stages'),
    __metadata("design:paramtypes", [stages_service_1.StagesService])
], StagesController);
exports.StagesController = StagesController;
//# sourceMappingURL=stages.controller.js.map