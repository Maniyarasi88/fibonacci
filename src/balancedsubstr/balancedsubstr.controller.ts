import { Controller, Get, Param } from '@nestjs/common';
import { BalancedsubstrService } from './balancedsubstr.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('balancedsubstr')
export class BalancedsubstrController {
  constructor(private readonly balancedsubstrService: BalancedsubstrService) {}

  @Get(':string')
  @ApiTags('Longest Balanced Substring')
  @ApiResponse({ status: 200, description: 'The longest balanced substring value has been successfully fetched.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiParam({ name: 'string', required: true, type: String, description: 'Enter String value' })
  async getlongestbalancedstring(@Param('string') string: string): Promise<any> {
    try {
      return await this.balancedsubstrService.getlongestbalancedstring(string);
    } catch (error) {
      return error;
    }
  }

}
