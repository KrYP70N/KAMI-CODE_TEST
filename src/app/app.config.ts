import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routeList } from './route/app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeList), provideHttpClient()],
};
