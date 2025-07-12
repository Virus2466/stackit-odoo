import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/localstorage-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    
    const isLoggedIn = this.localStorageService.getUser();

    if (isLoggedIn) {
      return true;
    } else {
      // Redirect to login if not logged in
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
