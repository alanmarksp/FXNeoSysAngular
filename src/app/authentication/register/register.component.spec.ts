import {TestBed} from "@angular/core/testing";

import {RegisterComponent} from "./register.component";
import {MyMaterialModule} from "../../material.module";
import {AuthenticateService} from "../../shared/services/authenticate/authenticate.service";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";

describe('Register', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [
                RouterTestingModule,
                HttpModule,
                MyMaterialModule
            ],
            providers: [
                AuthenticateService
            ]
        });
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(RegisterComponent);
        expect(fixture.componentInstance instanceof RegisterComponent).toBe(true, 'should create RegisterComponent');
    });
});