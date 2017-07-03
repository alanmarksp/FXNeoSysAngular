import {TestBed} from "@angular/core/testing";

import {AuthenticationComponent} from "./authentication.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MyMaterialModule} from "../material.module";

describe('Authentication', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AuthenticationComponent,
                LoginComponent,
                RegisterComponent
            ],
            imports: [
                MyMaterialModule
            ]
        });
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(AuthenticationComponent);
        expect(fixture.componentInstance instanceof AuthenticationComponent).toBe(true, 'should create AuthenticationComponent');
    });
});