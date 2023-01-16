import { Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/sendMessage.dto';
import { Sendgrid } from '../common/sendgrid';

@Injectable()
export class MailerService {
  constructor(private readonly mailer: Sendgrid) {}

  sendMessage(data: SendMessageDto) {
    this.mailer.send();
  }
}
