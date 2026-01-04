import { Component, signal } from '@angular/core';
import { apply, applyEach, email, Field, form, minLength, required, REQUIRED, validate, validateTree } from '@angular/forms/signals';
import { emailSchema, requiredAndMinLengthSchema, requiredSchema } from './validators';

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
    apply(form.email, emailSchema)

    // Password
    apply(form.password, requiredAndMinLengthSchema);

    // Apply required to all fields
    applyEach(form, requiredSchema);

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
