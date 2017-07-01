import { TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

describe('Profile', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [ProfileComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(ProfileComponent);
        expect(fixture.componentInstance instanceof ProfileComponent).toBe(true, 'should create ProfileComponent');
    });
});