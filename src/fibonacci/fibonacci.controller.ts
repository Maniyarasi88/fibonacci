import { Controller, Get, Param, Logger } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';

@Controller('fibonacci')
export class FibonacciController {
  logger: Logger;
  constructor(private readonly fibonacciService: FibonacciService) { this.logger = new Logger(FibonacciController.name); }

  @Get(':num')
  @ApiTags('Fibonacci')
  @ApiResponse({ status: 200, description: 'The Fibonacci integer value has been successfully fetched.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiParam({ name: 'num', required: true, type: BigInt, description: 'Either an integer or a Big integer' })
  async getFibonacciNum(@Param('num') num: BigInt): Promise<any> {
    try {
      if(num == BigInt(0)){
        return 0;
      }
      return await this.fibonacciService.getFibonacciNum(+num);
    } catch (error) {
      return error;
    }
  }
}
