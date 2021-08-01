import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserDto } from "../dto/user.dto";
import { User } from "../entities/user.entity";

@Injectable()
export class UserMapper {
    toEntity(dto: CreateUserDto): User | null {
        if (dto) {
            return new User({...dto, id: null});
        }
        return null;
    }

    toDTO(entity: User): UserDto | null {
        if (entity) {
            return new UserDto({
                email: entity.email,
                id: entity.id,
                name: entity.name,
            });
        }
        return null;
    }

    toDTOs(entities: User[]): UserDto[] {
        return entities?.map(entity => this.toDTO(entity)) ?? [];
    }
}