import { Test, TestingModule } from "@nestjs/testing";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { UserMapper } from "./user.mapper";

describe(`UserMapper`, () => {
    let mapper: UserMapper;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [ UserMapper],
      }).compile();
  
      mapper = module.get<UserMapper>(UserMapper);
    });
    
    describe(`toEntity`, () => {

        it(`Should return null for falsy`, () => {
            expect(mapper.toEntity(null)).toBeNull();
            expect(mapper.toEntity(undefined)).toBeNull();
        });

        it(`Should return user with id null for falsy`, () => {
            const dto = new CreateUserDto({email: 'test@midgard.com', name: 'midgard', password: 'midgard'});
            expect(mapper.toEntity(dto)).toEqual(
                new User({
                    id: null,
                    email: dto.email,
                    name: dto.name,
                    password: dto.name,
                })
            );
        });
    });
    
});