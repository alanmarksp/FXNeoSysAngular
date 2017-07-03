import {Routes} from "@angular/router";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {MainComponent} from "./main/main.component";
import {authenticationRoutes} from "./authentication/authentication-routes";

export const appRoutes: Routes = [
    {
        path: 'authenticate',
        component: AuthenticationComponent,
        children: authenticationRoutes
    },
    {
        path: '',
        component: MainComponent
    },
    {
        path: '**',
        redirectTo: '/authenticate/login',
        pathMatch: 'full'
    }
];