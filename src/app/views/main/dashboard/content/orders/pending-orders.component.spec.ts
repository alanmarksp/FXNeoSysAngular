import {TestBed} from "@angular/core/testing";

import {PendingOrdersComponent} from "./pending-orders.component";

describe('PendingOrders', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [PendingOrdersComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(PendingOrdersComponent);
        expect(fixture.componentInstance instanceof PendingOrdersComponent).toBe(true, 'should create PendingOrdersComponent');
    });
});