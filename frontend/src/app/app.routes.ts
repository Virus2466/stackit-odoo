import { Routes } from '@angular/router';
import { SignIn } from './auth/sign-in/sign-in';
import { Homepage } from './homepage/homepage';
import { AskQuestion } from './ask-question/ask-question';
import { SignUp } from './auth/sign-up/sign-up';
import { AuthGuard } from './gurd/auth-gurd-guard';
import { Answercomponent } from './answercomponent/answercomponent';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/signup', pathMatch: 'full' }, // default to signup
  { path: 'auth/signup', component: SignUp },
<<<<<<< Updated upstream
  { path: 'home', component: Homepage },
  { path: 'answer/:id'},
  { path: 'create-question', component: AskQuestion },
=======
  { path: 'auth/signin', component: SignIn },
  { path: 'home', component: Homepage, canActivate: [AuthGuard] },
  { path: 'answer/:id', component: Answercomponent },
  { path: 'create-question', component: AskQuestion, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'auth/signup' }, // wildcard fallback
>>>>>>> Stashed changes
];
