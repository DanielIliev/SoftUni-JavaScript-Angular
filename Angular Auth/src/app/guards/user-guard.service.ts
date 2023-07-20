import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(private router: Router, private localeStorageService: LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean 
    | UrlTree 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> {
        return this.checkIfUserIsLogged(state.url) || this.router.createUrlTree(['/login']);
    }

    checkIfUserIsLogged(url: string): boolean {
        const token = this.localeStorageService.get('authToken');

        if (token) {
            return true;
        }

        return false;
    }
}
