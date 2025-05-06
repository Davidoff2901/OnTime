import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LineUpComponent } from './pages/line-up/line-up.component';
import { FestivalsAdminComponent } from './pages/festivals-admin/festivals-admin.component';

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
}
];
