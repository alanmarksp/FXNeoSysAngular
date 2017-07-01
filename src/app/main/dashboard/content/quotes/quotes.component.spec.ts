import { TestBed } from '@angular/core/testing';

import { QuotesComponent } from './quotes.component';

describe('Quotes', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [QuotesComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(QuotesComponent);
        expect(fixture.componentInstance instanceof QuotesComponent).toBe(true, 'should create QuotesComponent');
    });
});