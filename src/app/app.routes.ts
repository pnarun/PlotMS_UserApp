import { Routes } from '@angular/router';
import { HomePageComponent } from './controllers/home-page/home-page.component';
import { OurStoryComponent } from './controllers/our-story/our-story.component';
import { ContactUsComponent } from './controllers/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: 'home' }
];
