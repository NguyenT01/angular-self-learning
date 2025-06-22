import {
  Component,
  computed,
  Pipe,
  PipeTransform,
  signal,
} from '@angular/core';

export interface UserModel {
  id: number;
  firstname: string;
  lastname: string;
  title: string;
}

@Pipe({
  name: 'displayName',
  standalone: true,
})
export class DisplayNamePipe implements PipeTransform {
  transform(user: UserModel): string {
    console.log('pipe called');
    return `${user.title} ${user.firstname} ${user.lastname}`;
  }
}

@Component({
  selector: 'app-menu',
  imports: [DisplayNamePipe],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  counter = signal(0);
  protected readonly user = signal<UserModel>({
    id: 1001,
    firstname: 'Jane',
    lastname: 'Doe',
    title: 'Miss',
  });

  protected user2: UserModel = {
    id: 1001,
    firstname: 'Jane',
    lastname: 'Doe',
    title: 'Miss',
  };

  counterUp() {
    this.counter.update((value) => value + 1);
    this.user2.firstname = 'John';
  }

  readonly username = computed(() => {
    console.log('called');
    return `${this.user().title} ${this.user().firstname} ${
      this.user().lastname
    }`;
  });
}
