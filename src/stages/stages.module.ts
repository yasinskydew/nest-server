import { Module } from '@nestjs/common';
import { StagesController } from './stages.controller';
import { StagesService } from './stages.service';
import { stagesProviders } from './stages.providers'
import { DatabaseModule } from '../database/database.module'
import { racesProviders } from '../races/races.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [StagesController],
  providers: [
    StagesService, 
    ...stagesProviders,
    ...racesProviders]
})
export class StagesModule {}
