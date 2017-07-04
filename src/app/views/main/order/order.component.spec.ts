import {TestBed} from "@angular/core/testing";

import {OrderComponent} from "./order.component";

describe('Order', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [OrderComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(OrderComponent);
        expect(fixture.componentInstance instanceof OrderComponent).toBe(true, 'should create OrderComponent');
    });
});