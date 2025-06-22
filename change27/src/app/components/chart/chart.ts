import { JsonPipe } from '@angular/common';
import {
  Component,
  effect,
  ElementRef,
  inject,
  NgZone,
  viewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-chart',
  imports: [JsonPipe],
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
})
export class ChartComponent {
  readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('chart');
  chartInstance?: Chart;
  data: number[] = [12, 21];

  constructor() {
    const ngZone = inject(NgZone);
    effect(() => {
      const ctx = this.canvas().nativeElement;
      ngZone.runOutsideAngular(() => {
        this.chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Green', 'Red'],
            datasets: [{ label: 'Score', data: this.data }],
          },
        });
      });
    });
  }

  changeData() {
    this.data = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];
  }
}
