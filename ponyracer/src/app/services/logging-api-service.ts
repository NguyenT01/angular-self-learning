import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggingApiService{
    log(message: string): void{
        console.log('Logging API Svc: ', message)
    }
}