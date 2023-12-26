import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'shared/src/lib/database/postgres/entities';
import { UserRepositoryInterface } from 'shared/src/lib/database/postgres/interface/user.interface';
import { BaseAbstractRepository } from 'shared/src/lib/database/postgres/repositories/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository
  extends BaseAbstractRepository<UserEntity>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {
    console.log(userRepository);

    super(userRepository);
  }
}
