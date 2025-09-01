import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-form.component',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  invalidForm = signal(true);
  protected invalidSubmission = signal(true);

  submit() {
    if (this.invalidForm()) {
      this.invalidSubmission.set(true);
    }
  }

  changeFormValidity() {
    this.invalidForm.set(!this.invalidForm());
    this.invalidSubmission.set(this.invalidForm());
  }
}
