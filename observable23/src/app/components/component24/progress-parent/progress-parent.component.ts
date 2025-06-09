import { Component } from '@angular/core';
import { ProgressComponent } from '../progress/progress.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-parent',
  imports: [ProgressComponent, CommonModule],
  templateUrl: './progress-parent.component.html',
  styleUrl: './progress-parent.component.scss',
})
export class ProgressParentComponent {}
