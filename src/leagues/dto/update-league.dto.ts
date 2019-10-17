import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateLeagueDto {
    
    @ApiModelProperty({ required: false })
    readonly title: string;
    
    @ApiModelProperty({ required: false })
    readonly description: string;
    
    @ApiModelProperty({ required: false })
    readonly season: string;
    
    @ApiModelProperty({ required: false })
    readonly users: any[];
}