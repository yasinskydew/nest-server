import { Model } from 'mongoose';
import { CreateStageDto } from './dto/create-stage.dto';
import { Stage } from './interfaces/stage.interface';
import { UpdateStageDto } from './dto/update-stage.dto';
export declare class StagesService {
    private readonly stageModel;
    constructor(stageModel: Model<Stage>);
    findAll(): Promise<Stage[]>;
    create(createRaceDto: CreateStageDto): Promise<Stage>;
    getById(idRace: any): Promise<Stage>;
    updateById(idRace: any, updateRaceDto: UpdateStageDto): Promise<Stage>;
    deleteById(idRace: any): Promise<Stage>;
}
