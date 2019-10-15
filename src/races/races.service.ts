import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Race } from './interfaces/race.interface';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';



@Injectable()
export class RacesService {
    constructor(@Inject('RACE_MODEL') private readonly raceModel: Model<Race>){}

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
    async updateById(idRace, updateRaceDto: UpdateUserDto): Promise<Race>{
        return await this.raceModel.findByIdAndUpdate(idRace.id, updateRaceDto)
    }
    async deleteById(idRace): Promise<Race>{
        return await this.raceModel.findByIdAndRemove(idRace.id)
    }
}
