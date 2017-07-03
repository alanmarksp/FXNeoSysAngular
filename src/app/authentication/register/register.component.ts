import {Component} from "@angular/core";
import {AuthenticateService} from "../../shared/services/authenticate/authenticate.service";
import {Authentication} from "../../shared/models/authentication.model";
import {Router} from "@angular/router";

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
            this.authenticateService.register(authentication).then((res) => this.registerSuccess())
        }
    }

    registerSuccess() {
        this.router.navigate(['/']);
    }
}