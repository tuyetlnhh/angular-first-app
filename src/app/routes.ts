import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home Details'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Page'
  }
];

export default routeConfig;