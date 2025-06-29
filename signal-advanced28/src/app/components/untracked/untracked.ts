import { Component, effect, inject, signal, untracked } from '@angular/core';
import UserService, { User } from './user-service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-untracked',
  imports: [JsonPipe],
  templateUrl: './untracked.html',
  styleUrl: './untracked.scss',
})
export class Untracked {
  readonly users = signal<User[]>([]);
  readonly userService = inject(UserService);
  readonly counter = signal(0);

  readonly interval = signal(1);

  readonly intervalEffect = effect((cleanUp) => {
    const intervalId = setInterval(() => {
      console.log('interval effect run');
    }, this.interval() * 1000);

    return cleanUp(() => clearInterval(intervalId));
  });

  changeInterval() {
    this.interval.set(this.interval() + 1);
  }

  constructor() {
    effect(() => {
      console.log('fired');

      // counter triggered effect run
      const id = this.counter();
      console.log(id);

      // loadUsers() has this.users() in service won't trigger effect run
      untracked(() => {
        const users = this.userService.loadUsers();
        console.log(users);
        this.users.set(users);
      });
    });
  }

  counterUp() {
    this.counter.set(this.counter() + 1);
  }
}
