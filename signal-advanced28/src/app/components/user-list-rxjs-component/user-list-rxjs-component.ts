import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { map, switchMap, timer } from 'rxjs';

export interface UserModel2 {
  id: number;
  username: string;
}

interface TResponse {
  users: UserModel2[];
}

@Component({
  selector: 'app-user-list-rxjs-component',
  imports: [FormsModule],
  templateUrl: './user-list-rxjs-component.html',
  styleUrl: './user-list-rxjs-component.scss',
})
export class UserListRxjsComponent {
  private readonly httpClient = inject(HttpClient);
  readonly searchKey = signal<string>('');

  readonly userResource = rxResource({
    defaultValue: [],
    params: () => ({ searchKey: this.searchKey() }),
    stream: ({ params }) => {
      return timer(0, 10000).pipe(
        switchMap(() => {
          return this.httpClient
            .get<TResponse>('https://dummyjson.com/users/search', {
              params: { q: params.searchKey },
            })
            .pipe(map((response) => response.users));
        })
      );
    },
  });

  setNewUser() {
    this.userResource.update((users) => [
      ...users,
      { id: Date.now(), username: `User ${Date.now()}` },
    ]);
  }

  clearUsers() {
    this.userResource.update(() => []);
  }
  stopCallingApi() {
    this.userResource.destroy();
  }
}
