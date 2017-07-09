import {TestBed} from "@angular/core/testing";

import {DashboardMenuComponent} from "./dashboard-menu.component";

describe('DashboardMenu', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [DashboardMenuComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(DashboardMenuComponent);
        expect(fixture.componentInstance instanceof DashboardMenuComponent).toBe(true, 'should create DashboardMenuComponent');
    });
});