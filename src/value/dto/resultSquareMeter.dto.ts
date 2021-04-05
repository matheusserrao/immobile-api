
export class ResultValueSquareMeterDTO {
    
    public valuePerMeter: number;
    public totalValue: number;
    public meter: number;
    public dateOfValuePerMeter: Date;

    constructor(){
        this.valuePerMeter = 0;
        this.totalValue = 0;
        this.meter = 0;
        this.dateOfValuePerMeter = new Date();
    }
}