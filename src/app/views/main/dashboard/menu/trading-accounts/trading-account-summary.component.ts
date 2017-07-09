import {Component, Input} from "@angular/core";
import {TradingAccount} from "../../../../../models/trading-account.model";

@Component({
    selector: 'trading-account-summary',
    templateUrl: './trading-account-summary.component.html'
})
export class TradingAccountSummaryComponent {
    @Input() tradingAccount: TradingAccount;
}