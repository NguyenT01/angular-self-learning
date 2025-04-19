import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import RaceModel from "../../models/race-model";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
import { RaceService } from "../services/race-service";

export const raceResolver: ResolveFn<RaceModel> = (route: ActivatedRouteSnapshot) : Observable<RaceModel> => {
    const id = route.paramMap.get('id');
    const raceService = inject(RaceService);
    return raceService.get(Number(id));
}