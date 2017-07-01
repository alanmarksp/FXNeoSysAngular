import { TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';

describe('Authentication', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AuthenticationComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(AuthenticationComponent);
        expect(fixture.componentInstance instanceof AuthenticationComponent).toBe(true, 'should create AuthenticationComponent');
    });
});