import { Route } from "@angular/router";
import { RacesComponent } from "./races/races.component";
import { PonyComponent } from "./pony/pony.component";
import { RaceCreationComponent } from "./race-creation/race-creation.component";
import { BirthCertificateComponent } from "./pony/birth-certificate/birth-certificate.component";
import { TrackRecordComponent } from "./pony/track-record/track-record.component";
import { ReviewsComponent } from "./pony/reviews/reviews.component";

export const routes: Route[] = [
    {path: '', pathMatch: 'full', redirectTo:'races/new'},
    {path: 'races/new', component: RaceCreationComponent},
    {path: 'races/:id', component: RacesComponent},
    {
        path: 'ponies/:ponyId',
        component: PonyComponent,
        children: [
            {path: '', pathMatch:'full', redirectTo: 'birth-certificate'},
            {path: 'birth-certificate', component: BirthCertificateComponent},
            {path: 'track-record', component: TrackRecordComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    {path: 'races/:raceId/ponies/:ponyId', component: PonyComponent}
]