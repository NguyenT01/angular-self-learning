import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageChange } from './components/language-change/language-change';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LanguageChange],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'transloco26';
}
