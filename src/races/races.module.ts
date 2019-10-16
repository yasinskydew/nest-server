import { Module } from '@nestjs/common';
import { RacesController } from './races.controller';
import { RacesService } from './races.service';
import { racesProviders } from './races.providers';
import { DatabaseModule } from '../database/database.module'
import { leaguesProviders } from '../leagues/leagues.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RacesController],
  providers: [
    RacesService, 
    ...racesProviders,
    ...leaguesProviders]
})
export class RacesModule {}
