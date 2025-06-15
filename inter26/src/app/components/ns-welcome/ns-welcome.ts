import { Component, signal } from '@angular/core';

export interface UserModel {
  firstname: string;
  lastname: string;
}

@Component({
  selector: 'app-ns-welcome',
  imports: [],
  templateUrl: './ns-welcome.html',
  styleUrl: './ns-welcome.scss',
})
export class NsWelcome {
  user: UserModel = {
    firstname: 'Nguyen',
    lastname: 'Van A',
  };

  readonly status = [
    $localize`PENDING`,
    $localize`IN PROGRESS`,
    $localize`DONE`,
  ];

  readonly goodNight = $localize`:@@goodNight.hello:Good night, ${this.user.firstname}`;

  readonly racesPlanned = signal(3);
}
