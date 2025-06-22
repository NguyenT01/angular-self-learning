import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ErrorComponent } from '../error-component/error-component';

@Component({
  selector: 'app-form1',
  imports: [ReactiveFormsModule, TranslocoModule, ErrorComponent],
  templateUrl: './form1.html',
  styleUrl: './form1.scss',
})
export class Form1 {
  readonly transloco = inject(TranslocoService);
  readonly fb = inject(FormBuilder);

  readonly nameCtrl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('[a-zA-Z ]*'),
  ]);

  readonly ageCtrl = this.fb.control(0, [
    Validators.required,
    Validators.min(6),
    Validators.max(100),
  ]);

  readonly fg = this.fb.group({
    name: this.nameCtrl,
    age: this.ageCtrl,
  });
}
