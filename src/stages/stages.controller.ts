import { Controller, Get, UseGuards, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { StagesService } from './stages.service';
import { AdminGuard } from '../shared/roles.guargs';
import { Stage } from './interfaces/stage.interface';


@Controller('stages')
export class StagesController {
    constructor(private readonly stagesService: StagesService){}

    @Get()
    async findAll(){
        return this.stagesService.findAll();
    }

    @Post()
    @UseGuards(new AdminGuard())
    async create(@Body() createStage): Promise<Stage> {
        return await this.stagesService.create(createStage);
    }
    @Get(':id')
    @UseGuards(new AdminGuard())
    async getStageById(@Param() stageId: string){
        return await this.stagesService.getById(stageId)
    }
    @Put(':id')
    @UseGuards(new AdminGuard())
    async updateStageById(@Param() stageId: string, @Body() updateStage){
        return await this.stagesService.updateById(stageId, updateStage)
    }
    @Delete(':id')
    @UseGuards(new AdminGuard())
    async deleteStageById(@Param() stageId: string){
        return await this.stagesService.deleteById(stageId)
    }   
}
