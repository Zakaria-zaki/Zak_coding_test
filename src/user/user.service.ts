import { Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  private readonly users: User[] = [];

  constructor() {
    this.users.push({
      id: 1,
      name: 'Zak',
      email: 'zak@gmail.com',
      password: 'zak1234',
    });
    /*this.users.push({
      id: 2,
      name: 'Toto',
      email: 'toto@gmail.com',
      password: 'toto1234',
    });*/
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  // pour retourner notre tableu de Users 
  findAll(): User[] {
    return this.users
    
  }

  findOne(id: number) {
    return this.users;
  }

  login(loginUserDto: LoginUserDto) {
    return this.login;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  
}
