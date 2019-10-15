import { Module } from '@nestjs/common';
import { StagesController } from './stages.controller';
import { StagesService } from './stages.service';
import { stagesProviders } from './stages.providers'
import { DatabaseModule } from '../database/database.module'


@Module({
  imports: [DatabaseModule],
  controllers: [StagesController],
  providers: [StagesService, ...stagesProviders]
})
export class StagesModule {}
