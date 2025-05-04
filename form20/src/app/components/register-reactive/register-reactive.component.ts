import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './register-reactive.component.html',
  styleUrl: './register-reactive.component.scss',
})
export class RegisterReactiveComponent {
  private readonly fb = inject(FormBuilder);

  readonly usernameCtrl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  readonly passwordCtrl = this.fb.control('', Validators.required);

  readonly userForm = this.fb.group({
    username: this.usernameCtrl,
    password: this.passwordCtrl,
  });

  register(): void {
    console.log(this.userForm.value);
  }
}
