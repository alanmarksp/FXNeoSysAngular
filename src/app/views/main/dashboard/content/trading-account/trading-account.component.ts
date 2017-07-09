import {Component, OnInit} from "@angular/core";
import {ShowDashboardService} from "../../../../../services/show-dashboard/show-dashboard.service";
import {TradingAccount} from "../../../../../models/trading-account.model";

@Component({
    selector: 'trading-account',
    templateUrl: './trading-account.component.html',
    styleUrls: ['./trading-account.component.css']
})
export class TradingAccountComponent implements OnInit {

    private tradingAccount: TradingAccount;

    constructor(private showDashboardService: ShowDashboardService) {
    }

    ngOnInit(): void {
        this.showDashboardService
            .getSelectedTradingAccount()
            .subscribe(
                value => this.getSelectedTradingAccountSuccess(value),
                error => this.getSelectedTradingAccountFailure(error)
            )
    }

    private getSelectedTradingAccountSuccess(value: TradingAccount) {
        this.tradingAccount = value;
    }

    private getSelectedTradingAccountFailure(error: any) {
        console.log(error)
    }
}