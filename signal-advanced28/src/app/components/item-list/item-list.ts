import { Component, input, linkedSignal } from '@angular/core';

export interface ItemModel {
  id: number;
  name: string;
}

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.scss',
})
export class ItemList {
  readonly items = input.required<ItemModel[]>();
  readonly enabled = input.required<boolean>();
  protected readonly selectedItem = linkedSignal<ItemModel[], ItemModel>({
    source: this.items,
    computation: (items, previous) => {
      if (previous !== undefined) {
        const previousChoice = previous.value;
        if (items.map((item) => item.name).includes(previousChoice.name)) {
          return previousChoice;
        }
      }
      return items[0];
    },
  });

  protected pickItem(item: ItemModel) {
    this.selectedItem.set(item);
  }
}
