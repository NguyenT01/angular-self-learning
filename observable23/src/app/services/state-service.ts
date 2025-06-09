import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class StateService {
  private readonly counter = signal<number>(0);

  getCounter = this.counter.asReadonly();

  updateCounter(value: number) {
    this.counter.set(value);
  }

  counterUp() {
    this.counter.update((value) => value + 1);
  }
}
