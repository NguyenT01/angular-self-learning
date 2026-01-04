import { Component, inject, resource, signal } from '@angular/core';
import { apply, applyEach, debounce, Field, form, REQUIRED, submit, validate, validateAsync, validateHttp, validateTree } from '@angular/forms/signals';
import { emailSchema, requiredAndMinLengthSchema, requiredSchema } from './validators';
import { UserService2 } from '../../services/user-service2';
import { UserService } from '../../services/user-service';

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

  private readonly userService2 = inject(UserService2);
  private readonly userService = inject(UserService);

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
      });

      debounce(form.email, 1000);
      validateAsync(form.email, {
        params: (emailContext) => emailContext.value(),
        factory: (paramsSignal) =>
          resource({
            params: paramsSignal,
            loader: async(loaderParams) => {
              console.log('called')
              return await this.userService2.isEmailRegistered(loaderParams.params);
            }
          }),
          onSuccess: (response: boolean) => response ? {kind: 'email-taken', message: 'Email đã được sử dụng'} : undefined,
          onError: () => ({
            kind: 'email-check-failed',
            message: 'Không thể kiểm tra email, vui lòng thử lại'
          })
      });
  })

  isTooWeak(password: string): boolean {
    return password.length < 8;
  }

  protected async submit(event: Event){
    event.preventDefault();

    await submit(this.accountForm, async (form) =>{
      console.log('submit')
      const {email, password} = form().value();

      try{
        await this.userService.authenticate({login: email, password});
        return;
      }
      catch(error){
        return [
        // PARENT VALIDATION
          {
          kind: 'invalid-credentials',
          message: 'Tên đăng nhập hoặc mật khẩu không chính xác'
        },
        // FIELD VALIDATION (ONLY EMAIL)
        {
          field: form.email,
          kind: 'invalid-credentials',
          message: 'Tên đăng nhập hoặc mật khẩu không chính xác'
        }]
      }
    })
  }
}
