import { Controller, Logger, Post } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';

@Controller('audio')
export class AudioController {
  private readonly logger = new Logger(AudioController.name);

  public constructor(private readonly sqsService: SqsService) {}

  @Post('transcode')
  public async dispatchSomething() {
    const id = new Date().getTime().toString();

    await this.sqsService.send('audio', {
      id,
      body: 'Mensagem de teste',
      delaySeconds: 0,
      groupId: 'test',
      deduplicationId: id,
    });

    this.logger.debug('Mensagem enviada');
  }
}
