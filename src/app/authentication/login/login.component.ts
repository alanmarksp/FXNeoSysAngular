import {Component, EventEmitter, Output} from "@angular/core";
import {AuthenticateService} from "../../shared/services/authenticate/authenticate.service";
import {Authentication} from "../../shared/models/authentication.model";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    @Output() goTo = new EventEmitter();

    constructor(private authenticateService: AuthenticateService,
                private router: Router) {
    }

    login(username: string, password: string) {
        const authentication = new Authentication(username, password);
        this.authenticateService.login(authentication).then((res) => this.loginSuccess())
    }

    private loginSuccess() {
        this.router.navigate(['/'])
    }

    goToRegister() {
        this.goTo.emit("register");
    }
}