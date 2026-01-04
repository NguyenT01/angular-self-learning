import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

try {
  await bootstrapApplication(AppComponent, appConfig);
} catch (err) {
  console.error(err);
}
