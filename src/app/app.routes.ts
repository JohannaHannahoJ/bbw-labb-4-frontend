import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './dashboard/dashboard';
import { CreateEntry } from './create-entry/create-entry';
import { NotFound } from './not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
    { path: 'create-entry', component: CreateEntry, canActivate: [authGuard] },
    { path: "404", component: NotFound },
    { path: "**", redirectTo: "404", pathMatch: "full" }
];
