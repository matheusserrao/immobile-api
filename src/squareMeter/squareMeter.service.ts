import { Injectable, Logger, HttpService } from "@nestjs/common";
import { SquareMeterDTO } from "./dto/squareMeter.dto";

@Injectable()
export class SquareMeterService {

    private readonly logger = new Logger(SquareMeterService.name);

    onModuleInit() {
      this.logger.log(`Square Meter Service loaded at ${new Date()}`);
    }
  
    constructor(private readonly httpService: HttpService) { }

    getURICurrentValueSquareMeter() {
    
        const base = process.env.END_POINT_SQUARE_METER_API;
        return `${base}/`;
    }

    async getCurrentValueSquareMeter(): Promise<SquareMeterDTO> {

        const endPoint = this.getURICurrentValueSquareMeter();

        const { data } = await this.httpService.get(endPoint).toPromise();
        
        return data;
    }
}