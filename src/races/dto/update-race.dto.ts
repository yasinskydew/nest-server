import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class UpdateRaceDto {
    
    @ApiModelProperty()
    @IsString ()
    @IsNotEmpty ()
    readonly place: string;
    
    @ApiModelProperty()
    @IsString ()
    @IsNotEmpty ()
    readonly time: string;
    
    @ApiModelProperty()
    @IsNotEmpty ()
    readonly stage: any;
    
    @ApiModelProperty()
    @IsNotEmpty ()
    readonly user: any;
}