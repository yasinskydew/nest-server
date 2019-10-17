import { Controller,Param, Get, Post, Put, Delete, Body, UseGuards, Catch } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface'
import { AuthGuard } from '../shared/auth.guards';
import { AdminGuard } from '../shared/roles.guargs';
import { CurrentUser } from './users.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiUseTags, ApiCreatedResponse, ApiBearerAuth, ApiImplicitParam } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';

@ApiUseTags('users')
@ApiBearerAuth()
@Controller('users')
@Catch()

export class UsersController {
constructor(private readonly usersService: UsersService) {}

    @Get()
    @UseGuards(new AdminGuard())
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
    @Get('me')
    @UseGuards(new AuthGuard())
    async findProfile(@CurrentUser() user: User): Promise<User>{
        return await this.usersService.profile(user)
    }

    @Post()
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: CreateUserDto })
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Post('login')
    @ApiCreatedResponse({ description: 'The user has been successfully login.', type: LoginUserDto })
    async login(@Body() loginUserDto: LoginUserDto): Promise<{user: User, token: any }> {
        return await this.usersService.login(loginUserDto)
    }

    @Put('me')
    @UseGuards(new AuthGuard())
    @ApiCreatedResponse({ description: 'The record has been successfully updated.', type: UpdateUserDto })
    async updateUser(@CurrentUser() currentUser: User, @Body() updateUser: UpdateUserDto): Promise<User>{
        return await this.usersService.update(currentUser, updateUser)
    }

    @Delete('me')
    @UseGuards(new AuthGuard())
    async deleteUser(@CurrentUser() currentUser: User): Promise<User>{
        return await this.usersService.delete(currentUser)
    }

    @Get(':id')
    @ApiImplicitParam({ name: 'id' })
    @UseGuards(new AdminGuard())
    async getUserById(@Param() userId: string): Promise<User>{
        return await this.usersService.getById(userId)
    }

    @Get('leagues/:loginUser')
    @ApiImplicitParam({ name: 'login' })
    @UseGuards(new AdminGuard())
    async getUserWithLeague(
        @Param() loginUser: object
        ): Promise<object>{
        return await this.usersService.getLeague(loginUser)
    }

    @Get('races/:loginUser')
    @ApiImplicitParam({ name: 'login' })
    @UseGuards(new AdminGuard())
    async getUserWithRace(
        @Param() loginUser: object
        ): Promise<object>{
        return await this.usersService.getRace(loginUser)
    }




   

}