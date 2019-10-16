import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateStageDto {
    
    @ApiModelProperty()
    readonly title: string;
    
    @ApiModelProperty()
    readonly description: string;
    
    @ApiModelProperty()
    readonly coords: [number, number];
    
    @ApiModelProperty()
    readonly league: any;
}