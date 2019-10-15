import { Module } from '@nestjs/common';
import { LeaguesController } from './leagues.controller';
import { LeaguesService } from './leagues.service';
import { leaguesProviders } from './leagues.providers'
import { DatabaseModule } from '../database/database.module'


@Module({
  imports: [DatabaseModule],
  controllers: [LeaguesController],
  providers: [LeaguesService, ...leaguesProviders]
})
export class LeaguesModule {}
