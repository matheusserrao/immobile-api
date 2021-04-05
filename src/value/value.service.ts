import { Injectable, Logger, OnModuleInit, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { ResultValueSquareMeterDTO } from './dto/resultSquareMeter.dto';
import { SquareMeterService } from 'src/squareMeter/squareMeter.service';

@Injectable()
export class ValueService implements OnModuleInit {

  private readonly MIN_METER = process.env.MIN_METER_ALLOWED || 10;
  private readonly MAX_METER = process.env.MAX_METER_ALLOWED || 10000;

  private readonly logger = new Logger(ValueService.name);

  onModuleInit() {
    this.logger.log(`Value Service loaded at ${new Date()}`);
  }

  constructor(private readonly squareMeterService: SquareMeterService ) { }

  async calculateValueSquareMeter(meter: number): Promise<ResultValueSquareMeterDTO> {
    
    this.isMeterValid(meter);

    const { value, createdAt } = await this.squareMeterService.getCurrentValueSquareMeter();

    const resultSquareMeter = new ResultValueSquareMeterDTO();
    resultSquareMeter.meter = meter;
    resultSquareMeter.dateOfValuePerMeter = createdAt;
    resultSquareMeter.totalValue = meter * value;
    resultSquareMeter.valuePerMeter = value;

    return resultSquareMeter;
  }

  isMeterValid(meter: number) {

    if (meter < this.MIN_METER) {
      throw new HttpException(`The meter ${meter} is less than allowed ${this.MIN_METER}`, HttpStatus.BAD_REQUEST);
    }

    if (meter > this.MAX_METER) {
      throw new HttpException(`The meter ${meter} is greater than allowed ${this.MAX_METER}`, HttpStatus.BAD_REQUEST);
    }

    return true;
  }
  
}
