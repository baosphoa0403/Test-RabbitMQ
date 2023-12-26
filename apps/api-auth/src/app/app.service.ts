import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // constructor(private userRepository: UserRepository) {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
