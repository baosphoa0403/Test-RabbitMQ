import { DeepPartial } from 'typeorm';

export interface BaseInterfaceRepository<T> {
  save(data: DeepPartial<T>): Promise<T>;
}
