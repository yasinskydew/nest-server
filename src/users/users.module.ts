import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../database/database.module';
import { leaguesProviders } from '../leagues/leagues.providers';
import { racesProviders } from '../races/races.providers';

@Module({
  imports : [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, 
    ...usersProviders,
    ...leaguesProviders,
    ...racesProviders]
})
export class UsersModule {}