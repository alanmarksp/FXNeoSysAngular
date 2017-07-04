import {Component} from "@angular/core";
import {AuthenticateService} from "../../../services/authenticate/authenticate.service";
import {Authentication} from "../../../models/authentication.model";
import {Router} from "@angular/router";
import {Response} from "@angular/http";

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    constructor(private authenticateService: AuthenticateService,
                private router: Router) {
    }

    register(username: string, password: string, passwordConfirmation: string) {
        if (password == passwordConfirmation) {
            const authentication = new Authentication(username, password);
            this.authenticateService
                .register(authentication)
                .subscribe(
                    value => this.registerSuccess(value),
                    error => this.registerFailure(error)
                )
        }
    }

    registerSuccess(value: Response) {
        this.router
            .navigate(['/']);
    }

    private registerFailure(error: any) {
        //TODO implement
    }
}