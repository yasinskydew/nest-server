import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface'
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>){}

    generateToken(user){
        return jwt.sign({
            _id: user._id.toString(),
            login: user.login,
            role: user.role
        }, 'expressapp');
    }
    // { expiresIn: 600 }

    async create(createUserDto: CreateUserDto) {
        const user = new this.userModel(createUserDto);
        const token = this.generateToken(user);
        await user.save()
        return {user, token} 
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
      }

    async login(loginUserDto: LoginUserDto) {
        const { login, password } = loginUserDto;
        const user = await this.userModel.findOne({login});
        if(!user) {
            throw new Error('Unable user')
        }
        if(user.password !== password){
            throw new Error('Unable to login')
        }
        const token = this.generateToken(user);
        await user.save()
        return { user, token }
    }

    async profile(CurrentUser): Promise<User>{
        return await this.userModel.findById(CurrentUser._id);
    }

    async update(currentUser, updateUser): Promise<User>{
        return await this.userModel.findByIdAndUpdate(currentUser._id, updateUser)
    }

    async delete(currentUser, updateUser): Promise<User>{
        return await this.userModel.findByIdAndRemove(currentUser._id, updateUser)
    }

    async getById(idUser): Promise<User>{
        return await this.userModel.findById(idUser.id)
    }
}