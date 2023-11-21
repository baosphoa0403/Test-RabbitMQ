import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { NAME_QUEUE, NAME_SERVICE, URL_RABBIT_MQ } from '@test-kafka/shared';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NAME_SERVICE.auth_service,
        transport: Transport.RMQ,
        options: {
          urls: [URL_RABBIT_MQ],
          queue: NAME_QUEUE.auth_queue,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
