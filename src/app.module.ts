import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { ExpensesModule } from './expenses/expenses.module';
import { Expense } from './expenses/entities/expense.entity';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: +process.env.PORT,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [
        User,
        Expense
      ],
      synchronize: true,
    }),
    ExpensesModule,
    MailModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
