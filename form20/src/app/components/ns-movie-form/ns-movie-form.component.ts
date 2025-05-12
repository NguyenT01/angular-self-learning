import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NsRatingComponent } from '../ns-rating/ns-rating.component';

@Component({
  selector: 'app-ns-movie-form',
  imports: [ReactiveFormsModule, NsRatingComponent],
  templateUrl: './ns-movie-form.component.html',
  styleUrl: './ns-movie-form.component.scss',
})
export class NsMovieFormComponent {
  private readonly fb = inject(FormBuilder);
  readonly movieForm = this.fb.group({
    rating: [null],
  });

  save() {
    console.log('saved: ', this.movieForm.value);
  }
}
