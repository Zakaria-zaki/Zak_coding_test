import { Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { maxBy } from 'lodash';
import { UserMapper } from '../mapper/user.mapper';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {

  /**
   * For test purpose UserService is statefull. Don't use statefull service in production
   */
  private readonly users: User[] = [];

  constructor(private usersMapper: UserMapper) {
    this.users.push(new User({
      id: 1,
      name: 'Zak',
      email: 'zak@gmail.com',
      password: 'zak1234',
    }));
  }

  create(createUserDto: CreateUserDto): UserDto {
    if (!createUserDto) {
      // In real world we can throw an Exception (Error) handled and tranformed by a translator into a 400 request for Example.
      // There also validation stuffs missing in the DTO, we can use class validator for this purpose
      return;
    }
    const nextId = maxBy(this.users, 'id')?.id + 1;
    
    const user = new User({
      ...this.usersMapper.toEntity(createUserDto),
      id: nextId,
    });

    this.users.push(user);
    return this.usersMapper.toDTO(user);
  }
  // pour retourner notre tableu de Users 
  findAll(): UserDto[] {
    return this.usersMapper.toDTOs(this.users);
    
  }

  findOne(id: number): UserDto {
    return this.usersMapper.toDTO(this.users?.find(user => user?.id === id));
  }

  login(loginUserDto: LoginUserDto): boolean {
    return loginUserDto?.email === loginUserDto?.password;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  
}
