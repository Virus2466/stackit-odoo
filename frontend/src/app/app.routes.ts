import { Routes } from '@angular/router';
import { SignIn } from './auth/sign-in/sign-in';
import { Homepage } from './homepage/homepage';

export const routes: Routes = [
  { path: 'home', component: Homepage },
  { path: '**', component: SignIn }
];