import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {MyMaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MyMaterialModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'authenticate',
                component: AuthenticationComponent
            },
            {
                path: '',
                component: MainComponent
            },
            {
                path: '**',
                redirectTo: '/authenticate',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [
        AppComponent,
        AuthenticationComponent,
        LoginComponent,
        RegisterComponent,
        MainComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}