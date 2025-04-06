import { Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { RacesComponent } from "./races/races.component";

export const routes: Route[] = [
    {path: '', component: AppComponent},
    {path: 'races', component: RacesComponent}
]