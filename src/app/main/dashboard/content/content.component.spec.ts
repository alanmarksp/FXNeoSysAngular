import {TestBed} from "@angular/core/testing";

import {ContentComponent} from "./content.component";

describe('Content', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [ContentComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(ContentComponent);
        expect(fixture.componentInstance instanceof ContentComponent).toBe(true, 'should create ContentComponent');
    });
});