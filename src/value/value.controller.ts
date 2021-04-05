import { Controller, Get, Patch, Body, Query, Param } from '@nestjs/common';
import { ValueService } from './value.service';
import { ApiTags, ApiOkResponse, ApiInternalServerErrorResponse, ApiOperation, ApiCreatedResponse, ApiNotFoundResponse, ApiQuery } from '@nestjs/swagger';
import { ResultValueSquareMeterDTO } from './dto/resultSquareMeter.dto';

@ApiTags('# Value Meter Square')
@Controller('/')
export class ValueController {
  
  constructor(private readonly valueService: ValueService) { }

  @Get('/get-value-square-meter')
  @ApiQuery({name: 'meter', type: Number, description: 'Meter to be calculated the value of the property '})
  @ApiOperation({description: 'Returns result with the value of the property based on the reported meter '})
  @ApiOkResponse({type: ResultValueSquareMeterDTO})
  @ApiInternalServerErrorResponse({description: 'When an error unexpected in server.'})
  async calculateValueSquareMeter(@Query('meter') meter: number): Promise<ResultValueSquareMeterDTO> {
    return this.valueService.calculateValueSquareMeter(meter);
  }
}
