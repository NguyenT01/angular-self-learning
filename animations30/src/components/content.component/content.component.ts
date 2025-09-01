import { AnimationCallbackEvent, Component, signal } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-content.component',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  protected display = signal(false);

  protected enterClassSignal = signal(['fade-in', 'slide-in']);
  protected leaveClassSignal = signal(['fade-out']);

  toggle() {
    this.display.set(!this.display());
  }

  rotate(event: AnimationCallbackEvent) {
    gsap.to(event.target, {
      rotation: 360,
      duration: 0.3,
      onComplete: () => {
        event.animationComplete();
      },
    });
  }
}
