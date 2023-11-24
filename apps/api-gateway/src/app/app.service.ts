import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getEventPattern() {
    // this.clientAuth.emit('SIGN_UP', 'HELLO_WORLD');
    return 'hello';
  }

  getMessagePattern() {
    // this.clientAuth.emit('SIGN_UP_1', 'HELLO_WORLD');
    return 'hello';
  }
}
