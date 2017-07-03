import {TestBed} from "@angular/core/testing";

import {LoginComponent} from "./login.component";
import {MyMaterialModule} from "../../material.module";
import {AuthenticateService} from "../../shared/services/authenticate/authenticate.service";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";

describe('Login', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
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
        let fixture = TestBed.createComponent(LoginComponent);
        expect(fixture.componentInstance instanceof LoginComponent).toBe(true, 'should create LoginComponent');
    });
});