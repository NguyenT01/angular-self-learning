import { Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-transloco-component',
  imports: [TranslocoModule],
  templateUrl: './transloco-component.html',
  styleUrl: './transloco-component.scss',
})
export class TranslocoComponent {
  private readonly transloco = inject(TranslocoService);
  private readonly username = 'Nguyen Van A';

  getTitle() {
    return this.transloco.translate('title');
  }
}
