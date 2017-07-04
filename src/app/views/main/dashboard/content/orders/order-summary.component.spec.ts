import {TestBed} from "@angular/core/testing";

import {OrderSummaryComponent} from "./order-summary.component";

describe('OrderSummary', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [OrderSummaryComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(OrderSummaryComponent);
        expect(fixture.componentInstance instanceof OrderSummaryComponent).toBe(true, 'should create OrderSummaryComponent');
    });
});