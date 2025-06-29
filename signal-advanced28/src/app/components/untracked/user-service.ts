import { Injectable, signal } from '@angular/core';

export interface User {
  id: number;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export default class UserService {
  private readonly tmpUser: User = { id: 1, name: 'User X', age: 20 };
  readonly users = signal<User[]>([]);

  loadUsers() {
    // signal users changed
    this.users.set([
      ...this.users(),
      { ...this.tmpUser, id: this.users().length + 1 },
    ]);

    return this.users();
  }
}
