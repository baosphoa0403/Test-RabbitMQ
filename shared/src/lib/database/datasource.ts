import { DataSource } from 'typeorm';
import * as entities from './postgres';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  // {
  //   provide: 'DATA_SOURCE_MYSQL',
  //   useFactory: async (configService: ConfigService) => {
  //     const dataSource = new DataSource({
  //       type: 'mysql',
  //       host: configService.get('MYSQL_HOST'),
  //       port: configService.get('MYSQL_PORT'),
  //       username: configService.get('MYSQL_USERNAME'),
  //       password: configService.get('MYSQL_PASSWORD'),
  //       database: configService.get('MYSQL_DATABASE'),
  //       entities: Object.values(entities),
  //       synchronize: true,
  //     });
  //     try {
  //       if (!dataSource.isInitialized) {
  //         await dataSource.initialize();
  //         console.info('connect database successfully');
  //       }
  //     } catch (error) {
  //       console.log('connect database error');
  //       console.error(error);
  //     }
  //     return dataSource;
  //   },
  //   inject: [ConfigService],
  // },
  {
    provide: 'DATA_SOURCE_POSTGRES',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        entities: Object.values(entities),
        synchronize: true,
        schema: configService.get('POSTGRES_SCHEMA'),
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
    inject: [ConfigService],
  },
];
