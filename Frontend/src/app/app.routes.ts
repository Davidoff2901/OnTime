import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LineUpComponent } from './pages/line-up/line-up.component';
import { FestivalsAdminComponent } from './pages/festivals-admin/festivals-admin.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MissingPageComponent } from './pages/missing-page/missing-page.component';
import { authGuard } from './guards/auth.guard';
import { ArtistsAdminComponent } from './pages/artists-admin/artists-admin.component';

export const routes: Routes = [{
    path: "",
    pathMatch: 'full',
    component: HomeComponent
},
{
    path: "lineup",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: LineUpComponent
},
{
    path: "festivals-admin",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: FestivalsAdminComponent,
},
{
    path: "artists-admin",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: ArtistsAdminComponent,
},
{
    path: "register",
    pathMatch: 'full',
    component: RegisterComponent
},
{
    path: "login",
    pathMatch: 'full',
    component: LoginComponent
},
{
    path: "**",
    pathMatch: 'full',
    component: MissingPageComponent
}
];
