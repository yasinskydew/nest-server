import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateStageDto } from './dto/create-stage.dto';
import { Stage } from './interfaces/stage.interface';
import { Race } from '../races/interfaces/race.interface';
import { UpdateStageDto } from './dto/update-stage.dto';


@Injectable()
export class StagesService {
    constructor(
        @Inject('STAGE_MODEL') private readonly stageModel: Model<Stage>,
        @Inject('RACE_MODEL') private readonly raceModel: Model<Race>
    ){}

    async findAll(): Promise<Stage[]> {
        return await this.stageModel.find().exec();
    }

    async create(createStageDto: CreateStageDto) {
        const stage = new this.stageModel(createStageDto);
        return await stage.save() 
    }
    async getById(idStage): Promise<Stage>{
        return await this.stageModel.findById(idStage.id)
    }
    async updateById(idStage, updateStageDto: UpdateStageDto): Promise<Stage>{
        return await this.stageModel.findByIdAndUpdate(idStage.id, updateStageDto)
    }
    async deleteById(idStage): Promise<Stage>{
        const stage = await this.stageModel.findById(idStage.id)
        await this.raceModel.remove({stage: idStage.id}).exec();
        return await stage.remove()
    }
}
