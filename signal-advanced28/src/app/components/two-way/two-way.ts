import { Component, signal } from '@angular/core';
import { NsPagination } from '../ns-pagination/ns-pagination';

@Component({
  selector: 'app-two-way',
  imports: [NsPagination],
  templateUrl: './two-way.html',
  styleUrl: './two-way.scss',
})
export class TwoWay {
  page = signal(1);
  collectionSize = signal(100);
  pageSize = signal(10);
}
