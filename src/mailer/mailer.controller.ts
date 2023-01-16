import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendMessageDto } from './dto/sendMessage.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send')
  sendMessage(@Body() sendMessageDto: SendMessageDto) {
    return this.mailerService.sendMessage(sendMessageDto);
  }
}
