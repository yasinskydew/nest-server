export class CreateUserDto {
    readonly login: string;
    readonly name: string;
    readonly surname: string;
    readonly password: string;
    readonly role: string;
    readonly tokens: object[]
}