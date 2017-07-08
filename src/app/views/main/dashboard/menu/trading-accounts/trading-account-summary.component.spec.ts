import {TestBed} from "@angular/core/testing";

import {TradingAccountSummaryComponent} from "./trading-account-summary.component";

describe('TradingAccountSummary', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [TradingAccountSummaryComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(TradingAccountSummaryComponent);
        expect(fixture.componentInstance instanceof TradingAccountSummaryComponent).toBe(true, 'should create TradingAccountSummaryComponent');
    });
});