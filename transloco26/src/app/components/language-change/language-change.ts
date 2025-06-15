import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-change',
  imports: [CommonModule, FormsModule],
  templateUrl: './language-change.html',
  styleUrl: './language-change.scss',
})
export class LanguageChange {
  readonly transloco = inject(TranslocoService);
  readonly langs = this.transloco.getAvailableLangs();
  selectedLang: string = this.transloco.getActiveLang();

  switchLangage(langue: string) {
    this.transloco.setActiveLang(langue);
  }
}
