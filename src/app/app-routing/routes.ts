import { Routes } from '@angular/router';

import { AboutusComponent } from '../aboutus/aboutus.component';
import { HomeComponent } from '../home/home.component';
import { DomainComponent } from '../domain/domain.component';
import { EventsComponent } from '../events/events.component';

export const routes: Routes = [
  { path: 'about',  component: AboutusComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'domain',  component: DomainComponent },
  { path: 'events',  component: EventsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];