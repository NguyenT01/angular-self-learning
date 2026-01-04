import { Component, signal } from '@angular/core';
import { email, Field, form, minLength, required, REQUIRED, validate, validateTree } from '@angular/forms/signals';

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
    });

    validate(form.password, (context) => {
        const password = context.value(); // Giá trị hiện tại của password
        return this.isTooWeak(password)
          ? { kind: 'too-weak', message: 'Mật khẩu quá yếu! Cần ít nhất 8 ký tự, có chữ hoa và số.' }
          : undefined;
      });

      validate(form, (context) => {
        const {email, password} = context.value();
        return email && password && email === password
          ? { kind: 'same-as-email', message: 'Mật khẩu không được giống email'}
          : undefined;
      })

      validateTree(form, (context) => {
        const {email, password} = context.value();
        return email && password && email === password
          ? {
            field: context.field.email,
            kind: 'same-as-email',
            message: 'Email không được giống mật khẩu'
          }
          : undefined;
      })

      validate(form.password, (context) => {
        const email = context.valueOf(form.email);
        const password = context.value();
        return email && password && email === password
          ? { kind: 'same-as-email', message: 'Mật khẩu của bạn không được giống email'}
          : undefined;
      })
  })

  isTooWeak(password: string): boolean {
    return password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password);
  }

  submit(event: Event){
    event.preventDefault();
  }
}
