import { Injectable } from "@angular/core";
import RaceModel from "../../models/race-model";
import { LoggingApiService } from "./logging-api-service";

@Injectable({
    providedIn: 'root'
})
export class RaceService{
    constructor(private readonly loggingService: LoggingApiService){
        
    }

    list(): Array<RaceModel>{
        this.loggingService.log('race-service: get races')
        return [];
    }
}