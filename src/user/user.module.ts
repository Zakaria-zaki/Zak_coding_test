import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { UserMapper } from './mapper/user.mapper';

@Module({
  controllers: [UserController],
  providers: [UserService, UserMapper],
})
export class UserModule {}
