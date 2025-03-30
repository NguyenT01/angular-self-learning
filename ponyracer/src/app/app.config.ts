import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { LoggingService } from './services/logging-service';
import { RaceService } from './services/race-service';
import { LoggingApiService } from './services/logging-api-service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { githubAPIInterceptor } from './interceptors/github-api-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';

export const CUSTOM_TOKEN = new InjectionToken<LoggingService>('CustomToken');
export const LOCALE_IDX = new InjectionToken<string>('LOCALE_IDX')


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    {provide: LOCALE_IDX, useValue: 'fr-FR'},
    {provide: 'IS_PROD', useValue: false},
    RaceService,
    {
      provide: LoggingService,
      useFactory: (isProd: boolean) => (isProd ? new LoggingApiService() : new LoggingService()),
      deps: ['IS_PROD']
    },
    provideHttpClient(withInterceptors([githubAPIInterceptor, errorHandlerInterceptor]))
  ]
};
