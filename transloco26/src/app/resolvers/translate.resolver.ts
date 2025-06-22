import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { map, Observable, take } from 'rxjs';

export const translateResolver2: ResolveFn<void> = (): Observable<void> => {
  const transloco = inject(TranslocoService);

  // Đảm bảo ngôn ngữ hiện tại được tải hoàn tất
  return transloco.load(transloco.getActiveLang()).pipe(
    take(1), // Chỉ lấy lần đầu tiên
    map(() => undefined) // Resolver cần trả về `void` để Angular hiểu
  );
};
