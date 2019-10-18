import { Controller, Get, UseGuards, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { StagesService } from './stages.service';
import { AdminGuard } from '../shared/roles.guargs';
import { Stage } from './interfaces/stage.interface';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto'
import { ApiUseTags, ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('stages')
@Controller('stages')
export class StagesController {
    constructor(private readonly stagesService: StagesService){}

    @Get()
    @UseGuards(new AdminGuard())
    async findAll(){
        return this.stagesService.findAll();
    }

    @Post()
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: CreateStageDto })
    @UseGuards(new AdminGuard())
    async create(@Body() createStage: CreateStageDto): Promise<Stage> {
        return await this.stagesService.create(createStage);
    }
    @Get(':id')
    @ApiImplicitParam({ name: 'id' })
    @UseGuards(new AdminGuard())
    async getStageById(@Param('id') stageId: string){
        return await this.stagesService.getById(stageId)
    }
    @Put(':id')
    @ApiImplicitParam({ name: 'id' })
    @UseGuards(new AdminGuard())
    @ApiCreatedResponse({ description: 'The record has been successfully updated.', type: UpdateStageDto })
    async updateStageById(@Param('id') stageId: string, @Body() updateStage: UpdateStageDto){
        return await this.stagesService.updateById(stageId, updateStage)
    }
    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    @UseGuards(new AdminGuard())
    async deleteStageById(@Param('id') stageId: string){
        return await this.stagesService.deleteById(stageId)
    }   
}
