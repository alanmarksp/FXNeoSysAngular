import { TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('Menu', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [MenuComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(MenuComponent);
        expect(fixture.componentInstance instanceof MenuComponent).toBe(true, 'should create MenuComponent');
    });
});