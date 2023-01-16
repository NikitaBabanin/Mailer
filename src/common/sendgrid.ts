import { ConfigService } from '@nestjs/config';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as SendGrid from '@sendgrid/mail';

export class Sendgrid {
  constructor() {
    const configService = new ConfigService();
    const sendgridApiKey = configService.get<string>('SENDGRID_API_KEY');

    if (!sendgridApiKey) {
      throw new InternalServerErrorException('Sendgrid api key not found');
    }

    SendGrid.setApiKey(sendgridApiKey);
  }

  send(data: SendGrid.MailDataRequired | SendGrid.MailDataRequired[]) {
    try {
      return SendGrid.send(data)
        .then(() => ({ message: 'The message has been sent' }))
        .catch(() => {
          throw new BadRequestException('Bad Request');
        });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
