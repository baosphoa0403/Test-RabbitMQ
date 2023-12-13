import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  NAME_SERVICE,
  PATTERN_SERVICE,
  ROOT_CONTROLLER,
} from '@test-kafka/shared';
import { SignUpRequestDto } from './dto/sign-up.request.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller(ROOT_CONTROLLER.AUTH)
export class AuthController {
  constructor(
    @Inject(NAME_SERVICE.auth_service) private clientAuth: ClientProxy
  ) {}

  @Post('sign-up')
  async signUp(@Body() signUpRequestDto: SignUpRequestDto) {
    this.clientAuth
      .send(PATTERN_SERVICE.AUTH.SIGN_UP_USER, JSON.stringify(signUpRequestDto))
      .subscribe((value) => {
        console.log('response = ' + value);
      });
  }
}
