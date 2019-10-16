import { Controller, Get, UseGuards, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { AdminGuard } from '../shared/roles.guargs';
import { League } from './interfaces/league.interface';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';

import { ApiUseTags, ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('leagues')
@Controller('leagues')
export class LeaguesController {
    constructor(private readonly leaguesService: LeaguesService){}

    @Get()
    async findAll(){
        return this.leaguesService.findAll();
    }

    @Post()
    @UseGuards(new AdminGuard())
    @ApiCreatedResponse({ description: 'The record has been successfully create.', type: CreateLeagueDto })
    async create(@Body() createLeague: CreateLeagueDto): Promise<League> {
        return await this.leaguesService.create(createLeague);
    }
    @Get(':id')
    @ApiImplicitParam({ name: 'id' })
    @UseGuards(new AdminGuard())
    async getSLeagueyId(@Param() leagueId: string){
        return await this.leaguesService.getById(leagueId)
    }
    @Put(':id')
    @ApiImplicitParam({ name: 'id' })
    @UseGuards(new AdminGuard())
    @ApiCreatedResponse({ description: 'The record has been successfully create.', type: UpdateLeagueDto })
    async updateLeagueById(@Param() leagueId: string, @Body() updateLeague: UpdateLeagueDto){
        return await this.leaguesService.updateById(leagueId, updateLeague)
    }
    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    @UseGuards(new AdminGuard())
    async deleteLeagueById(@Param() leagueId: string){
        return await this.leaguesService.deleteById(leagueId)
    }   
}
