import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation() {
    await this.mailerService.sendMail({
      to: "teste@teste.com.br",
      subject: 'despesa cadastrada',
      html:'<h1>DESPESA CADASTRADA</h1>',
      context: { 
        name: "XXXXXXXXX"
      },
    });
  }
}
