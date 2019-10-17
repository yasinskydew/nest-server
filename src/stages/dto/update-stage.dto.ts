import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateStageDto {
    
    @ApiModelProperty({ required: false })
    readonly title: string;
    
    @ApiModelProperty({ required: false })
    readonly description: string;
    
    @ApiModelProperty({ required: false })
    readonly coords: [number, number];
    
    @ApiModelProperty({ required: false })
    readonly league: any;
}