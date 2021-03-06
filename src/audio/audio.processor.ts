/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { SqsConsumerEventHandler, SqsMessageHandler } from '@ssut/nestjs-sqs';
import { SQS } from 'aws-sdk';

@Injectable()
export class AppMessageHandler {
  private readonly logger = new Logger(AppMessageHandler.name);

  @SqsMessageHandler('audio', false)
  public async handleMessage(message: SQS.Message) {
    this.logger.debug(message);
  }

  @SqsConsumerEventHandler('audio', 'message_received')
  public onMessageReceived(message: SQS.Message) {
    this.logger.debug('Start transcoding...');
  }

  @SqsConsumerEventHandler('audio', 'message_processed')
  public onMessageProcessed(message: SQS.Message) {
    this.logger.debug('Transcoding completed');
  }

  @SqsConsumerEventHandler('audio', 'processing_error')
  public onProcessingError(error: Error, message: SQS.Message) {
    this.logger.error(error);
    this.logger.error(message);
  }
}
