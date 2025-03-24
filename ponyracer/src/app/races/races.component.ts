import { Component, EventEmitter, Inject, Input, LOCALE_ID, Output } from '@angular/core';
import RaceModel from '../../models/race-model';
import { CommonModule, formatNumber } from '@angular/common';
import { PonyModel } from '../../models/pony-model';
import { UserModel } from '../../models/user-model';
import { FromNowPipe } from '../pipes/from-now-pipe';
import { RaceService } from '../services/race-service';
import { ArticleService } from '../services/article-service';
import { HttpResponse } from '@angular/common/http';
import { ArticleModel } from '../../models/article-model';

@Component({
  selector: 'ns-races',
  imports: [
    CommonModule,
    FromNowPipe
  ],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css',
  standalone: true
})
export class RacesComponent {
  @Input() counter2: number = 0;
  @Output() newRaceAvailable: EventEmitter<string> = new EventEmitter<string>();

  races: Array<RaceModel> = [];


  ponies =  new Map<number, PonyModel>();

  asyncGretting = new Promise<string>(resolve =>{
    window.setTimeout(() => resolve('Hello'), 3000)
  })

  asyncUser = new Promise<UserModel>(resolve =>{
    window.setTimeout(() => resolve({name: 'Cédric'}), 3000)
  })

  // 30th January 2025, 14:30:00
  sampleDate: Date = new Date(2025,0,30, 14,30,0);

  fontWeight: string = 'bold';
  color: string = 'black';
  isAwsome: boolean = true;

  formattedSpeed: string;

  httpRaces : Array<RaceModel> = [];

  constructor(@Inject(LOCALE_ID) locale: string, private readonly raceService: RaceService,
private readonly articleService: ArticleService){
    this.formattedSpeed = formatNumber(123.1, locale, '.2');
    this.getHttpRaces();
    this.createArticle();
    this.getArticleWithAllHttpResponses();
    this.getArticleWithParams();
  }

  getArticleWithParams(){
    const postId = 1;
    this.articleService.getArticleCommentsWithParams(postId).subscribe(articles =>{
      console.log('Articles: ', articles)
    })
  }
  
  getHttpRaces(){
    this.raceService.getListByHttpClient().subscribe(races => {
      this.httpRaces = races;
    })
  }
  createArticle(){
    const newArticle = {
      title: 'My article',
      body: 'This is my article',
      userId: 1
    };

    this.articleService.createArticle(newArticle).subscribe(article =>{
      console.log('Article created', article)
    })

  }

  getArticleWithAllHttpResponses(){
    this.articleService.getArticleWithAllHttpResponses().subscribe((response: HttpResponse<ArticleModel>) =>{
      console.log(response);
      console.log(response.status);
      console.log(response.headers.keys());
    })
  }

  race = {
    startInstant: '2023-02-10T10:00:00.000Z'
  }


  refreshRaces(): void{
    this.races = [{id: 1, name: 'London'}, {id: 4, name: 'Paris'}, {id: 3 , name: 'Tokyo'}, {id: 2, name: 'Shanghai'}]; ;

    this.setPonies();
  }

  setPonies(){
    this.ponies.set(66, {name: 'Rainbow Dash'})
    this.ponies.set(60, {name: 'Pinkie Pie'})
    this.ponies.set(61, {name: 'Fluttershy'})
  }


  addNewRace(){
    this.newRaceAvailable.emit('New race Added');
    console.log('OK')
  }

  playing(){
    console.log('Playing...')
  }

  toggleStyles(){
    this.fontWeight = this.fontWeight === 'normal' ? 'bold' : 'normal';
    this.color = this.color === 'black' ? 'blue' :' black';
    this.isAwsome = !this.isAwsome;
  }
}
