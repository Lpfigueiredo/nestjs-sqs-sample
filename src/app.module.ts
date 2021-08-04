import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { AudioController } from './audio/audio.controller';

@Module({
  imports: [
    SqsModule.register({
      consumers: [],
      producers: [
        {
          name: 'audio',
          queueUrl: 'http://localhost:4566/queue/audio',
        },
      ],
    }),
  ],
  controllers: [AudioController],
})
export class AppModule {}
