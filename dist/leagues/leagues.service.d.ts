import { Model } from 'mongoose';
import { CreateLeagueDto } from './dto/create-league.dto';
import { League } from './interfaces/league.interface';
import { Stage } from '../stages/interfaces/stage.interface';
import { Race } from '../races/interfaces/race.interface';
import { UpdateLeagueDto } from './dto/update-league.dto';
export declare class LeaguesService {
    private readonly leagueModel;
    private readonly stageModel;
    private readonly raceModel;
    constructor(leagueModel: Model<League>, stageModel: Model<Stage>, raceModel: Model<Race>);
    findAll(): Promise<League[]>;
    create(createRaceDto: CreateLeagueDto): Promise<League>;
    getById(idRace: string): Promise<League>;
    updateById(idRace: string, updateRaceDto: UpdateLeagueDto): Promise<League>;
    deleteById(idRace: string): Promise<League>;
}
