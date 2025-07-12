import { JsonPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Status {
  dirty: boolean;
  touched: boolean;
  retry: boolean;
}

@Component({
  selector: 'app-value-eq',
  imports: [JsonPipe],
  templateUrl: './value-eq.html',
  styleUrl: './value-eq.scss',
})
export class ValueEq {
  readonly status = signal<Status>(
    { dirty: false, touched: false, retry: false },
    {
      equal: (prev, next) => {
        return prev.dirty === next.dirty && prev.touched === next.touched;
      },
    }
  );

  readonly errorDisplay = computed(
    () => this.status().dirty ?? this.status().touched
  );

  toggleStatus() {
    this.status.update((s) => {
      return {
        ...s,
        dirty: s.dirty,
        touched: s.touched,
        retry: !s.retry,
      };
    });
  }
}
