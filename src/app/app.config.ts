import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routeList } from './route/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeList)],
};
