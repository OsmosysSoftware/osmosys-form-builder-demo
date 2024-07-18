import { Routes } from '@angular/router';
import { ViewformComponent } from './components/viewform/viewform.component';

export const routes: Routes = [
  { path: 'my-view', component: ViewformComponent },
  { path: '', redirectTo: 'my-view', pathMatch: 'full' },
  { path: '**', redirectTo: 'my-view' }
];
