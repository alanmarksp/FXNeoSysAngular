import { TestBed } from '@angular/core/testing';

import { TradingAccountsComponent } from './trading-accounts.component';

describe('TradingAccounts', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [TradingAccountsComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(TradingAccountsComponent);
        expect(fixture.componentInstance instanceof TradingAccountsComponent).toBe(true, 'should create TradingAccountsComponent');
    });
});