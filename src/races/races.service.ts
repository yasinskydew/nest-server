import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Race } from './interfaces/race.interface';
import { League } from '../leagues/interfaces/league.interface';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from  './dto/update-race.dto';



@Injectable()
export class RacesService {
    constructor(
        @Inject('RACE_MODEL') private readonly raceModel: Model<Race>,
        @Inject('LEAGUE_MODEL') private readonly leagueModel: Model<League>
        ){}

    async findAll(): Promise<Race[]> {
        return await this.raceModel.find().exec();
    }

    async create(createRaceDto: CreateRaceDto) {
        const race = new this.raceModel(createRaceDto);
        return await race.save() 
    }
    async getById(idRace): Promise<Race>{
        return await this.raceModel.findById(idRace.id)
    }
    async updateById(idRace, updateRaceDto: UpdateRaceDto): Promise<Race>{
        return await this.raceModel.findByIdAndUpdate(idRace.id, updateRaceDto)
    }
    async deleteById(idRace): Promise<Race>{
        return await this.raceModel.findByIdAndRemove(idRace.id)
    }
    async getStage(seasonLeague){
        const {season} = seasonLeague             
        const result = await this.leagueModel.aggregate([
            {$match: {season}},
            {
                $lookup: {
                    from: "stages",
                    localField: "_id",
                    foreignField: "league",
                    as: "league-stage"
                }
            },
            {$unwind: "$league-stage"},
            {
                $lookup: {
                    from: "races",
                    localField: "league-stage._id",
                    foreignField: "stage",
                    as: "race-stage"
                }
            },
            {$unwind: "$race-stage"}
        ])
        return result
    }
    
}
