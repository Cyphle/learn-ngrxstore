import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { ExperiencesPageComponent } from './routes/experiences/experiences-page.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'experiences',
    component: ExperiencesPageComponent
  }
];

