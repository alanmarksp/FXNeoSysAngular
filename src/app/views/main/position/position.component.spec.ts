import {TestBed} from "@angular/core/testing";

import {PositionComponent} from "./position.component";

describe('Position', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [PositionComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(PositionComponent);
        expect(fixture.componentInstance instanceof PositionComponent).toBe(true, 'should create PositionComponent');
    });
});