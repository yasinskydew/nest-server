import { Model } from 'mongoose';
import { Race } from './interfaces/race.interface';
import { League } from '../leagues/interfaces/league.interface';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
export declare class RacesService {
    private readonly raceModel;
    private readonly leagueModel;
    constructor(raceModel: Model<Race>, leagueModel: Model<League>);
    findAll(): Promise<Race[]>;
    create(createRaceDto: CreateRaceDto): Promise<Race>;
    getById(idRace: string): Promise<Race>;
    updateById(idRace: string, updateRaceDto: UpdateRaceDto): Promise<Race>;
    deleteById(idRace: string): Promise<Race>;
    getStage(season: string): Promise<any[]>;
}
