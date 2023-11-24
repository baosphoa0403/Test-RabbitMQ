import { Module } from '@nestjs/common';
import { databaseProviders } from './datasource';

@Module({
  imports: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
