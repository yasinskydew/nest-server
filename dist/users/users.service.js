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
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService {
    constructor(userModel, leagueModel, raceModel) {
        this.userModel = userModel;
        this.leagueModel = leagueModel;
        this.raceModel = raceModel;
    }
    generateToken(user) {
        return jwt.sign({
            _id: user._id.toString(),
            login: user.login,
            role: user.role
        }, process.env.JWT_SECRET);
    }
    async create(createUserDto) {
        const user = new this.userModel(createUserDto);
        user.password = await bcrypt.hash(user.password, 8);
        return await user.save();
    }
    async findAll() {
        return await this.userModel.find().exec();
    }
    async login(loginUserDto) {
        const { login, password } = loginUserDto;
        const user = await this.userModel.findOne({ login });
        if (!user) {
            throw new Error('Unable user');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Unable to login');
        }
        const token = this.generateToken(user);
        await user.save();
        return { user, token };
    }
    async profile(CurrentUser) {
        return await this.userModel.findById(CurrentUser._id);
    }
    async update(currentUser, updateUser) {
        updateUser.password = await bcrypt.hash(updateUser.password, 8);
        return await this.userModel.findByIdAndUpdate(currentUser._id, updateUser);
    }
    async delete(currentUser) {
        const user = await this.userModel.findById(currentUser._id);
        await this.leagueModel.update({ users: user._id }, { $pull: { users: user._id } }, { multi: true })
            .exec();
        await this.raceModel.remove({ user: user._id })
            .exec();
        return user.remove();
    }
    async regLeague(currentUser, title) {
        const { _id } = currentUser;
        const league = await this.leagueModel.findOne({ title });
        if (!league) {
            throw new Error('unknown league');
        }
        const flag = league.users.every(el => el.toString() !== _id.toString());
        if (flag) {
            league.users.push(_id);
            await league.save();
            return { responce: "sucsessfully registrate" };
        }
        else {
            return { responce: "you was registrate" };
        }
    }
    async getById(idUser) {
        return await this.userModel.findById(idUser);
    }
    async getRace(login) {
        const result = await this.userModel.aggregate([
            { $match: { login: login } },
            {
                $lookup: {
                    from: "races",
                    localField: "_id",
                    foreignField: "user",
                    as: "race"
                }
            }
        ]);
        return result;
    }
    async getLeague(login) {
        const result = await this.userModel.aggregate([
            { $match: { login: login } },
            {
                $lookup: {
                    from: "leagues",
                    localField: "_id",
                    foreignField: "users",
                    as: "league"
                }
            }
        ]);
        return result;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('USER_MODEL')),
    __param(1, common_1.Inject('LEAGUE_MODEL')),
    __param(2, common_1.Inject('RACE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map