import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags()
@Controller()
export class AppController {
  @Get('health-check')
  @HttpCode(200)
  healthCheck(): string {
    return 'Ok';
  }
}
