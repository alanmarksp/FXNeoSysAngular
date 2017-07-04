import {Component} from "@angular/core";
import {AuthenticateService} from "../../../services/authenticate/authenticate.service";
import {Authentication} from "../../../models/authentication.model";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private authenticateService: AuthenticateService,
                private router: Router) {
    }

    login(username: string, password: string) {
        const authentication = new Authentication(username, password);
        this.authenticateService
            .login(authentication)
            .subscribe(
                value => this.loginSuccess(value),
                error => this.loginFailure(error)
            )
    }

    private loginSuccess(value: any) {
        this.router
            .navigate(['/'])
    }

    private loginFailure(error: any) {
        //TODO implement
    }
}