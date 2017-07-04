import {Routes} from "@angular/router";
import {AuthenticationComponent} from "./views/authentication/authentication.component";
import {MainComponent} from "./views/main/main.component";
import {authenticationRoutes} from "./views/authentication/authentication-routes";

export const appRoutes: Routes = [
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: authenticationRoutes
    },
    {
        path: '',
        component: MainComponent
    },
    {
        path: '**',
        redirectTo: '/authentication/login',
        pathMatch: 'full'
    }
];