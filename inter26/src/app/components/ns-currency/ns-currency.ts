import { CurrencyPipe } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, inject } from '@angular/core';

@Component({
  selector: 'app-ns-currency',
  imports: [CurrencyPipe],
  templateUrl: './ns-currency.html',
  styleUrl: './ns-currency.scss',
})
export class NsCurrency {
  protected readonly currency = inject(DEFAULT_CURRENCY_CODE);
}
