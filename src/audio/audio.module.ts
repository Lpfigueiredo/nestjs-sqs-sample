import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { AudioController } from './audio.controller';
import { AppMessageHandler } from './audio.processor';

const QUEUE_NAME = 'audio';
const QUEUE_URL = 'http://localhost:4566/queue/audio';

@Module({
  imports: [
    SqsModule.register({
      consumers: [
        {
          name: QUEUE_NAME,
          queueUrl: QUEUE_URL,
        },
      ],
      producers: [
        {
          name: QUEUE_NAME,
          queueUrl: QUEUE_URL,
        },
      ],
    }),
  ],
  controllers: [AudioController],
  providers: [AppMessageHandler],
})
export class AudioModule {}
