import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, BadRequestException, Request, ForbiddenException } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { MailService } from 'src/mail/mail.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('expenses')
@UseGuards(AuthGuard)
export class ExpensesController {
  constructor(
    private readonly expensesService: ExpensesService,
    private readonly emailService: MailService
  ) { }

  @Post()
  async create(@Body() createExpenseDto: CreateExpenseDto, @Request() request: any) {
    const { sub: userId } = request.user
    createExpenseDto.userId = userId

    if (!userId) throw new ForbiddenException('Forbidden')
    const expenseResult = await this.expensesService.create(createExpenseDto);
    console.log(expenseResult)

    if (expenseResult.status === false) throw new BadRequestException(expenseResult?.message)

    this.emailService.sendExpenseAdded(expenseResult)
    return expenseResult
  }

  @Get()
  findAll(@Request() request: any) {
    const { sub: userId } = request.user
    if (!userId) throw new ForbiddenException('Forbidden')
    return this.expensesService.findAllByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() request: any) {
    const { sub: userId } = request.user
    if (!userId) throw new ForbiddenException('Forbidden')
    return this.expensesService.findOne(+id, userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto, @Request() request: any) {
    const { sub: userId } = request.user
    if (!userId) throw new ForbiddenException('Forbidden')
    return this.expensesService.update(+id, updateExpenseDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() request: any) {
    const { sub: userId } = request.user
    if (!userId) throw new ForbiddenException('Forbidden')
    return this.expensesService.remove(+id, userId);
  }
}
