import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-parent',
  imports: [CardComponent],
  templateUrl: './card-parent.component.html',
  styleUrl: './card-parent.component.scss',
})
export class CardParentComponent {}
