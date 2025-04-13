import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import PonyModel from "../../models/pony-model";

@Injectable({
    providedIn: 'root',
})
export class PonyService{
    get(id: number): Observable<PonyModel>{
        return of({
            id,
            name: 'Blue Pony'
        } as PonyModel);
    }
}