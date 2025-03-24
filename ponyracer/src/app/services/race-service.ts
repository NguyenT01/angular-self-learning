import { Injectable } from "@angular/core";
import RaceModel from "../../models/race-model";
import { LoggingApiService } from "./logging-api-service";
import { HttpClient } from "@angular/common/http";
import { Observable, retry } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RaceService{
    private readonly baseUrl = 'https://run.mocky.io/v3'
    constructor(private readonly loggingService: LoggingApiService, 
        private readonly http: HttpClient
    ){
        
    }
    
    getListByHttpClient(): Observable<Array<RaceModel>>{
        return this.http.get<Array<RaceModel>>(`${this.baseUrl}/971dbfe4-ef19-4b2b-bac1-ec0c5d637a62`).pipe(
            retry(3)
        )
    }


    list(): Array<RaceModel>{
        this.loggingService.log('race-service: get races')
        return [];
    }



}