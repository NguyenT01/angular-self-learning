import { Component, signal } from '@angular/core';
import { RatingCompoennt } from '../rating-compoennt/rating-compoennt';
import { form, required, Field, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-movie-review-component',
  imports: [RatingCompoennt, Field],
  templateUrl: './movie-review-component.html',
  styleUrl: './movie-review-component.css',
})
export class MovieReviewComponent {
  protected readonly movie = signal({
    title: '',
    rating: null as number | null
  })
  
  protected readonly movieForm = form(
    this.movie,
    (f) => {
      required(f.title, {message: 'Title is required'})
    }
  )

  protected async submit(){
    await submit(this.movieForm, async (f) => {
      console.log(f().value())
    })

  }
}
