import { Module } from '@nestjs/common';
import { LeaguesController } from './leagues.controller';
import { LeaguesService } from './leagues.service';
import { leaguesProviders } from './leagues.providers'
import { DatabaseModule } from '../database/database.module'
import { stagesProviders } from '../stages/stages.providers';
import { racesProviders } from '../races/races.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [LeaguesController],
  providers: [
    LeaguesService, 
    ...leaguesProviders,
    ...stagesProviders,
    ...racesProviders]
})
export class LeaguesModule {}
