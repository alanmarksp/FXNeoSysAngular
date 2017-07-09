import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {AppSettings} from "../../app-settings";
import {Trader} from "../../models/trader.model";
import {TradingAccount} from "../../models/trading-account.model";

@Injectable()
export class ShowDashboardService {

    headers = new Headers({'Content-Type': 'application/json'});
    options = new RequestOptions({headers: this.headers, withCredentials: true});

    constructor(private http: Http) {
    }

    public getProfile() {
        return this.http
            .get(AppSettings.API_ENDPOINT + '/traders/profile/', this.options)
            .map(value => new Trader().deserialize(value.json()))
    }

    public getTradingAccounts() {
        return this.http
            .get(AppSettings.API_ENDPOINT + '/trading_accounts/', this.options)
            .map(value => value.json().map((o: any) => new TradingAccount().deserialize(o)))
    }

    getSelectedTradingAccount() {
        return this.http
            .get(AppSettings.API_ENDPOINT + '/trading_accounts/selected/', this.options)
            .map(value => new TradingAccount().deserialize(value.json()))
    }
}