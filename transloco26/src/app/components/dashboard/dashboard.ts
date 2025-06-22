import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { TranslateService } from '../../services/translate.service';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

export interface Food {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [TranslocoModule, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly translateService = inject(TranslateService);
  private readonly transloco = inject(TranslocoService);

  readonly total = signal(4);

  message = toSignal(
    this.transloco.selectTranslate('dashboard.unread', { count: this.total() })
  );
  selection: Food[] = [
    { id: 1, name: 'fish' },
    { id: 2, name: 'egg' },
    { id: 3, name: 'celery' },
  ];

  selectedFood: Food | null = null;
  ingredientSelected: string | null = null;

  updateFood(): void {
    const selected = this.selection.find(
      (f) => f.name === this.ingredientSelected
    );
    if (selected) {
      this.selectedFood = {
        id: selected.id,
        name: this.translateService.translate(`selections.${selected.name}`),
      };
    }
    console.log(this.selectedFood);
    console.log(this.ingredientSelected);
  }

  constructor() {
    this.initLang();
  }

  initLang() {
    this.translateService
      .onLangChange()
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateFood());
  }

  toggleLanguage() {
    this.translateService.switchLanguage();
  }
}
