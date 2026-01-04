import { Component, signal } from '@angular/core';
import { applyEach, Field, form } from '@angular/forms/signals';
import { requiredAndMinLengthSchema } from '../register-component/validators';

interface EventData{
  location: string;
  participants: string[];
}

@Component({
  selector: 'app-event-component',
  imports: [Field],
  templateUrl: './event-component.html',
  styleUrl: './event-component.css',
})
export class EventComponent {
  private readonly event = signal<EventData>({
    location: '',
    participants: []
  });

  protected readonly eventForm = form(this.event, (f) => {
    applyEach(f.participants, requiredAndMinLengthSchema);
  })

  addParticipant(){
    this.event.set({
      ...this.event(),
      participants: [...this.event().participants, '']
    })
  }
}
