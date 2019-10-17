import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateRaceDto {
    
    @ApiModelProperty({ required: false })
    readonly place: string;
    
    @ApiModelProperty({ required: false })
    readonly time: string;
    
    @ApiModelProperty({ required: false })
    readonly stage: any;
    
    @ApiModelProperty({ required: false })
    readonly user: any;
}