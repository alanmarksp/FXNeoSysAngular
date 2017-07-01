import { TestBed } from '@angular/core/testing';

import { EditOrderComponent } from './edit-order.component';

describe('EditOrder', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [EditOrderComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(EditOrderComponent);
        expect(fixture.componentInstance instanceof EditOrderComponent).toBe(true, 'should create EditOrderComponent');
    });
});