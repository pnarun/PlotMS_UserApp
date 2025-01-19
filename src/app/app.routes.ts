import { Routes } from '@angular/router';
import { HomePageComponent } from './controllers/home-page/home-page.component';
import { OurStoryComponent } from './controllers/our-story/our-story.component';
import { ContactUsComponent } from './controllers/contact-us/contact-us.component';
import { SiteMapComponent } from './controllers/site-map/site-map.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { 
    path: 'our-story', 
    component: OurStoryComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'contact-us', 
    component: ContactUsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'site-map/:id', 
    component: SiteMapComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'home' }
];
