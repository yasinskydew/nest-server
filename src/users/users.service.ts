import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { League } from '../leagues/interfaces/league.interface';
import { Race } from '../races/interfaces/race.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_MODEL') private readonly userModel: Model<User>,
        @Inject('LEAGUE_MODEL') private readonly leagueModel: Model<League>,
        @Inject('RACE_MODEL') private readonly raceModel: Model<Race>
        
    ){}
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
        user.password = await bcrypt.hash(user.password, 8);
        return await user.save()
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
      }

    async login(loginUserDto: LoginUserDto) {
        const { login, password } = loginUserDto;
        const user = await this.userModel.findOne({login});
        console.log(user)
        if(!user) {
            throw new Error('Unable user')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
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
        updateUser.password = await bcrypt.hash(updateUser.password, 8);
        return await this.userModel.findByIdAndUpdate(currentUser._id, updateUser);
    }

    async delete(currentUser): Promise<User>{
         const user =  await this.userModel.findById(currentUser._id);
         await this.leagueModel.update(
            {users: user._id},
            {$pull: {users: user._id} },
            {multi: true})
         .exec();
         await this.raceModel.remove({user: user._id})
         .exec();
         return user.remove()
    }

    async regLeague(currentUser, title): Promise<object> {
        const {_id} = currentUser;
        const league = await this.leagueModel.findOne({title});
            if(!league){
                throw new Error('unknown league')
            }
            const flag = league.users.every(el => el.toString() !== _id.toString())
        if(flag){
            league.users.push(_id)
            await league.save()
            return {responce: "sucsessfully registrate"}
        } else {
            return {responce: "you was registrate"}
        }
    }

    async getById(idUser): Promise<User>{
        return await this.userModel.findById(idUser)
    }

    async getRace(login: string): Promise<object>{
        const result = await this.userModel.aggregate([
            {$match: {login: login}},
            {
                $lookup: {
                    from: "races",
                    localField: "_id",
                    foreignField: "user",
                    as: "race"
                }
            }
        ])
        return result
    }
    
    async getLeague(login: string): Promise<object>{
        const result = await this.userModel.aggregate([
            {$match: {login: login}},
            {
                $lookup: {
                    from: "leagues",
                    localField: "_id",
                    foreignField: "users",
                    as: "league"
                }
            }
        ])
        return result
    }
}