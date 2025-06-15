import { Component, input, OnInit, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HashMap, TranslocoModule } from '@jsverse/transloco';

export interface ErrorMessage {
  code: string;
  params?: HashMap<string | number> | null;
}

@Component({
  selector: 'app-error-component',
  imports: [TranslocoModule],
  templateUrl: './error-component.html',
  styleUrl: './error-component.scss',
})
export class ErrorComponent implements OnInit {
  readonly formCtrl = input<FormControl>();

  readonly errorMessage = signal<ErrorMessage[]>([]);

  ngOnInit() {
    this.formCtrl()?.valueChanges.subscribe(() => this.handleError());
  }

  handleError() {
    if (this.formCtrl()?.errors && this.formCtrl()?.dirty) {
      if (this.formCtrl()?.hasError('required')) {
        this.errorMessage?.set([{ code: 'required', params: null }]);
      } else if (this.formCtrl()?.hasError('minlength')) {
        this.errorMessage?.set([{ code: 'minLengthN', params: { n: 3 } }]);
      } else if (this.formCtrl()?.hasError('min')) {
        this.errorMessage?.set([{ code: 'minN', params: { n: 6 } }]);
      } else if (this.formCtrl()?.hasError('max')) {
        this.errorMessage?.set([{ code: 'maxN', params: { n: 100 } }]);
      } else if (this.formCtrl()?.hasError('pattern')) {
        this.errorMessage?.set([{ code: 'pattern', params: null }]);
      } else {
        this.errorMessage?.set([{ code: 'unknown', params: null }]);
      }
    } else {
      this.errorMessage?.set([]);
    }
  }
}
