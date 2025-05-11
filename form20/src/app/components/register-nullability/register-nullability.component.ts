import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-nullability',
  imports: [ReactiveFormsModule],
  templateUrl: './register-nullability.component.html',
  styleUrl: './register-nullability.component.scss',
})
export class RegisterNullabilityComponent {
  private readonly fb = inject(FormBuilder);

  readonly usernameCtrl = this.fb.control('');
  readonly userForm = this.fb.group({
    username: this.usernameCtrl,
    password: [''],
  });

  enable(name: string) {
    this.userForm.get(name)?.enable();
  }
  disable(name: string) {
    this.userForm.get(name)?.disable();
  }

  reset() {
    this.userForm.reset();
  }

  submit() {
    const username = this.userForm.value.username;
    console.log(username);
    console.log(this.userForm.value);
    console.log(this.userForm.getRawValue());
  }
}
