import { Component, inject, signal } from '@angular/core';
import { form, submit, Field } from '@angular/forms/signals';
import { UserService } from '../../services/user-service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login-component',
  imports: [Field],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  private readonly userService = inject(UserService);

  private readonly credentials = signal({
    login: '',
    password: '',
  });

  protected readonly loginForm = form(this.credentials);

  readonly results = signal<string | null>(null);

  protected async authenticate(event: SubmitEvent) {
    event.preventDefault();
    await submit(this.loginForm, async (f) => {
      const { login, password } = f().value();

      try {
        const result = await this.userService.authenticate({ login, password });
        this.results.set(result.data);
        return [];
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return [{ kind: 'invalid-credentials', message }];
      }
    });

    console.log(this.loginForm().errors());
  }

  protected async authenticateObservable(event: SubmitEvent) {
    event.preventDefault();
    await submit(this.loginForm, async (f) => {
      const { login, password } = f().value();

      try {
        const result = await firstValueFrom(
          this.userService.authenticateObservable({ login, password })
        );
        this.results.set(result.data);
        return [];
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return [{ kind: 'invalid-credentials', message }];
      }
    });

    console.log(this.loginForm().errors());
  }

  resetForm(){
    this.credentials.set({
      login: '',
      password: '',
    });
  }
}
