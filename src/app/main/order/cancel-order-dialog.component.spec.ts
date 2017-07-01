import { TestBed } from '@angular/core/testing';

import { CancelOrderDialogComponent } from './cancel-order-dialog.component';

describe('CancelOrderDialog', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [CancelOrderDialogComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(CancelOrderDialogComponent);
        expect(fixture.componentInstance instanceof CancelOrderDialogComponent).toBe(true, 'should create CancelOrderDialogComponent');
    });
});