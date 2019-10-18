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
    async getById(idStage: string): Promise<Stage>{
        return await this.stageModel.findById(idStage)
    }
    async updateById(idStage: string, updateStageDto: UpdateStageDto): Promise<Stage>{
        return await this.stageModel.findByIdAndUpdate(idStage, updateStageDto)
    }
    async deleteById(idStage: string): Promise<Stage>{
        const stage = await this.stageModel.findById(idStage)
        await this.raceModel.remove({stage: idStage}).exec();
        return await stage.remove()
    }
}
