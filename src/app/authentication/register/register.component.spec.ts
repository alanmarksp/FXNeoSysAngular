import { TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('Register', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [RegisterComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(RegisterComponent);
        expect(fixture.componentInstance instanceof RegisterComponent).toBe(true, 'should create RegisterComponent');
    });
});