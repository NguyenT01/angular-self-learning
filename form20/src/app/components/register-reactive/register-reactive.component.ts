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

  readonly userForm = this.fb.group({
    username: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: this.fb.control('', Validators.required),
  });

  register(): void {
    console.log(this.userForm.value);
  }
}
