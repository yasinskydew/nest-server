import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiModelProperty()
    readonly login: string;

    @ApiModelProperty()
    readonly name: string;
    
    @ApiModelProperty()
    readonly surname: string;
    
    @ApiModelProperty()
    readonly password: string;
    
    @ApiModelProperty()
    readonly role: string;
}