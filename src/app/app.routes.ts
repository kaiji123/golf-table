import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import your components
import { AboutComponent } from './about/about.component';
export const routes: Routes = [
    { path: '', component: HomeComponent }, // Define routes and corresponding components
    { path: 'about', component: AboutComponent },
    // Add more routes here
    // { path: 'other', component: OtherComponent },
    // { path: 'details/:id', component: DetailsComponent },
  ];
  