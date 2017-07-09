import {Component, OnInit} from "@angular/core";
import {ShowDashboardService} from "../../../../../services/show-dashboard/show-dashboard.service";
import {TradingAccount} from "../../../../../models/trading-account.model";

@Component({
    selector: 'trading-accounts',
    templateUrl: './trading-accounts.component.html'
})
export class TradingAccountsComponent implements OnInit {

    private tradingAccounts: TradingAccount[];

    constructor(private showDashboardService: ShowDashboardService) {
    }

    ngOnInit(): void {
        this.showDashboardService
            .getTradingAccounts()
            .subscribe(
                value => this.getTradingAccountsSuccess(value),
                error => this.getTradingAccountsFailure(error)
            )
    }

    private getTradingAccountsSuccess(value: TradingAccount[]) {
        this.tradingAccounts = value
    }

    private getTradingAccountsFailure(error: any) {
        console.log(error)
    }
}