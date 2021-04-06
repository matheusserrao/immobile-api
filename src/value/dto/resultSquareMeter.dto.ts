
export class ResultValueSquareMeterDTO {
    
    public valuePerMeter: string;
    public totalValue: string;
    public meter: number;
    public dateOfValuePerMeter: Date;

    constructor(){
        this.valuePerMeter = 'R$ 0';
        this.totalValue = 'R$ 0';
        this.meter = 0;
        this.dateOfValuePerMeter = new Date();
    }
}