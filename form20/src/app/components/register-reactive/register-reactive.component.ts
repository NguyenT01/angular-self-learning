import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidator } from '../../validators/custom-validator';
import { AsyncValidators } from '../../validators/async-validator';

@Component({
  selector: 'app-register-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './register-reactive.component.html',
  styleUrl: './register-reactive.component.scss',
})
export class RegisterReactiveComponent {
  readonly asyncValidator = inject(AsyncValidators);

  private readonly fb = inject(FormBuilder);

  readonly usernameCtrl = this.fb.control(
    '',
    [Validators.required, Validators.minLength(3)],
    (control) => this.asyncValidator.isUsernameAvailable(control)
  );
  readonly passwordCtrl = this.fb.control('', [
    Validators.required,
    CustomValidator.containsAtleastNumberInString(2),
  ]);
  readonly birthDateCtrl = this.fb.control('', [
    Validators.required,
    CustomValidator.isOldEnough,
  ]);

  readonly userForm = this.fb.group({
    username: this.usernameCtrl,
    password: this.passwordCtrl,
    birthDate: this.birthDateCtrl,
  });

  register(): void {
    console.log(this.userForm.value);
  }
}
