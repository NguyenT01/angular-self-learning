import { Component, inject } from '@angular/core';
import { ClearDirective } from '../directives/ns-clear.directive';
import { WindowResizeDirective } from '../directives/ns-window-resize.directive';
import { ClearTraditionalDirective } from '../directives/ns-clear-traditional.directive';
import { AddClassIfRequiredDirective } from '../directives/ns-add-class.directive';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export interface UserModel {
  name: string;
}

@Component({
  selector: 'app-host-listener',
  imports: [
    ClearDirective,
    WindowResizeDirective,
    ClearTraditionalDirective,
    AddClassIfRequiredDirective,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './host-listener.component.html',
  styleUrl: './host-listener.component.scss',
  standalone: true,
})
export class HostListenerComponent {
  user: UserModel;

  constructor() {
    this.user = { name: '' };
  }

  readonly fb = inject(FormBuilder);
  readonly form = this.fb.group({
    name: ['', [Validators.required]],
  });
}
