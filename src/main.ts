import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app/routes";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers:[
        importProvidersFrom(RouterModule.forRoot(routes))
    ]

})
  .catch(err => console.error(err));
