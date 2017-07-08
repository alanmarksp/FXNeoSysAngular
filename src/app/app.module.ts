import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {AuthenticationComponent} from "./views/authentication/authentication.component";
import {MainComponent} from "./views/main/main.component";
import {LoginComponent} from "./views/authentication/login/login.component";
import {RegisterComponent} from "./views/authentication/register/register.component";
import {MyMaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MyMaterialModule,
        HttpModule,
        AppRoutingModule
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