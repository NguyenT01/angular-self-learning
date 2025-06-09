import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, TemplateRef } from '@angular/core';

export interface ProgressContext {
  percentage: number;
}

@Component({
  selector: 'app-progress',
  imports: [NgTemplateOutlet],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class ProgressComponent {
  readonly min = input(0);
  readonly max = input(100);
  readonly value = input.required<number>();
  readonly percentage = computed(
    () => (100 * (this.value() - this.min())) / (this.max() - this.min())
  );
  readonly formatter = input<TemplateRef<ProgressContext>>();
  readonly formatterContext = computed<ProgressContext>(() => ({
    percentage: this.percentage(),
    $implicit: this.max(),
  }));
}
