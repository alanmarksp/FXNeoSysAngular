import { TestBed } from '@angular/core/testing';

import { PlaceOrderComponent } from './place-order.component';

describe('PlaceOrder', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [PlaceOrderComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(PlaceOrderComponent);
        expect(fixture.componentInstance instanceof PlaceOrderComponent).toBe(true, 'should create PlaceOrderComponent');
    });
});