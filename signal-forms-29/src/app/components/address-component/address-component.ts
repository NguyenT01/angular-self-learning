import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';
import { Address } from '../user-compoennt/user-compoennt';

@Component({
  selector: 'app-address-component',
  imports: [Field],
  templateUrl: './address-component.html',
  styleUrl: './address-component.css',
})
export class AddressComponent {
  readonly addressField = input.required<FieldTree<Address>>();
}
