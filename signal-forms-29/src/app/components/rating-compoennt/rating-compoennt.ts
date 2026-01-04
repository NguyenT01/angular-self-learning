import { Component, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-rating-compoennt',
  imports: [],
  templateUrl: './rating-compoennt.html',
  styleUrl: './rating-compoennt.css',
})
export class RatingCompoennt implements FormValueControl<number | null>{
  //value, touched is REQUIRED
  readonly value = model<number | null>(null);
  readonly touched = model<boolean>(false);

  //Optional - Nhận state từ form
  readonly disabled = input(false);

  // giá trị có thể chọn (0-5, 0 nghĩa là chưa chọn)
  protected readonly pickableValues = [1,2,3,4,5];
}
