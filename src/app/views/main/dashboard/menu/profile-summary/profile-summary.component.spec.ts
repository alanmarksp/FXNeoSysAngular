import {TestBed} from "@angular/core/testing";

import {ProfileSummaryComponent} from "./profile-summary.component";

describe('ProfileSummary', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [ProfileSummaryComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(ProfileSummaryComponent);
        expect(fixture.componentInstance instanceof ProfileSummaryComponent).toBe(true, 'should create ProfileSummaryComponent');
    });
});