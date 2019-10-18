import { LeaguesService } from './leagues.service';
import { League } from './interfaces/league.interface';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
export declare class LeaguesController {
    private readonly leaguesService;
    constructor(leaguesService: LeaguesService);
    findAll(): Promise<League[]>;
    create(createLeague: CreateLeagueDto): Promise<League>;
    getSLeagueyId(leagueId: string): Promise<League>;
    updateLeagueById(leagueId: string, updateLeague: UpdateLeagueDto): Promise<League>;
    deleteLeagueById(leagueId: string): Promise<League>;
}
