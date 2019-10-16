import { Controller, Get, UseGuards, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { RacesService } from './races.service';
import { AdminGuard } from '../shared/roles.guargs'
import { Race } from './interfaces/race.interface';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
import { ApiUseTags, ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('races')
@Controller('races')
export class RacesController {
constructor(private readonly racesService: RacesService){}

    @Get()
    async findAll(){
        return this.racesService.findAll();
    }

    @Post()
    @UseGuards(new AdminGuard())
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: CreateRaceDto })
    async create(@Body() createRace: CreateRaceDto): Promise<Race> {
        return await this.racesService.create(createRace);
    }
    @Get(':id')
    @ApiImplicitParam({ name: 'id' })
    @UseGuards(new AdminGuard())
    async getRaceById(@Param() raceId: string){
        return await this.racesService.getById(raceId)
    }
    @Put(':id')
    @ApiImplicitParam({ name: 'id' })
    @UseGuards(new AdminGuard())
    @ApiCreatedResponse({ description: 'The record has been successfully updated.', type: UpdateRaceDto })
    async updateRaceById(@Param() raceId: string, @Body() updateRace:UpdateRaceDto){
        return await this.racesService.updateById(raceId, updateRace)
    }
    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    @UseGuards(new AdminGuard())
    async deleteRaceById(@Param() raceId: string){
        return await this.racesService.deleteById(raceId)
    }
    @Get('league/:seasonLeague')
    @ApiImplicitParam({ name: 'season', enum: ['Winter', 'Spring', "Autumn", "Summer"] })
    @UseGuards(new AdminGuard())
    async getRaceWithStage(
        @Param() seasonLeague: object
        ): Promise<object>{
        return await this.racesService.getStage(seasonLeague)
    }
}
