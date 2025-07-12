import { Component, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface UserModel {
  id: number;
  username: string;
}

@Component({
  selector: 'app-user-list-component',
  imports: [FormsModule],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.scss',
})
export class UserListComponent {
  protected readonly searchKey = signal<string>('');

  protected readonly usersResource = resource({
    params: () => ({ searchKey: this.searchKey() }),
    defaultValue: [],
    loader: async (loaderParams) => {
      const params = loaderParams.params;
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${params.searchKey}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.users) {
          return data.users as UserModel[];
        }
      }
      return [];
    },
  });

  setNewUser() {
    this.usersResource.update((users) => [
      ...users,
      { id: Date.now(), username: `User ${Date.now()}` },
    ]);
  }

  clearUsers() {
    this.usersResource.update(() => []);
  }

  stopCallingApi() {
    this.usersResource.destroy();
  }
}
