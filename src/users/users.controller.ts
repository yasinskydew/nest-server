import { Controller,Param, Get, Post, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface'
import { AuthGuard } from '../shared/auth.guards';
import { AdminGuard } from '../shared/roles.guargs';
import { CurrentUser } from './users.decorator';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')

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
    create(@Body() createUserDto): Promise<{ user: User, token: any }> {
        return this.usersService.create(createUserDto);
    }

    @Post('login')
    async login(@Body() loginUserDto): Promise<{user: User, token: any }> {
        return await this.usersService.login(loginUserDto)
    }

    @Put('me')
    @UseGuards(new AuthGuard())
    async updateUser(@CurrentUser() currentUser: User, @Body() updateUser: UpdateUserDto): Promise<User>{
        return await this.usersService.update(currentUser, updateUser)
    }

    @Delete('me')
    @UseGuards(new AuthGuard())
    async deleteUser(@CurrentUser() currentUser: User, @Body() updateUser: UpdateUserDto): Promise<User>{
        return await this.usersService.delete(currentUser, updateUser)
    }

    @Get(':id')
    @UseGuards(new AdminGuard())
    async getUserById(@Param() userId: string): Promise<User>{
        return await this.usersService.getById(userId)
    }



   

}