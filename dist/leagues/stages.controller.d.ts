import { StagesService } from './stages.service';
import { Stage } from './interfaces/stage.interface';
export declare class StagesController {
    private readonly stagesService;
    constructor(stagesService: StagesService);
    findAll(): Promise<Stage[]>;
    create(createStage: any): Promise<Stage>;
    getStageById(stageId: string): Promise<Stage>;
    updateStageById(stageId: string, updateStage: any): Promise<Stage>;
    deleteStageById(stageId: string): Promise<Stage>;
}
