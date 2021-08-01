export class CreateUserDto {

    name: string;
    email: string;
    password: string;

    constructor(dto?: CreateUserDto) {
        Object.assign(this, dto);
    }
}

export class LoginUserDto {
    email: string;
    password: string;
  }
  
