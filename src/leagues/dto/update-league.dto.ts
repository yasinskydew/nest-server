import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateLeagueDto {
    
    @ApiModelProperty()
    readonly title: string;
    
    @ApiModelProperty()
    readonly description: string;
    
    @ApiModelProperty()
    readonly season: string;
    
    @ApiModelProperty()
    readonly users: any[];
}