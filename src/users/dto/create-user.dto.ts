import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, MaxLength, NotContains } from 'class-validator';
export class CreateUserDto {
    @ApiModelProperty()
    @IsString ()
    @IsNotEmpty ()
    @MaxLength(10)
    readonly login: string;

    @ApiModelProperty()
    @IsString ()
    readonly name: string;
    
    @ApiModelProperty()
    @IsString ()
    readonly surname: string;
    
    @ApiModelProperty()
    @IsNotEmpty ()
    @MinLength(8)
    @MaxLength(15)
    @NotContains('password')
    readonly password: string;
    
    @ApiModelProperty({ required: false })
    @IsString ()
    readonly role: string;
}