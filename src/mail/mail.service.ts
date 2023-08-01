import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Expense } from 'src/expenses/entities/expense.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) { }

  async sendExpenseAdded(expense: Expense) {
    const { user } = expense
    const { amount, expenseDate, description } = expense

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'despesa cadastrada',
      html: `
      <h4>Novo Registro de despesa</h4>
      <p>Olá ${user.name}!</p>
      <p>Uma nova despesa foi registrada:</p>
      <p>Valor: R$ ${amount} </p>
      <p>Data: ${expenseDate} </p>
      <p>Descrição: ${description} </p>
      `,
      context: {
        name: user.name
      },
    });
  }
}
