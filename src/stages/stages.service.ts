import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateStageDto } from './dto/create-stage.dto';
import { Stage } from './interfaces/stage.interface';
import { UpdateStageDto } from './dto/update-stage.dto';


@Injectable()
export class StagesService {
    constructor(@Inject('STAGE_MODEL') private readonly stageModel: Model<Stage>){}

    async findAll(): Promise<Stage[]> {
        return await this.stageModel.find().exec();
    }

    async create(createRaceDto: CreateStageDto) {
        const stage = new this.stageModel(createRaceDto);
        return await stage.save() 
    }
    async getById(idRace): Promise<Stage>{
        return await this.stageModel.findById(idRace.id)
    }
    async updateById(idRace, updateRaceDto: UpdateStageDto): Promise<Stage>{
        return await this.stageModel.findByIdAndUpdate(idRace.id, updateRaceDto)
    }
    async deleteById(idRace): Promise<Stage>{
        return await this.stageModel.findByIdAndRemove(idRace.id)
    }
}
