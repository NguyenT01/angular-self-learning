import { Component, inject, resource, signal } from '@angular/core';
import { apply, applyWhen, applyWhenValue, debounce, disabled, Field, form, hidden, min, readonly, REQUIRED, submit, validate, validateAsync, validateTree } from '@angular/forms/signals';
import { emailSchema, requiredAndMinLengthSchema, requiredSchema } from './validators';
import { UserService2 } from '../../services/user-service2';
import { UserService } from '../../services/user-service';
import { FormsModule } from '@angular/forms';

export interface Account{
  email: string;
  password: string;
  nickname: string;
  age: number;
  year: number;
}

@Component({
  selector: 'app-register-component',
  imports: [Field, FormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
  protected readonly REQUIRED = REQUIRED;

  private readonly account = signal<Account>({
    email: '',
    password: '',
    nickname: '',
    age: 0,
    year: 2000
  });

  readonly hasNickName = signal<boolean>(false);

  private readonly userService2 = inject(UserService2);
  private readonly userService = inject(UserService);

  protected readonly accountForm = form(this.account, (formX) => {
    // Email
    apply(formX.email, emailSchema)

    // Password
    apply(formX.password, requiredAndMinLengthSchema);

    // Apply required to all fields

    validate(formX.password, (context) => {
        const password = context.value(); // Giá trị hiện tại của password
        return this.isTooWeak(password)
          ? { kind: 'too-weak', message: 'Mật khẩu quá yếu! Cần ít nhất 8 ký tự, có chữ hoa và số.' }
          : undefined;
      });

      validate(formX, (context) => {
        const {email, password} = context.value();
        return email && password && email === password
          ? { kind: 'same-as-email', message: 'Mật khẩu không được giống email'}
          : undefined;
      })

      validateTree(formX, (context) => {
        const {email, password} = context.value();
        return email && password && email === password
          ? {
            field: context.field.email,
            kind: 'same-as-email',
            message: 'Email không được giống mật khẩu'
          }
          : undefined;
      })

      validate(formX.password, (context) => {
        const email = context.valueOf(formX.email);
        const password = context.value();
        return email && password && email === password
          ? { kind: 'same-as-email', message: 'Mật khẩu của bạn không được giống email'}
          : undefined;
      });

      debounce(formX.email, 1000);
      validateAsync(formX.email, {
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

      // DYNAMIC
      hidden(formX.nickname, () => !this.hasNickName());
      disabled(formX.password, ({stateOf}) => {
        return stateOf(formX.email).valid() ?  false : 'Please enter a valid email';
      });

      readonly(formX.age, (context) => {
        return !context.stateOf(formX.email).valid();
      });

      applyWhenValue(formX,
        () => this.hasNickName(),
        (f) => {
          apply(f.nickname, requiredSchema)
        }
      );

      applyWhen(formX,
        (context) => {
          return context.valueOf(formX.nickname).includes('admin')
        },
        (f) => {
          min(f.year, 2025, {message: 'Year must be greater than 2025'})
        }
      )
  })

  isTooWeak(password: string): boolean {
    return password.length < 8;
  }

  protected async submit(event: Event){
    event.preventDefault();

    await submit(this.accountForm, async (f) =>{
      console.log('submit')
      console.log(f().value())
      const {email, password} = f().value();

      try{
        await this.userService.authenticate({login: email, password});
        return null;
      }
      catch {
        return [
        // PARENT VALIDATION
          {
          kind: 'invalid-credentials',
          message: 'Tên đăng nhập hoặc mật khẩu không chính xác'
        },
        // FIELD VALIDATION (ONLY EMAIL)
        {
          field: f.email,
          kind: 'invalid-credentials',
          message: 'Tên đăng nhập hoặc mật khẩu không chính xác'
        }]
      }
    })
  }
}
