import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RacesModule } from './races/races.module';
import { StagesModule } from './stages/stages.module';
import { LeaguesModule } from './leagues/leagues.module';


@Module({
  imports: [UsersModule, RacesModule, StagesModule, LeaguesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
