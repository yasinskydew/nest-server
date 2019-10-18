import { RacesService } from './races.service';
import { Race } from './interfaces/race.interface';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
export declare class RacesController {
    private readonly racesService;
    constructor(racesService: RacesService);
    findAll(): Promise<Race[]>;
    create(createRace: CreateRaceDto): Promise<Race>;
    getRaceById(raceId: string): Promise<Race>;
    updateRaceById(raceId: string, updateRace: UpdateRaceDto): Promise<Race>;
    deleteRaceById(raceId: string): Promise<Race>;
    getRaceWithStage(seasonLeague: string): Promise<object>;
}
