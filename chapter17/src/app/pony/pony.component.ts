import { Component, inject, input, Signal } from '@angular/core';
import PonyModel from '../../models/pony-model';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PonyService } from '../services/pony-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-pony',
  imports: [RouterOutlet],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.scss',
})
export class PonyComponent {
  readonly ponyModel: Signal<PonyModel | undefined>;
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);

  // auto binding input
  readonly raceName = input.required<string>();

  // snapshot
  readonly queryParamHeight = this.route.snapshot.queryParamMap.get('height');

  // observable to signal
  readonly queryParamWidth = toSignal(
    this.route.queryParams.pipe(map((params) => params['width']))
  );

  readonly staticDataKm = inject(ActivatedRoute).snapshot.data['km'];

  constructor() {
    console.log('Constructor called');
    const ponyService = inject(PonyService);
    this.ponyModel = toSignal(
      this.route.paramMap.pipe(
        map((params) => params.get('ponyId') as unknown as number),
        switchMap((id) => ponyService.get(id))
      )
    );

    console.log(this.route.snapshot);
  }

  backToBirthCertificate() {
    this.router.navigate(['birth-certificate'], { relativeTo: this.route });
  }

  backToTrackRecord() {
    this.router.navigate(['track-record'], { relativeTo: this.route });
  }

  backToReviews() {
    this.router.navigate(['reviews'], { relativeTo: this.route });
  }
}
