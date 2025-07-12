import { Routes } from '@angular/router';
import { SignIn } from './auth/sign-in/sign-in';
import { Homepage } from './homepage/homepage';
import { AskQuestion } from './ask-question/ask-question';
import { SignUp } from './auth/sign-up/sign-up';
import { AuthGuard } from './gurd/auth-gurd-guard';

export const routes: Routes = [
  { path: 'auth/signin', component: SignIn },
  { path: 'auth/signup', component: SignUp },
  { path: 'home', component: Homepage, canActivate: [AuthGuard] },
  { path: 'create-question', component: AskQuestion },
];
