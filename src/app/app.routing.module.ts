import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DomainsComponent } from './pages/domains/domains.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'domains',
    component: DomainsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
]
