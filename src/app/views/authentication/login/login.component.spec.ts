import {async, fakeAsync, inject, TestBed, tick} from "@angular/core/testing";

import {LoginComponent} from "./login.component";
import {AuthenticateService} from "../../../services/authenticate/authenticate.service";
import {RouterTestingModule} from "@angular/router/testing";
import {MockAuthenticateService} from "../../../services/authenticate/mock-authenticate.service";
import {Router} from "@angular/router";
import {appRoutes} from "../../../app-routes";
import {AppModule} from "../../../app.module";
import {APP_BASE_HREF} from "@angular/common";
import {Observable} from "rxjs/Observable";
import {ResponseOptions} from "@angular/http";

describe('Login', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(appRoutes),
                AppModule
            ],
            providers: [
                {provide: AuthenticateService, useClass: MockAuthenticateService},
                {provide: APP_BASE_HREF, useValue: '/'}
            ]
        });
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(LoginComponent);
        expect(fixture.componentInstance instanceof LoginComponent).toBe(true, 'should create LoginComponent');
    });

    it('should navigate to "/"', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const router = TestBed.get(Router);
        router.navigate(['/authentication/login']);
        tick();
        expect(router.url).toBe('/authentication/login');
        loginComponent.login('trader', 'trader_password');
        tick();
        expect(router.url).toBe('/');
    }));

    it('should call AuthenticateService.login()', async(
        inject([AuthenticateService], (authenticateService: AuthenticateService) => {
            let fixture = TestBed.createComponent(LoginComponent);
            const loginComponent = fixture.componentInstance;
            spyOn(authenticateService, 'login').and.returnValue(new Observable<Response>((subscriber: any) => {
                subscriber.next(new Response(
                    new ResponseOptions({
                        body: [
                            {token: 'test_token'}
                        ]
                    }))
                )
            }));
            loginComponent.login('trader', 'trader_password');
            expect(authenticateService.login).toHaveBeenCalled();
        })
    ));
});