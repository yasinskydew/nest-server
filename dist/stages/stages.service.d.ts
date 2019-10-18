import { Model } from 'mongoose';
import { CreateStageDto } from './dto/create-stage.dto';
import { Stage } from './interfaces/stage.interface';
import { Race } from '../races/interfaces/race.interface';
import { UpdateStageDto } from './dto/update-stage.dto';
export declare class StagesService {
    private readonly stageModel;
    private readonly raceModel;
    constructor(stageModel: Model<Stage>, raceModel: Model<Race>);
    findAll(): Promise<Stage[]>;
    create(createStageDto: CreateStageDto): Promise<Stage>;
    getById(idStage: string): Promise<Stage>;
    updateById(idStage: string, updateStageDto: UpdateStageDto): Promise<Stage>;
    deleteById(idStage: string): Promise<Stage>;
}
