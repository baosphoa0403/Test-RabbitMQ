import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern('SIGN_UP_USER')
  receiveEventPattern(data: string) {
    console.log('PATTERN SIGN_UP_USER = ' + data);
    console.log(JSON.parse(data));
    return 'create successfully';
  }

  // @MessagePattern('SIGN_UP_1')
  // receiveMessagePattern(data) {
  //   console.log('receiveMessagePattern = ' + data);
  // }
}
