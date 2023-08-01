import { IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsPositive, Length } from "class-validator"
import { IsNotDateFuture } from "src/validator/IsNotDateFuture"

export class CreateExpenseDto {
    @Length(0, 191)
    description: string
    
    @IsDateString()
    @IsNotDateFuture()
    expenseDate: Date

    @IsInt()
    @IsNotEmpty()
    userId: number

    @IsNumber()
    @IsPositive()
    amount: number
}
