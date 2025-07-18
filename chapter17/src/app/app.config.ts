import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
