import { Component, signal } from '@angular/core';
import { ChartComponent } from '../chart-component/chart-component';

@Component({
  selector: 'app-home-component',
  imports: [ChartComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  readonly isVisible = signal(false);

  toggle() {
    this.isVisible.set(!this.isVisible());
  }
}
