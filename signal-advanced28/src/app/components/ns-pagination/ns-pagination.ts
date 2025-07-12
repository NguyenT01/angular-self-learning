import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'app-ns-pagination',
  imports: [],
  templateUrl: './ns-pagination.html',
  styleUrl: './ns-pagination.scss',
})
export class NsPagination {
  readonly collectionSize = input.required<number>();
  readonly pageSize = input.required<number>();
  readonly page = model.required<number>();

  protected readonly pages = computed(() => this.computePages());

  protected goToPage(page: number) {
    this.page.set(page);
  }

  private computePages() {
    return Array.from(
      { length: Math.ceil(this.collectionSize() / this.pageSize()) },
      (_, i) => i + 1
    );
  }
}
