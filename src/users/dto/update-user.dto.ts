import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiModelProperty({ required: false })
    readonly login: string;

    @ApiModelProperty({ required: false })
    readonly name: string;
    
    @ApiModelProperty({ required: false })
    readonly surname: string;
    
    @ApiModelProperty({ required: false })
    readonly password: string;
    
    @ApiModelProperty({ required: false })
    readonly role: string;
}