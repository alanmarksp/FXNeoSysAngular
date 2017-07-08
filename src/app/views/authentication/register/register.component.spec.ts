import {fakeAsync, TestBed, tick} from "@angular/core/testing";

import {RegisterComponent} from "./register.component";
import {AuthenticateService} from "../../../services/authenticate/authenticate.service";
import {RouterTestingModule} from "@angular/router/testing";
import {appRoutes} from "../../../app-routes";
import {AppModule} from "../../../app.module";
import {MockAuthenticateService} from "../../../services/authenticate/mock-authenticate.service";
import {APP_BASE_HREF} from "@angular/common";
import {By} from "@angular/platform-browser";

describe('Register', () => {
    const traderUsername = 'new_trader';
    const traderPassword = 'trader_password';
    const existingTraderUsername = 'trader';
    const differentTraderPassword = 'different_trader_password';
    const registerEmptyFieldsMessage = 'You must fill all fields';
    const registerDifferentPasswordsMessage = 'Password and password confirmation must be the same';
    const registerFailureMessage = 'Username already exists';

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
        let fixture = TestBed.createComponent(RegisterComponent);
        expect(fixture.componentInstance instanceof RegisterComponent).toBe(true, 'should create RegisterComponent');
    });

    it('should call RegisterComponent.registerSuccess', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'registerSuccess');
        registerComponent.register(traderUsername, traderPassword, traderPassword);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call RegisterComponent.registerFailure because of existing username', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'registerFailure');
        registerComponent.register(existingTraderUsername, traderPassword, traderPassword);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call RegisterComponent.showSnackBar because of empty username', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        registerComponent.register('', traderPassword, traderPassword);
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar because of empty password', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        registerComponent.register(traderUsername, '', traderPassword);
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar because of empty password confirmation', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        registerComponent.register(traderUsername, traderPassword, '');
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar because of empty password confirmation', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        registerComponent.register(traderUsername, traderPassword, '');
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar because of empty password and password confirmation', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        registerComponent.register(traderUsername, '', '');
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar because of empty username and password confirmation', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        registerComponent.register('', traderPassword, '');
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar because of empty username and password', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        registerComponent.register('', '', traderPassword);
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar because of empty fields', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        registerComponent.register('', '', '');
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar because of different password and password confirmation', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        registerComponent.register(traderUsername, traderPassword, differentTraderPassword);
        tick();
        expect(spy).toHaveBeenCalledWith(registerDifferentPasswordsMessage);
    }));

    it('should call RegisterComponent.showSnackBar because of existing username', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        registerComponent.register(existingTraderUsername, traderPassword, traderPassword);
        tick();
        expect(spy).toHaveBeenCalledWith(registerFailureMessage);
    }));

    it('should call RegisterComponent.register when register button is clicked', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'register');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call RegisterComponent.registerSuccess when register button is clicked and inputs are correct', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'registerSuccess');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        const registerUsernameInputElement = fixture.debugElement.query(By.css('#register_username_input')).nativeElement;
        const registerPasswordInputElement = fixture.debugElement.query(By.css('#register_password_input')).nativeElement;
        const registerPasswordConfirmationInputElement = fixture.debugElement.query(By.css('#register_password_confirmation_input')).nativeElement;
        registerUsernameInputElement.value = traderUsername;
        registerUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerPasswordInputElement.value = traderPassword;
        registerPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerPasswordConfirmationInputElement.value = traderPassword;
        registerPasswordConfirmationInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call RegisterComponent.registerFailure when register button is clicked and already exists', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'registerFailure');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        const registerUsernameInputElement = fixture.debugElement.query(By.css('#register_username_input')).nativeElement;
        const registerPasswordInputElement = fixture.debugElement.query(By.css('#register_password_input')).nativeElement;
        const registerPasswordConfirmationInputElement = fixture.debugElement.query(By.css('#register_password_confirmation_input')).nativeElement;
        registerUsernameInputElement.value = existingTraderUsername;
        registerUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerPasswordInputElement.value = traderPassword;
        registerPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerPasswordConfirmationInputElement.value = traderPassword;
        registerPasswordConfirmationInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalled();
    }));

    it('should call RegisterComponent.showSnackBar when register button is clicked and username is not filled', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        const registerPasswordInputElement = fixture.debugElement.query(By.css('#register_password_input')).nativeElement;
        const registerPasswordConfirmationInputElement = fixture.debugElement.query(By.css('#register_password_confirmation_input')).nativeElement;
        registerPasswordInputElement.value = traderPassword;
        registerPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerPasswordConfirmationInputElement.value = traderPassword;
        registerPasswordConfirmationInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar when register button is clicked and password is not filled', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        const registerUsernameInputElement = fixture.debugElement.query(By.css('#register_username_input')).nativeElement;
        const registerPasswordConfirmationInputElement = fixture.debugElement.query(By.css('#register_password_confirmation_input')).nativeElement;
        registerUsernameInputElement.value = existingTraderUsername;
        registerUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerPasswordConfirmationInputElement.value = traderPassword;
        registerPasswordConfirmationInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar when register button is clicked and password confirmation is not filled', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        const registerUsernameInputElement = fixture.debugElement.query(By.css('#register_username_input')).nativeElement;
        const registerPasswordInputElement = fixture.debugElement.query(By.css('#register_password_input')).nativeElement;
        registerUsernameInputElement.value = existingTraderUsername;
        registerUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerPasswordInputElement.value = traderPassword;
        registerPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar when register button is clicked and password and password confirmation are not filled', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        const registerUsernameInputElement = fixture.debugElement.query(By.css('#register_username_input')).nativeElement;
        registerUsernameInputElement.value = existingTraderUsername;
        registerUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar when register button is clicked and username password confirmation are not filled', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        const registerPasswordInputElement = fixture.debugElement.query(By.css('#register_password_input')).nativeElement;
        registerPasswordInputElement.value = traderPassword;
        registerPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar when register button is clicked and username and password are not filled', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        const registerPasswordConfirmationInputElement = fixture.debugElement.query(By.css('#register_password_confirmation_input')).nativeElement;
        registerPasswordConfirmationInputElement.value = traderPassword;
        registerPasswordConfirmationInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar when register button is clicked and fields are not filled', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(registerEmptyFieldsMessage);
    }));

    it('should call RegisterComponent.showSnackBar when register button is clicked and passwords are different', fakeAsync(() => {
        let fixture = TestBed.createComponent(RegisterComponent);
        const registerComponent = fixture.componentInstance;
        const spy = spyOn(registerComponent, 'showSnackBar');
        const registerButton = fixture.debugElement.query(By.css('#register_button'));
        const registerUsernameInputElement = fixture.debugElement.query(By.css('#register_username_input')).nativeElement;
        const registerPasswordInputElement = fixture.debugElement.query(By.css('#register_password_input')).nativeElement;
        const registerPasswordConfirmationInputElement = fixture.debugElement.query(By.css('#register_password_confirmation_input')).nativeElement;
        registerUsernameInputElement.value = traderUsername;
        registerUsernameInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerPasswordInputElement.value = traderPassword;
        registerPasswordInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerPasswordConfirmationInputElement.value = differentTraderPassword;
        registerPasswordConfirmationInputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        registerButton.triggerEventHandler('click', null);
        tick();
        expect(spy).toHaveBeenCalledWith(registerDifferentPasswordsMessage)
    }));
});