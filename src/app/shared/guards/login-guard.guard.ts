import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Observable } from 'rxjs';
import { tap, map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.getAuthStatus()){
      console.log(this.authService.getAuthStatus());
      return true;
    }else{
      console.log(this.authService.getAuthStatus());
      return false;
      /*
      return this.authService.pipe(
        delay(1000),
        tap(loggedIn => {
          if (!loggedIn) {
            this.auth.login(state.url);
          }
        }),
      );
      */
    }

  }
  
}
