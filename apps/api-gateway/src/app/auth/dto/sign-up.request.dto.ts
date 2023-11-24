import { IsNotEmpty } from 'class-validator';

export class SignUpRequestDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  fullName: string;
}
