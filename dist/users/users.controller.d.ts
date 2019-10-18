import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findProfile(user: User): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    login(loginUserDto: LoginUserDto): Promise<{
        user: User;
        token: any;
    }>;
    updateUser(currentUser: User, updateUser: UpdateUserDto): Promise<User>;
    deleteUser(currentUser: User): Promise<User>;
    getUserById(userId: string): Promise<User>;
    getUserWithLeague(loginUser: string): Promise<object>;
    getUserWithRace(loginUser: string): Promise<object>;
}
