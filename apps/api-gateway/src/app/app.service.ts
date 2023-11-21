import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('AUTH_SERVICE') private clientAuth: ClientProxy) {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getEventPattern() {
    this.clientAuth.emit('SIGN_UP', 'HELLO_WORLD');
    return 'hello';
  }

  getMessagePattern() {
    this.clientAuth.emit('SIGN_UP_1', 'HELLO_WORLD');
    return 'hello';
  }
}
