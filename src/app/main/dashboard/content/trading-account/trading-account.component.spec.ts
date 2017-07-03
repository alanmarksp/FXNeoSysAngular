import {TestBed} from "@angular/core/testing";

import {TradingAccountComponent} from "./trading-account.component";

describe('TradingAccount', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [TradingAccountComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(TradingAccountComponent);
        expect(fixture.componentInstance instanceof TradingAccountComponent).toBe(true, 'should create TradingAccountComponent');
    });
});