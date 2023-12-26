import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule, SharedModule } from '@test-kafka/shared';
import { ConfigModule } from '@nestjs/config';
import configuration from 'shared/src/lib/config/configuration';
@Module({
  imports: [
    SharedModule,
    AuthModule,
    DatabaseModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: 'UserRepositoryInterface',
    //   useClass: UserRepository,
    // },
  ],
})
export class AppModule {}
