export class User {
    id: number;
    name: string;
    email: string;
    password: string;

    constructor(user?: User) {
        Object.assign(this, user);
    }
}


  
