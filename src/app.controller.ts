import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    const relative = await this.appService.getRelative();
    if (relative) {
      return relative;
    }
    return 'Not found!';
  }
}
