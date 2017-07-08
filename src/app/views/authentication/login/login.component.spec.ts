import {fakeAsync, TestBed, tick} from "@angular/core/testing";

import {LoginComponent} from "./login.component";
import {AuthenticateService} from "../../../services/authenticate/authenticate.service";
import {RouterTestingModule} from "@angular/router/testing";
import {MockAuthenticateService} from "../../../services/authenticate/mock-authenticate.service";
import {appRoutes} from "../../../app-routes";
import {AppModule} from "../../../app.module";
import {APP_BASE_HREF} from "@angular/common";
import {By} from "@angular/platform-browser";

describe('Login', () => {

    const traderUsername = 'trader';
    const traderPassword = 'trader_password';
    const invalidTraderUsername = 'invalid_trader';
    const invalidTraderPassword = 'invalid_trader_password';
    const loginFailureMessage = 'Incorrect username or password';
    const loginEmptyFieldsMessage = 'You must fill all fields';

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

    it('should call LoginComponent.loginSuccess', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'loginSuccess');
        loginComponent.login(traderUsername, traderPassword);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call LoginComponent.loginFailure because of invalid username', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'loginFailure');
        loginComponent.login(invalidTraderUsername, traderPassword);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call LoginComponent.showSnackBar because of invalid username', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        loginComponent.login(invalidTraderUsername, traderPassword);
        tick();
        expect(spy).toHaveBeenCalledWith(loginFailureMessage);
    }));

    it('should call LoginComponent.loginFailure because of invalid password', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'loginFailure');
        loginComponent.login(traderUsername, invalidTraderPassword);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call LoginComponent.showSnackBar because of invalid password', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        loginComponent.login(traderUsername, invalidTraderPassword);
        tick();
        expect(spy).toHaveBeenCalledWith(loginFailureMessage);
    }));

    it('should call LoginComponent.loginFailure because of invalid username and password', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'loginFailure');
        loginComponent.login(invalidTraderUsername, invalidTraderPassword);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call LoginComponent.showSnackBar because of invalid username and password', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        loginComponent.login(invalidTraderUsername, invalidTraderPassword);
        tick();
        expect(spy).toHaveBeenCalledWith(loginFailureMessage);
    }));

    it('should call LoginComponent.showSnackBar because of empty username', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        loginComponent.login('', traderPassword);
        tick();
        expect(spy).toHaveBeenCalledWith(loginEmptyFieldsMessage);
    }));

    it('should call LoginComponent.showSnackBar because of empty username', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        loginComponent.login(traderUsername, '');
        tick();
        expect(spy).toHaveBeenCalledWith(loginEmptyFieldsMessage);
    }));

    it('should call LoginComponent.showSnackBar because of empty username and password', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        loginComponent.login('', '');
        tick();
        expect(spy).toHaveBeenCalledWith(loginEmptyFieldsMessage);
    }));

    it('should call LoginComponent.login when login button is clicked', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'login');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call LoginComponent.loginSuccess when login button is clicked and inputs are correct', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'loginSuccess');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        const loginUsernameInputElement = fixture.debugElement.query(By.css('#login_username_input')).nativeElement;
        const loginPasswordInputElement = fixture.debugElement.query(By.css('#login_password_input')).nativeElement;
        loginUsernameInputElement.value = traderUsername;
        loginUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginPasswordInputElement.value = traderPassword;
        loginPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call LoginComponent.loginFailure when login button is clicked and username is invalid', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'loginFailure');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        const loginUsernameInputElement = fixture.debugElement.query(By.css('#login_username_input')).nativeElement;
        const loginPasswordInputElement = fixture.debugElement.query(By.css('#login_password_input')).nativeElement;
        loginUsernameInputElement.value = invalidTraderUsername;
        loginUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginPasswordInputElement.value = traderPassword;
        loginPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call LoginComponent.showSnackBar when login button is clicked and username is invalid', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        const loginUsernameInputElement = fixture.debugElement.query(By.css('#login_username_input')).nativeElement;
        const loginPasswordInputElement = fixture.debugElement.query(By.css('#login_password_input')).nativeElement;
        loginUsernameInputElement.value = invalidTraderUsername;
        loginUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginPasswordInputElement.value = traderPassword;
        loginPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(loginFailureMessage);
    }));

    it('should call LoginComponent.loginFailure when login button is clicked and password is invalid', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'loginFailure');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        const loginUsernameInputElement = fixture.debugElement.query(By.css('#login_username_input')).nativeElement;
        const loginPasswordInputElement = fixture.debugElement.query(By.css('#login_password_input')).nativeElement;
        loginUsernameInputElement.value = traderUsername;
        loginUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginPasswordInputElement.value = invalidTraderPassword;
        loginPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call LoginComponent.showSnackBar when login button is clicked and password is invalid', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        const loginUsernameInputElement = fixture.debugElement.query(By.css('#login_username_input')).nativeElement;
        const loginPasswordInputElement = fixture.debugElement.query(By.css('#login_password_input')).nativeElement;
        loginUsernameInputElement.value = traderUsername;
        loginUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginPasswordInputElement.value = invalidTraderPassword;
        loginPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(loginFailureMessage);
    }));

    it('should call LoginComponent.loginFailure when login button is clicked and username and password are invalid', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'loginFailure');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        const loginUsernameInputElement = fixture.debugElement.query(By.css('#login_username_input')).nativeElement;
        const loginPasswordInputElement = fixture.debugElement.query(By.css('#login_password_input')).nativeElement;
        loginUsernameInputElement.value = invalidTraderUsername;
        loginUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginPasswordInputElement.value = invalidTraderPassword;
        loginPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call LoginComponent.showSnackBar when login button is clicked and username and password are invalid', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        const loginUsernameInputElement = fixture.debugElement.query(By.css('#login_username_input')).nativeElement;
        const loginPasswordInputElement = fixture.debugElement.query(By.css('#login_password_input')).nativeElement;
        loginUsernameInputElement.value = invalidTraderUsername;
        loginUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginPasswordInputElement.value = invalidTraderPassword;
        loginPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(loginFailureMessage);
    }));

    it('should call LoginComponent.showSnackBar when login button is clicked and username is not filled', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        const loginPasswordInputElement = fixture.debugElement.query(By.css('#login_password_input')).nativeElement;
        loginPasswordInputElement.value = traderPassword;
        loginPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(loginEmptyFieldsMessage);
    }));

    it('should call LoginComponent.showSnackBar when login button is clicked and password is not filled', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        const loginUsernameInputElement = fixture.debugElement.query(By.css('#login_username_input')).nativeElement;
        loginUsernameInputElement.value = traderPassword;
        loginUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(loginEmptyFieldsMessage);
    }));

    it('should call LoginComponent.showSnackBar when login button is clicked and username and password are not filled', fakeAsync(() => {
        let fixture = TestBed.createComponent(LoginComponent);
        const loginComponent = fixture.componentInstance;
        const spy = spyOn(loginComponent, 'showSnackBar');
        const loginButton = fixture.debugElement.query(By.css('#login_button'));
        loginButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(loginEmptyFieldsMessage);
    }));
});