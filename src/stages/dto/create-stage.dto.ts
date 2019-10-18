import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsArray } from "class-validator";

export class CreateStageDto {

    @ApiModelProperty()
    @IsString ()
    @IsNotEmpty ()
    readonly title: string;
    
    @ApiModelProperty()
    @IsString ()
    @IsNotEmpty ()
    readonly description: string;
    
    @ApiModelProperty()
    @IsArray()
    readonly coords: [number, number];
    
    @ApiModelProperty()
    readonly league: any;
}