import { Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/sendMessage.dto';
import { Sendgrid } from '../common/sendgrid';
import SendMessageTemplate from './templates/send-message.template';

@Injectable()
export class MailerService {
  constructor(private readonly mailer: Sendgrid) {}

  sendMessage(data: SendMessageDto) {
    const sendMessageTemplate = new SendMessageTemplate(data);
    const payload = sendMessageTemplate.getOptions();

    return this.mailer.send(payload);
  }
}
