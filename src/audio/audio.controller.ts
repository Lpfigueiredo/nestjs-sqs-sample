import { Controller, Logger, Post } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';

@Controller('audio')
export class AudioController {
  private readonly logger = new Logger(AudioController.name);

  public constructor(private readonly sqsService: SqsService) {}

  @Post('transcode')
  public async dispatchSomething() {
    await this.sqsService.send('audio', {
      id: new Date().getTime().toString(),
      body: 'Mensagem de teste',
    });

    this.logger.debug('Mensagem enviada');
  }
}
