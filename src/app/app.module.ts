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
import {DashboardComponent} from "./views/main/dashboard/dashboard.component";
import {DashboardMenuComponent} from "./views/main/dashboard/menu/dashboard-menu.component";
import {ProfileSummaryComponent} from "./views/main/dashboard/menu/profile-summary/profile-summary.component";
import {TradingAccountsComponent} from "./views/main/dashboard/menu/trading-accounts/trading-accounts.component";
import {TradingAccountSummaryComponent} from "./views/main/dashboard/menu/trading-accounts/trading-account-summary.component";
import {ContentComponent} from "./views/main/dashboard/content/content.component";
import {TradingAccountComponent} from "./views/main/dashboard/content/trading-account/trading-account.component";
import {QuotesComponent} from "./views/main/dashboard/content/quotes/quotes.component";
import {PositionsComponent} from "./views/main/dashboard/content/positions/positions.component";
import {PendingOrdersComponent} from "./views/main/dashboard/content/orders/pending-orders.component";
import {OrdersComponent} from "./views/main/dashboard/content/orders/orders.component";
import {OrderSummaryComponent} from "./views/main/dashboard/content/orders/order-summary.component";

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
        MainComponent,
        DashboardComponent,
        DashboardMenuComponent,
        ProfileSummaryComponent,
        TradingAccountsComponent,
        TradingAccountSummaryComponent,
        ContentComponent,
        TradingAccountComponent,
        QuotesComponent,
        PositionsComponent,
        PendingOrdersComponent,
        OrdersComponent,
        OrderSummaryComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}