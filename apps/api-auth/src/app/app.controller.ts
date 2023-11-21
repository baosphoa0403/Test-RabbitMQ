import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('SIGN_UP')
  receiveEventPattern(data) {
    console.log('receiveEventPattern = ' + data);
  }

  @MessagePattern('SIGN_UP_1')
  receiveMessagePattern(data) {
    console.log('receiveMessagePattern = ' + data);
  }
}
