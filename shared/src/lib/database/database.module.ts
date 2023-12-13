import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { databaseProviders } from './datasource';

@Module({
  imports: [ConfigModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
