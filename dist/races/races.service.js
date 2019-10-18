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
const mongoose_1 = require("mongoose");
let RacesService = class RacesService {
    constructor(raceModel, leagueModel) {
        this.raceModel = raceModel;
        this.leagueModel = leagueModel;
    }
    async findAll() {
        return await this.raceModel.find().exec();
    }
    async create(createRaceDto) {
        const race = new this.raceModel(createRaceDto);
        return await race.save();
    }
    async getById(idRace) {
        return await this.raceModel.findById(idRace);
    }
    async updateById(idRace, updateRaceDto) {
        return await this.raceModel.findByIdAndUpdate(idRace, updateRaceDto);
    }
    async deleteById(idRace) {
        return await this.raceModel.findByIdAndRemove(idRace);
    }
    async getStage(season) {
        const result = await this.leagueModel.aggregate([
            { $match: { season } },
            {
                $lookup: {
                    from: "stages",
                    localField: "_id",
                    foreignField: "league",
                    as: "league-stage"
                }
            },
            { $unwind: "$league-stage" },
            {
                $lookup: {
                    from: "races",
                    localField: "league-stage._id",
                    foreignField: "stage",
                    as: "race-stage"
                }
            },
            { $unwind: "$race-stage" }
        ]);
        return result;
    }
};
RacesService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('RACE_MODEL')),
    __param(1, common_1.Inject('LEAGUE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], RacesService);
exports.RacesService = RacesService;
//# sourceMappingURL=races.service.js.map