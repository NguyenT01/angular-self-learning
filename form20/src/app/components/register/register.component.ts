import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import UserModel from '../../models/user-model';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: true,
})
export class RegisterComponent {
  readonly user: UserModel = {
    username: '',
    password: '',
  };

  constructor() {}

  register(): void {
    console.log('Submitted: ', this.user);
  }
}
