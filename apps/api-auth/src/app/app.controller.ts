import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { PATTERN_SERVICE } from 'shared/src/lib/constant/patten';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern(PATTERN_SERVICE.AUTH.SIGN_UP_USER)
  receiveEventPattern(data: string) {
    console.log('PATTERN SIGN_UP_USER = ' + data);
    console.log(JSON.parse(data));
    return 'create successfully';
  }
}
