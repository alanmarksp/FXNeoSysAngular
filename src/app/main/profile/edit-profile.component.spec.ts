import { TestBed } from '@angular/core/testing';

import { EditProfileComponent } from './edit-profile.component';

describe('EditProfile', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [EditProfileComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(EditProfileComponent);
        expect(fixture.componentInstance instanceof EditProfileComponent).toBe(true, 'should create EditProfileComponent');
    });
});