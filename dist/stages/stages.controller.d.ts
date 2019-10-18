import { StagesService } from './stages.service';
import { Stage } from './interfaces/stage.interface';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
export declare class StagesController {
    private readonly stagesService;
    constructor(stagesService: StagesService);
    findAll(): Promise<Stage[]>;
    create(createStage: CreateStageDto): Promise<Stage>;
    getStageById(stageId: string): Promise<Stage>;
    updateStageById(stageId: string, updateStage: UpdateStageDto): Promise<Stage>;
    deleteStageById(stageId: string): Promise<Stage>;
}
