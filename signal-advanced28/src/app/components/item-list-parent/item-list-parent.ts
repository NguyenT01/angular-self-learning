import { Component, signal } from '@angular/core';
import { ItemList, ItemModel } from '../item-list/item-list';

@Component({
  selector: 'app-item-list-parent',
  imports: [ItemList],
  templateUrl: './item-list-parent.html',
  styleUrl: './item-list-parent.scss',
})
export class ItemListParent {
  protected items: ItemModel[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  protected enable = signal(true);

  public forceResetPlusOne() {
    // add 1 item to list when this function triggered
    const nextId = this.items.length + 1;
    this.items = [...this.items, { id: nextId, name: `Item ${nextId}` }];
  }

  switchEnable() {
    this.enable.set(!this.enable());
  }
}
