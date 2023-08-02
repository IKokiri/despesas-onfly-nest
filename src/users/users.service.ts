import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.usersRepository.save(createUserDto)
      return {status: true, message: "Created", code: "ok"}

    } catch (error) {
      const currentError = error.code
      
      if(currentError == 'ER_DUP_ENTRY') return {status: false, code: currentError, message: "Already exists"}
      return false
    }
  }

  findAll() {
    try {
      const user = this.usersRepository.find()
      return user
    } catch (error) {
      return false
    }
  }

  findOne(id: number) {
    try {
      return this.usersRepository.findOneBy({ id });
    } catch (error) {
      return false
    }
  }

  findOneByEmail(email: string) {
    try {
      return this.usersRepository.findOneBy({ email });
    } catch (error) {
      return false
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
