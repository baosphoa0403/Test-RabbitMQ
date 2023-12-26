import { BaseInterfaceRepository } from './base.interface.repository';
import { DeepPartial, Repository } from 'typeorm';

interface HasId {
  id: string;
}
export abstract class BaseAbstractRepository<T extends HasId>
  implements BaseInterfaceRepository<T>
{
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  async save(entity: DeepPartial<T>): Promise<T> {
    return await this.entity.save(entity);
  }
}
