import { Route } from "@angular/router";
import { RacesComponent } from "./races/races.component";
import { PonyComponent } from "./pony/pony.component";
import { RaceCreationComponent } from "./race-creation/race-creation.component";
import { BirthCertificateComponent } from "./pony/birth-certificate/birth-certificate.component";
import { TrackRecordComponent } from "./pony/track-record/track-record.component";
import { ReviewsComponent } from "./pony/reviews/reviews.component";
import { loggedInGuard } from "./guards/logged-in-guard";
import { LoginComponent } from "./login/login.component";
import { raceResolver } from "./resolvers/race-resolver";

export const routes: Route[] = [
    {path: 'login', component: LoginComponent},
    {path: '',
        children: [
            {path: 'races/new', component: RaceCreationComponent},
            {path: 'races/:id', component: RacesComponent,
                resolve: {
                    race: raceResolver
                }
            },
            {
                path: 'ponies/:ponyId',
                component: PonyComponent,
                canActivate: [loggedInGuard],
                children: [
                    {path: '', pathMatch:'full', redirectTo: 'birth-certificate'},
                    {path: 'birth-certificate', component: BirthCertificateComponent},
                    {path: 'track-record', component: TrackRecordComponent},
                    {path: 'reviews', component: ReviewsComponent}
                ]
            },
            {path: 'races/:raceId/ponies/:ponyId', component: PonyComponent}
        ]
    }
    
]