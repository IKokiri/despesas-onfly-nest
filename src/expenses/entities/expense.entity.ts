import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ type: 'date' })
  expenseDate: Date;

  @Column('float')
  amount: number;

  @ManyToOne(() => User, (user) => user.expenses)
  user: User
}