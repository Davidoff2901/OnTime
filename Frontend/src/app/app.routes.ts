import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LineUpComponent } from './pages/line-up/line-up.component';
import { FestivalsAdminComponent } from './pages/festivals-admin/festivals-admin.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [{
    path: "",
    pathMatch: 'full',
    component: HomeComponent
},
{
    path: "lineup",
    pathMatch: 'full',
    component: LineUpComponent
},
{
    path: "festivals-admin",
    pathMatch: 'full',
    component: FestivalsAdminComponent
},
// {
//     path: "admin",
//     pathMatch: 'full',
//     // component: FestivalsAdminComponent
// },
{
    path: "register",
    pathMatch: 'full',
    component: RegisterComponent
},
{
    path: "login",
    pathMatch: 'full',
    component: LoginComponent
}
];
