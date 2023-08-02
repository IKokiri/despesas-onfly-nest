import { Expense } from 'src/expenses/entities/expense.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(type => Expense, expense => expense.user)
  expenses: Expense[];
}