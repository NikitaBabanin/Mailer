import { Module } from '@nestjs/common';
import { MailerController } from './mailer.controller';
import { MailerService } from './mailer.service';
import { Sendgrid } from '../common/sendgrid';

@Module({
  controllers: [MailerController],
  providers: [MailerService, Sendgrid],
})
export class MailerModule {}
