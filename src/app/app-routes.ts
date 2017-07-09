import {Routes} from "@angular/router";
import {AuthenticationComponent} from "./views/authentication/authentication.component";
import {MainComponent} from "./views/main/main.component";
import {authenticationRoutes} from "./views/authentication/authentication-routes";
import {mainRoutes} from "./views/main/main-routes";

export const appRoutes: Routes = [
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: authenticationRoutes
    },
    {
        path: '',
        component: MainComponent,
        children: mainRoutes
    },
    {
        path: '**',
        redirectTo: '/authentication/login',
        pathMatch: 'full'
    }
];