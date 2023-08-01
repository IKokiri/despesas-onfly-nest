import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { Expense } from './entities/expense.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailService } from 'src/mail/mail.service';
import { ConfigModule } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Expense, User]),
    ConfigModule.forRoot()
  ],
  controllers: [ExpensesController],
  providers: [ExpensesService, MailService]
})
export class ExpensesModule {}
