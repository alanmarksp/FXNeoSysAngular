import { TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';

describe('Quote', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [QuoteComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(QuoteComponent);
        expect(fixture.componentInstance instanceof QuoteComponent).toBe(true, 'should create QuoteComponent');
    });
});