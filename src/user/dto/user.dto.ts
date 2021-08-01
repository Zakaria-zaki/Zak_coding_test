export class UserDto {
    
    id: number;
    name: string;
    email: string;

    constructor(user?: UserDto) {
        Object.assign(this, user);
    }
}