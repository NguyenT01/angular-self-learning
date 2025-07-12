import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface UserModel3 {
  id: number;
  username: string;
}

interface TResponse {
  users: UserModel3[];
}

@Component({
  selector: 'app-user-list-http',
  imports: [FormsModule],
  templateUrl: './user-list-http.html',
  styleUrl: './user-list-http.scss',
})
export class UserListHttp {
  readonly searchKey = signal<string>('');

  readonly usersResouce = httpResource<UserModel3[]>(
    () => {
      const query = this.searchKey();
      return query
        ? {
            url: 'https://dummyjson.com/users/search',
            method: 'GET',
            params: { q: query },
          }
        : undefined;
    },
    {
      defaultValue: [],
      parse: (response: unknown) => {
        if (response) {
          return (response as TResponse).users;
        }
        return [];
      },
    }
  );
}
