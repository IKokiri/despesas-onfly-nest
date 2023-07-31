import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExpensesService {
  
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) { }


  create(createExpenseDto: CreateExpenseDto) {
    console.log(createExpenseDto)
    try {
      const user = this.expenseRepository.save(createExpenseDto)
      if (user) return true

    } catch (error) {
      return false
    }
  }

  findAll() {
    try {
      const user = this.expenseRepository.find()
      return user
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
