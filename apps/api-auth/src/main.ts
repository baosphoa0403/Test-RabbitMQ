/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NAME_QUEUE, URL_RABBIT_MQ } from '@test-kafka/shared';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [URL_RABBIT_MQ],
        queue: NAME_QUEUE.auth_queue,
        noAck: true,
        //  Queue name which your server will listen to
        queueOptions: {
          durable: false,
        },
      },
    }
  );

  await app.listen();
  (() => {
    Logger.log('Microservice API Auth Listening');
  })();
}

bootstrap();
