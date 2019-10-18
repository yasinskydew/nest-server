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
const users_service_1 = require("./users.service");
const auth_guards_1 = require("../shared/auth.guards");
const roles_guargs_1 = require("../shared/roles.guargs");
const users_decorator_1 = require("./users.decorator");
const update_user_dto_1 = require("./dto/update-user.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAll() {
        return this.usersService.findAll();
    }
    async findProfile(user) {
        return await this.usersService.profile(user);
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    async login(loginUserDto) {
        return await this.usersService.login(loginUserDto);
    }
    async updateUser(currentUser, updateUser) {
        return await this.usersService.update(currentUser, updateUser);
    }
    async deleteUser(currentUser) {
        return await this.usersService.delete(currentUser);
    }
    async getUserById(userId) {
        return await this.usersService.getById(userId);
    }
    async getUserWithLeague(loginUser) {
        return await this.usersService.getLeague(loginUser);
    }
    async getUserWithRace(loginUser) {
        return await this.usersService.getRace(loginUser);
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get('me'),
    common_1.UseGuards(new auth_guards_1.AuthGuard()),
    __param(0, users_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findProfile", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiCreatedResponse({ description: 'The record has been successfully created.', type: create_user_dto_1.CreateUserDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Post('login'),
    swagger_1.ApiCreatedResponse({ description: 'The user has been successfully login.', type: login_user_dto_1.LoginUserDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    common_1.Put('me'),
    common_1.UseGuards(new auth_guards_1.AuthGuard()),
    swagger_1.ApiCreatedResponse({ description: 'The record has been successfully updated.', type: update_user_dto_1.UpdateUserDto }),
    __param(0, users_decorator_1.CurrentUser()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Delete('me'),
    common_1.UseGuards(new auth_guards_1.AuthGuard()),
    __param(0, users_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiImplicitParam({ name: 'id' }),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    common_1.Get('leagues/:loginUser'),
    swagger_1.ApiImplicitParam({ name: 'loginUser' }),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param('loginUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserWithLeague", null);
__decorate([
    common_1.Get('races/:loginUser'),
    swagger_1.ApiImplicitParam({ name: 'loginUser' }),
    common_1.UseGuards(new roles_guargs_1.AdminGuard()),
    __param(0, common_1.Param('loginUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserWithRace", null);
UsersController = __decorate([
    swagger_1.ApiUseTags('users'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map