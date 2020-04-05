import { Injectable } from "@angular/core";
import { IUser } from './user/user';

@Injectable()
export class UserService {

  users: IUser[] = [
    { id: 1, name: "Test1" },
    { id: 2, name: "Test2" },
    { id: 3, name: "Test3" },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  getuser(id: number) {
    const user = this.users.find(
      (u) => {
        return u.id === id;
      }
    );
    return user;
  }

}
