import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  readonly transloco = inject(TranslocoService);

  translate(key: string): string {
    return this.transloco.translate(key);
  }

  switchLanguage() {
    const current = this.transloco.getActiveLang();
    this.transloco.setActiveLang(current === 'en' ? 'vi' : 'en');
  }

  onLangChange() {
    return this.transloco.langChanges$;
  }
}
