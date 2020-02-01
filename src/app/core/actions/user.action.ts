import { User } from './../../shared/models/User';
export class GetUsers {
    static readonly type = '[User] Get list of users';
    constructor() {}
}


export class CreateUser {
    static readonly type ="[User] Create User";
    constructor(public payload: User) {}
}

export class SetSelectedUser {
    static readonly type = "[User] Set Selected User";
    constructor(public payload: User){}
}