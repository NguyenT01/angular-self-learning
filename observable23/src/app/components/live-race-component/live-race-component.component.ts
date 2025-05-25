import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  Signal,
} from '@angular/core';
import { Subscription } from 'rxjs';
import RaceService from '../../services/race-service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import StateService from '../../services/state-service';

@Component({
  selector: 'app-live-race-component',
  imports: [],
  templateUrl: './live-race-component.component.html',
  styleUrl: './live-race-component.component.scss',
})
export class LiveRaceComponentComponent implements OnDestroy {
  private subsription!: Subscription;
  private readonly raceService = inject(RaceService);
  readonly liveRace: Signal<string | undefined | null> = toSignal(
    this.raceService.live(),
    { initialValue: null }
  );

  private readonly state = inject(StateService);
  readonly counterState: Signal<number> = this.state.getCounter;

  constructor(destroyRef: DestroyRef) {
    this.callLiveHorse();
    this.callLiveHorseWithPipeDestroy(destroyRef);
  }

  callWithToSignal() {
    this.liveRace();
  }

  callLiveHorse() {
    this.subsription = this.raceService.live().subscribe((data) => {
      console.log('Horse name: ', data);
    });
  }

  callLiveHorseWithPipeDestroy(destroyRef: DestroyRef) {
    this.raceService
      .live()
      .pipe(takeUntilDestroyed(destroyRef))
      .subscribe((data) => {
        console.log('Horse name with pipe: ', data);
      });
  }

  counterUp() {
    this.state.counterUp();
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
}
