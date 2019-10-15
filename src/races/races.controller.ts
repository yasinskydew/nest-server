import { Controller, Get, UseGuards, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { RacesService } from './races.service';
import { AdminGuard } from '../shared/roles.guargs'
import { Race } from './interfaces/race.interface';

@Controller('races')
export class RacesController {
constructor(private readonly racesService: RacesService){}

    @Get()
    async findAll(){
        return this.racesService.findAll();
    }

    @Post()
    @UseGuards(new AdminGuard())
    async create(@Body() createRace): Promise<Race> {
        return await this.racesService.create(createRace);
    }
    @Get(':id')
    @UseGuards(new AdminGuard())
    async getRaceById(@Param() raceId: string){
        return await this.racesService.getById(raceId)
    }
    @Put(':id')
    @UseGuards(new AdminGuard())
    async updateRaceById(@Param() raceId: string, @Body() updateRace){
        return await this.racesService.updateById(raceId, updateRace)
    }
    @Delete(':id')
    @UseGuards(new AdminGuard())
    async deleteRaceById(@Param() raceId: string){
        return await this.racesService.deleteById(raceId)
    }
}
