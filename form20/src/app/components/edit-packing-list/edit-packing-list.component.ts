import { KeyValuePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-packing-list',
  imports: [ReactiveFormsModule, KeyValuePipe],
  templateUrl: './edit-packing-list.component.html',
  styleUrl: './edit-packing-list.component.scss',
})
export class EditPackingListComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  readonly equipmentRecord = this.fb.record({
    toothbrush: true,
  });

  readonly packingListForm = this.fb.group({
    equipments: this.equipmentRecord,
  });

  addEquipment(equipment: string) {
    this.equipmentRecord.addControl(equipment, this.fb.control(true));
  }

  removeEquipment(equipment: string) {
    this.equipmentRecord.removeControl(equipment);
  }

  submit() {
    console.log(this.packingListForm.value);
  }
}
