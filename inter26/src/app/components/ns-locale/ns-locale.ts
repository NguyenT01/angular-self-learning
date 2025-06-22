import { DecimalPipe } from '@angular/common';
import { Component, inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-ns-locale',
  imports: [DecimalPipe],
  templateUrl: './ns-locale.html',
  styleUrl: './ns-locale.scss',
})
export class NsLocale {
  readonly locale = inject(LOCALE_ID);
}
