import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateLeagueDto } from './dto/create-league.dto';
import { League } from './interfaces/league.interface';
import { Stage } from '../stages/interfaces/stage.interface'
import { Race } from '../races/interfaces/race.interface';
import { UpdateLeagueDto } from './dto/update-league.dto';


@Injectable()
export class LeaguesService {
    constructor(
        @Inject('LEAGUE_MODEL') private readonly leagueModel: Model<League>,
        @Inject('STAGE_MODEL') private readonly stageModel: Model<Stage>,
        @Inject('RACE_MODEL') private readonly raceModel: Model<Race>
    ){}

    async findAll(): Promise<League[]> {
        return await this.leagueModel.find().exec();
    }

    async create(createRaceDto: CreateLeagueDto) {
        const league = new this.leagueModel(createRaceDto);
        return await league.save() 
    }
    async getById(idRace: string): Promise<League>{
        return await this.leagueModel.findById(idRace)
    }
    async updateById(idRace: string, updateRaceDto: UpdateLeagueDto): Promise<League>{
        return await this.leagueModel.findByIdAndUpdate(idRace, updateRaceDto)
    }
    async deleteById(idRace: string): Promise<League>{
        const league =  this.leagueModel.findById(idRace);
        const stages = await this.stageModel.find({league:idRace})
        stages.forEach( async (element)  => await this.raceModel.remove({stage: element._id}).exec());
        await this.stageModel.remove({league:idRace}).exec();
        return league.remove()
    }
}
