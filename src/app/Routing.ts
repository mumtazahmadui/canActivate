import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';


export const AppRoutes :Routes = [
    {path: '', component: HomeComponent, pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'admin', component: AdminComponent, canActivate:[ActivateGuard]}
]