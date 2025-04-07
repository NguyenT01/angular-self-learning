import { Observable, of } from "rxjs";
import RaceModel from "../models/race-model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RaceService{
    get(id: number) : Observable<RaceModel> {
        return of({
            id,
            name: 'Ponyville'
        } as RaceModel)
    }
}