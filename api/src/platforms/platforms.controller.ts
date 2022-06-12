import { Controller, Get } from '@nestjs/common';

@Controller('platforms')
export class PlatformsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
