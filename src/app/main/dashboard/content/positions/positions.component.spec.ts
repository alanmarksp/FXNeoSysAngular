import { TestBed } from '@angular/core/testing';

import { PositionsComponent } from './positions.component';

describe('Positions', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [PositionsComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(PositionsComponent);
        expect(fixture.componentInstance instanceof PositionsComponent).toBe(true, 'should create PositionsComponent');
    });
});