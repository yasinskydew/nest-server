import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateLeagueDto } from './dto/create-league.dto';
import { League } from './interfaces/league.interface';
import { UpdateLeagueDto } from './dto/update-league.dto';


@Injectable()
export class LeaguesService {
    constructor(@Inject('LEAGUE_MODEL') private readonly leagueModel: Model<League>){}

    async findAll(): Promise<League[]> {
        return await this.leagueModel.find().exec();
    }

    async create(createRaceDto: CreateLeagueDto) {
        const league = new this.leagueModel(createRaceDto);
        return await league.save() 
    }
    async getById(idRace): Promise<League>{
        return await this.leagueModel.findById(idRace.id)
    }
    async updateById(idRace, updateRaceDto: UpdateLeagueDto): Promise<League>{
        return await this.leagueModel.findByIdAndUpdate(idRace.id, updateRaceDto)
    }
    async deleteById(idRace): Promise<League>{
        return await this.leagueModel.findByIdAndRemove(idRace.id)
    }
}
