import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ExpensesService {

  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }


  async create(createExpenseDto: CreateExpenseDto): Promise<any> {
    const { userId, amount, description, expenseDate } = createExpenseDto

    try {
      const user = await this.userRepository.findOneBy({ id: userId });

      if (!user) return { status: false, message: "User does not exist!" }

      const expense = new Expense()

      expense.user = user
      expense.amount = amount
      expense.description = description
      expense.expenseDate = expenseDate

      const expenseResult = this.expenseRepository.save(expense)
      
      return expenseResult

    } catch (error) {
      return { status: false, message: "Erro to add expense!" }
    }
  }

  findAll() {
    try {
      const expense = this.expenseRepository.find()
      return expense
    } catch (error) {
      return false
    }
  }

  findOne(id: number) {
    try {
      return this.expenseRepository.findOneBy({ id });
    } catch (error) {
      return false
    }
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return this.expenseRepository.update(id, updateExpenseDto);
  }

  remove(id: number) {
    return this.expenseRepository.delete(id);
  }
}
