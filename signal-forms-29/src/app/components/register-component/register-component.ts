import { Component, signal } from '@angular/core';
import { email, Field, form, minLength, required, REQUIRED } from '@angular/forms/signals';

export interface Account{
  email: string;
  password: string;
}

@Component({
  selector: 'app-register-component',
  imports: [Field],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
  protected readonly REQUIRED = REQUIRED;

  private readonly account = signal<Account>({
    email: '',
    password: ''
  });

  protected readonly accountForm = form(this.account, (form) => {
    // Email
    required(form.email, {message: 'Email là bắt buộc'});
    email(form.email, {message: 'Email không hợp lệ'});

    // Password
    required(form.password, {message: 'Mật khẩu là bắt buộc'});
    minLength(form.password, 6, {
      message: (field) => `Mật khẩu phải có ít nhất 6 ký tự, hiện tại chỉ có ${field.value().length} ký tự`
    })
  })

  submit(event: Event){
    event.preventDefault();
    
  }
}
