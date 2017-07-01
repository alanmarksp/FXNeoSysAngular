import { TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';

describe('Orders', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [OrdersComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(OrdersComponent);
        expect(fixture.componentInstance instanceof OrdersComponent).toBe(true, 'should create OrdersComponent');
    });
});