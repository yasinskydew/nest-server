import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateRaceDto {
    
    @ApiModelProperty()
    readonly place: string;
    
    @ApiModelProperty()
    readonly time: string;
    
    @ApiModelProperty()
    readonly stage: any;
    
    @ApiModelProperty()
    readonly user: any;
}