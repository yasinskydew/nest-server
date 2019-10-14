import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface'
import { CreateUserDto } from './dto/create-user.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>){} 

    async create(createUserDto: CreateUserDto) {
        const user = new this.userModel(createUserDto);
        const token = jwt.sign({_id: user._id.toString() }, 'expressapp');
        user.tokens = user.tokens.concat({ token })
        await user.save()
        return {user, token} 
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
      }

    async login(login, password) {
        const user = await this.userModel.findOne({login});
        if(!user) {
            throw new Error('Unable user')
        }
        if(user.password !== password){
            throw new Error('Unable to login')
        }
        const token = jwt.sign({_id: user._id.toString() }, 'expressapp');
        user.tokens = user.tokens.concat({ token })
        await user.save()
        return {user, token}
    }
}