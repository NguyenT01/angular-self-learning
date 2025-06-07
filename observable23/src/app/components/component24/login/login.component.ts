import { Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FocusDirective } from '../directives/ns-focus.directive';

@Component({
  selector: 'app-login',
  imports: [FormsModule, FocusDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  credential = { login: '' };
  credentials = { login: '' };

  readonly credentialForm = viewChild.required(NgForm);

  authenticate(): void {
    if (this.credentialForm().valid) {
      console.log(this.credentialForm().value);
    }
  }
}
