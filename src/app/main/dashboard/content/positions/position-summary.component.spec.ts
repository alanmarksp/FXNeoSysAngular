import { TestBed } from '@angular/core/testing';

import { PositionSummaryComponent } from './position-summary.component';

describe('PositionSummary', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [PositionSummaryComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(PositionSummaryComponent);
        expect(fixture.componentInstance instanceof PositionSummaryComponent).toBe(true, 'should create PositionSummaryComponent');
    });
});