import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidator } from '../../validators/custom-validator';
import { AsyncValidators } from '../../validators/async-validator';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ValdemortModule } from 'ngx-valdemort';

@Component({
  selector: 'app-register-reactive',
  imports: [ReactiveFormsModule, ValdemortModule],
  templateUrl: './register-reactive.component.html',
  styleUrl: './register-reactive.component.scss',
})
export class RegisterReactiveComponent {
  readonly asyncValidator = inject(AsyncValidators);

  private readonly fb = inject(FormBuilder);

  readonly usernameCtrl = this.fb.control('', {
    updateOn: 'blur',
    validators: [Validators.required, Validators.minLength(3)],
    asyncValidators: [
      this.asyncValidator.isUsernameAvailable.bind(this.asyncValidator),
    ],
  });

  readonly birthDateCtrl = this.fb.control('', [
    Validators.required,
    CustomValidator.isOldEnough,
  ]);

  readonly passwordCtrl = this.fb.control('', [
    Validators.required,
    CustomValidator.containsAtleastNumberInString(2),
  ]);

  readonly confirmCtrl = this.fb.control('', [Validators.required]);

  readonly passwordGroup = this.fb.group(
    {
      password: this.passwordCtrl,
      confirm: this.confirmCtrl,
    },
    {
      validators: CustomValidator.passwordMatch,
    }
  );

  readonly userForm = this.fb.group(
    {
      username: this.usernameCtrl,
      birthDate: this.birthDateCtrl,
      passwordForm: this.passwordGroup,
    },
    {
      updateOn: 'blur',
    }
  );

  readonly passwordStrength = toSignal(
    this.passwordCtrl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((newValue) => this.computePasswordStrength(newValue))
    ),
    { initialValue: 0 }
  );

  computePasswordStrength(value: string | null): number {
    if (!value) {
      return 0;
    }
    return value.length;
  }

  register(): void {
    console.log(this.userForm.value);
  }
}
