import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './controllers/home-page/home-page.component';
import { OurStoryComponent } from './controllers/our-story/our-story.component';
import { ContactUsComponent } from './controllers/contact-us/contact-us.component';
import { SiteMapComponent } from './controllers/site-map/site-map.component';
import { GeneralInfoComponent } from './controllers/general-info/general-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect empty path to home
  { path: 'home', component: HomePageComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'site-map', component: SiteMapComponent },
  { path: 'general-info', component: GeneralInfoComponent },
  { path: '**', redirectTo: '/home' }  // Redirect any unknown paths to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 