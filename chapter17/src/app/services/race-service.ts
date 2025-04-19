import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import RaceModel from "../../models/race-model";

@Injectable({
    providedIn: 'root'
})
export class RaceService{

    get(id: number): Observable<RaceModel>{
        return of({
            id,
            name: 'Blue Pony Race'
        } as RaceModel).pipe(delay(3000));
    }
}