import { Controller, Get, UseGuards, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { AdminGuard } from '../shared/roles.guargs';
import { League } from './interfaces/league.interface';


@Controller('leagues')
export class LeaguesController {
    constructor(private readonly leaguesService: LeaguesService){}

    @Get()
    async findAll(){
        return this.leaguesService.findAll();
    }

    @Post()
    @UseGuards(new AdminGuard())
    async create(@Body() createLeague): Promise<League> {
        return await this.leaguesService.create(createLeague);
    }
    @Get(':id')
    @UseGuards(new AdminGuard())
    async getSLeagueyId(@Param() leagueId: string){
        return await this.leaguesService.getById(leagueId)
    }
    @Put(':id')
    @UseGuards(new AdminGuard())
    async updateLeagueById(@Param() leagueId: string, @Body() updateLeague){
        return await this.leaguesService.updateById(leagueId, updateLeague)
    }
    @Delete(':id')
    @UseGuards(new AdminGuard())
    async deleteLeagueById(@Param() leagueId: string){
        return await this.leaguesService.deleteById(leagueId)
    }   
}
