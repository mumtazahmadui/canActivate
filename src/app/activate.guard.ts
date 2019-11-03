import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate{
  constructor(private userservice: UserService, private route: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.userservice.isAdminRights()){
        return true;
      } else {
        alert('You dont have permission.... redirect to home page');
        this.route.navigate(['home']);
      }
      
    }
  
}
