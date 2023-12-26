import { UserEntity } from 'shared/src/lib/database/postgres/entities';
import { BaseInterfaceRepository } from 'shared/src/lib/database/postgres/repositories';

export interface UserRepositoryInterface
  extends BaseInterfaceRepository<UserEntity> {}
