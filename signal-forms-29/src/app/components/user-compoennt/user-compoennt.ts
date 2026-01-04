import { Component, signal } from '@angular/core';
import { AddressComponent } from '../address-component/address-component';
import { apply, Field, form, required, schema } from '@angular/forms/signals';

export interface Address {
  number: string;
  street: string;
  zipcode: string;
  city: string;
}

interface User {
  firstname: string;
  lastname: string;
  address: Address;
}

export const addressSchema = schema<Address>((field) =>{
  required(field.number, {message: 'Number is required'});
  required(field.street, {message: 'Street is required'});
  required(field.zipcode, {message: 'Zipcode is required'});
  required(field.city, {message: 'City is required'});
})

@Component({
  selector: 'app-user-compoennt',
  imports: [AddressComponent, Field],
  templateUrl: './user-compoennt.html',
  styleUrl: './user-compoennt.css',
})
export class UserCompoennt {
  private readonly user = signal<User>({
    firstname: '',
    lastname: '',
    address: {
      number: '',
      street: '',
      zipcode: '',
      city: '',
    },
  });

  protected readonly userForm = form(this.user, (f) =>{
    required(f.firstname, {message: 'First name is required'});
    required(f.lastname, {message: 'Last name is required'});
    apply(f.address, addressSchema);
  });

  protected submit(event: Event){
    event.preventDefault();
    console.log(this.user());
  }
}
