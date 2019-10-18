import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { League } from '../leagues/interfaces/league.interface';
import { Race } from '../races/interfaces/race.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersService {
    private readonly userModel;
    private readonly leagueModel;
    private readonly raceModel;
    constructor(userModel: Model<User>, leagueModel: Model<League>, raceModel: Model<Race>);
    generateToken(user: any): any;
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    login(loginUserDto: LoginUserDto): Promise<{
        user: User;
        token: any;
    }>;
    profile(CurrentUser: any): Promise<User>;
    update(currentUser: any, updateUser: any): Promise<User>;
    delete(currentUser: any): Promise<User>;
    regLeague(currentUser: any, title: any): Promise<object>;
    getById(idUser: any): Promise<User>;
    getRace(login: string): Promise<object>;
    getLeague(login: string): Promise<object>;
}
