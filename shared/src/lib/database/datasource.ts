import { DataSource } from 'typeorm';
import * as entities from './mysql';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'root',
        password: '123',
        database: 'shop',
        entities: Object.values(entities),
        synchronize: true,
      });
      try {
        if (!dataSource.isInitialized) {
          await dataSource.initialize();
          console.info('connect database successfully');
        }
      } catch (error) {
        console.log('connect database error');
        console.error(error);
      }
      return dataSource;
    },
  },
];
