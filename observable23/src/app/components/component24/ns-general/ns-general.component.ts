import { Component } from '@angular/core';
import { NsButtonComponent } from '../ns-button/ns-button.component';
import { NsValueComponent } from '../ns-value/ns-value.component';

@Component({
  selector: 'app-ns-general',
  imports: [NsButtonComponent, NsValueComponent],
  templateUrl: './ns-general.component.html',
  styleUrl: './ns-general.component.scss',
})
export class NsGeneralComponent {}
