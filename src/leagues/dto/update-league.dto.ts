import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateLeagueDto {
    
    @ApiModelProperty()
    @IsString ()
    @IsNotEmpty ()
    readonly title: string;
    
    @ApiModelProperty()
    @IsString ()
    readonly description: string;
    
    @ApiModelProperty()
    @IsString ()
    @IsNotEmpty ()
    readonly season: string;
    
    @ApiModelProperty({ required: false })
    readonly users: any[];
}