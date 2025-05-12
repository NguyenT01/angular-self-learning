import { Component, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ns-rating',
  imports: [],
  templateUrl: './ns-rating.component.html',
  styleUrl: './ns-rating.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NsRatingComponent),
      multi: true,
    },
  ],
})
export class NsRatingComponent implements ControlValueAccessor {
  private onChange: (rating: number) => void = () => {};
  onTouched: () => void = () => {};
  readonly value = signal<number | null>(null);
  readonly disabled = signal(false);
  readonly pickableValues = [0, 1, 2, 3, 4, 5];

  writeValue(v: number | null): void {
    this.value.set(v);
  }
  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  setValueAndPropagateChanges(value: number): void {
    this.value.set(value);
    this.onChange(value);
  }
}
