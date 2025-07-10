import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LineUpComponent } from './pages/line-up/line-up.component';
import { FestivalsAdminComponent } from './pages/festivals-admin/festivals-admin.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MissingPageComponent } from './pages/missing-page/missing-page.component';
import { authGuard } from './guards/auth.guard';
import { ArtistsAdminComponent } from './pages/artists-admin/artists-admin.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { UserFestivalsComponent } from './pages/user-festivals/user-festivals.component';
import { FestivalComponent } from './pages/festival/festival.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [{
    path: "",
    pathMatch: 'full',
    component: LoginComponent
},
{
    path: "lineup",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: LineUpComponent,
    data: { roles: ['USER', 'ORGANIZER', 'ADMIN'] }
},
{
    path: "my-festivals",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: UserFestivalsComponent,
    data: { roles: ['USER', 'ORGANIZER', 'ADMIN'] }
},
{
    path: "my-festivals/:id",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: FestivalComponent,
    data: { roles: ['USER', 'ORGANIZER', 'ADMIN'] }

},
{
    path: "profile",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: ProfileComponent,
    data: { roles: ['USER', 'ORGANIZER', 'ADMIN'] }

},
{
    path: "forgot-password",
    pathMatch: 'full',
    component: ForgotPasswordComponent,
    data: { roles: ['USER', 'ORGANIZER', 'ADMIN'] }

},
{
    path: "reset-password",
    pathMatch: 'full',
    component: ResetPasswordComponent,
    data: { roles: ['USER', 'ORGANIZER', 'ADMIN'] }

},
{
    path: "festivals-admin",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: FestivalsAdminComponent,
    data: { roles: ['ORGANIZER', 'ADMIN'] }
},
{
    path: "artists-admin",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: ArtistsAdminComponent,
    data: { roles: ['ORGANIZER', 'ADMIN'] }
},
{
    path: "admin",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: AdminComponent,
    data: { roles: ['ADMIN'] }
},
{
    path: "tickets",
    pathMatch: 'full',
    canActivate: [authGuard],
    component: TicketsComponent,
    data: { roles: ['USER', 'ORGANIZER', 'ADMIN'] }
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
